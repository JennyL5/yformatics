const yaml = require("js-yaml");
const fs = require("fs");
var rimraf = require("rimraf");

var commonmark = require("commonmark");
var katex = require("katex");
const Fuse = require("fuse.js");
const s3 = require("s3");
const md5File = require("md5-file");
const edge = `https://prospectus.nyc3.cdn.digitaloceanspaces.com/static`;
let client = s3.createClient({
  s3Options: {
    accessKeyId: "AO76LTYRSMNOVAVCT7GI",
    secretAccessKey: "43ohpLiCt5YAnHXyOf/L5BjjqgagY/iOmAO9q9jNbwk",
    endpoint: `nyc3.digitaloceanspaces.com`
  }
});
const find = key => {
  return new Promise((yes, no) => {
    let params = {
      s3Params: {
        Bucket: "prospectus",
        Prefix: `static/`
      }
    };
    var lister = client.listObjects(params);
    lister.on("error", function(err) {
      yes(false);
    });
    lister.on("data", function(data) {
      yes(data.Contents.find(i => i.Key == key));
    });
  });
};
const upload = async file => {
  let md5 = md5File.sync(file);
  let key = `static/${md5}`;

  let params = {
    localFile: file,

    s3Params: {
      ACL: "public-read",
      Bucket: "prospectus",
      Key: key
    }
  };
  if (!(await find(key))) {
    let uploader = client.uploadFile(params);
    uploader.on("end", function() {
      console.log("Uploaded:", key);
    });
  }
  return md5;
};
function urlify(text) {
  text = text.replace(/ /g, "-");
  return text;
}
function parse(markdown, path) {
  var reader = new commonmark.Parser();
  var writer = new commonmark.HtmlRenderer();
  var parsed = reader.parse(markdown);
  var walker = parsed.walker();
  var event, node;
  //var inEmph = false;
  var inc = 1;
  var contents = [];
  var headig_text = "";
  let latex = "";
  let in_latex = false;
  var inHeading = false;
  var headingLevel = 0;
  let para = "";
  let in_para = false;
  // console.log(parsed);
  while ((event = walker.next())) {
    node = event.node;

    if (node.firstChild != null) {
    } else {
      // console.log("   ->null");
    }
    if (node.lastChild != null) {
    } else {
      // console.log("   ->null");
    }
    if (node.next != null) {
    } else {
      // console.log("   -+null");
    }
    if (event.entering && node.type === "heading") {
      inHeading = true;
      headingLevel = node.level;
    } else if (!event.entering && node.type === "heading") {
      var ne = new commonmark.Node("html_block", node.sourcepos);
      ne.literal =
        "<h" +
        headingLevel +
        ' id="' +
        urlify(headig_text) +
        "-" +
        inc +
        '">' +
        headig_text +
        "</h" +
        headingLevel +
        ">";

      contents.push({
        link: "#" + urlify(headig_text) + "-" + inc,
        name: headig_text
      });
      inc += 1;
      node.insertBefore(ne);
      inHeading = false;
      headingLevel = 0;
      headig_text = "";
      node.unlink();
    } else if (inHeading) {
      headig_text += node.literal;
    }

    if (
      event.entering &&
      node.type === "paragraph" &&
      node.firstChild &&
      node.firstChild.literal &&
      node.firstChild.literal.startsWith("$$")
    ) {
      in_latex = true;
      latex = "";
      console.log(node.firstChild.literal);
    } else if (
      !event.entering &&
      node.type === "paragraph" &&
      node.lastChild &&
      node.lastChild.literal &&
      node.lastChild.literal.endsWith("$$")
    ) {
      in_latex = false;
      var ne = new commonmark.Node("html_block", node.sourcepos);

      ne.literal = `<p style="text-align:center">${katex.renderToString(
        latex.slice(2, -2)
      )}</p>`;
      node.insertBefore(ne);
      node.unlink();
    } else if (in_latex) {
      latex += node.literal;
    } else if (event.entering && node.type === "image") {
      let u = md5File.sync(`${path}/${node.destination}`);
      upload(`${path}/${node.destination}`);
      node.destination = `${edge}/${u}`;
      // let para = writer.render(node);

      // let split = para.split(/\$(.*?)\$/g);
      // split = split.reduce((acc, curr) => {
      //   let last =
      //     acc.slice(-1).length > 0 ? acc.slice(-1)[0] : { type: "latex" };
      //   return [
      //     ...acc,
      //     last.type == "html"
      //       ? { type: "latex", literal: curr }
      //       : { type: "html", literal: curr }
      //   ];
      // }, []);
      // split = split
      //   .map(part =>
      //     part.type == "html"
      //       ? part.literal
      //       : katex.renderToString(part.literal)
      //   )
      //   .join("");
      // var ne = new commonmark.Node("html_block", node.sourcepos);

      // ne.literal = split;
      // if (split != para) {
      //   //console.log(ne);
      // }
      // node.insertBefore(ne);
      // node.unlink();
    } else if (!event.entering && node.type === "paragraph") {
      let para = writer.render(node);

      let split = para.split(/\$(.*?)\$/g);
      split = split.reduce((acc, curr) => {
        let last =
          acc.slice(-1).length > 0 ? acc.slice(-1)[0] : { type: "latex" };
        return [
          ...acc,
          last.type == "html"
            ? { type: "latex", literal: curr }
            : { type: "html", literal: curr }
        ];
      }, []);
      split = split
        .map(part =>
          part.type == "html"
            ? part.literal
            : katex.renderToString(part.literal)
        )
        .join("");
      var ne = new commonmark.Node("html_block", node.sourcepos);

      ne.literal = split;
      if (split != para) {
        //console.log(ne);
      }
      node.insertBefore(ne);
      node.unlink();
    }
  }

  return { html: writer.render(parsed), contents: contents, md: markdown };
}

let searchable = [];
let options = {
  keys: ["name", "slug"]
};

const read = (path, context) => {
  try {
    let doc;
    try {
      doc = yaml.safeLoad(
        fs.readFileSync(`${root}${path}/structure.yaml`, "utf8")
      );
    } catch (e) {
      console.log(e);
      return [];
    }

    return doc
      .filter(p => p.visible)
      .map(part => {
        switch (part.type) {
          case "level":
          case "subject":
          case "unit":

          case "topic":
            let { image, ...rest } = part;
            if (image) {
              let u = md5File.sync(`${root}${path}/${image}`);
              upload(`${root}${path}/${image}`);
              rest.image = `${edge}/${u}`;
            } else if (context && context.parent && context.parent.image) {
              rest.image = context.parent.image;
            }
            if (
              !rest.colour &&
              context &&
              context.parent &&
              context.parent.colour
            ) {
              rest.colour = context.parent.colour;
            } else if (!rest.colour) {
              rest.colour = "#2196f3";
            }
            let children = read(`${path}/${part.slug}`, {
              parent: { ...rest, link: `${path}/${part.slug}` }
            });
            let to_push = {
              ...rest,
              link: `${path}/${part.slug}`
            };

            if (part.type == "topic") {
              to_push.children = children;
            }

            searchable.push(to_push);
            return {
              ...rest,
              link: `${path}/${part.slug}`,
              children: children
            };
          case "note":
            return {
              ...part,
              link: `${path}/${part.slug}`,
              title: context.parent.name,
              render: parse(
                fs.readFileSync(`${root}${path}/${part.source}`, "utf8"),
                `${root}${path}`
              )
            };
          default:
            return { ...part, link: `${path}/${part.slug}` };
        }
      });
  } catch (e) {
    console.error(e);
  }
};
const root = `.`;
// Read root yaml
rimraf.sync("./build");
fs.mkdirSync("./build");
fs.copyFileSync("./styles/favicon.ico", "./build/favicon.ico");
let fuse = new Fuse(searchable, options);
let r = {
  data: read(""),
  search: term => fuse.search(term)
};
const createFolders = type => {
  searchable
    .filter(s => s.type == type)
    .forEach(se => {
      fs.mkdirSync(`./build${se.link}`);
    });
};
const createTopicFolders = () => {
  searchable
    .filter(s => s.type == "topic")
    .forEach(se => {
      if (se.children) {
        se.children.forEach(action => fs.mkdirSync(`./build${action.link}`));
      }
    });
};
createFolders(`level`);
createFolders(`subject`);
createFolders(`unit`);
createFolders(`topic`);
createTopicFolders();
console.log(searchable);
const UnitTemplate = require(`./UnitTemplate.js`);
const NoteTemplate = require(`./NoteTemplate.js`);
const RootTemplate = require(`./RootTemplate.js`);
const write = data => {
  if (data) {
    data.forEach(part => {
      switch (part.type) {
        case "note":
          fs.writeFileSync(
            `./build${part.link}/index.html`,
            NoteTemplate(part)
          );
          return;
        case "unit":

        case "subject":
          fs.writeFileSync(
            `./build${part.link}/index.html`,
            UnitTemplate(part)
          );
          return write(part.children);

        case "level":

        case "topic":

        default:
          return write(part.children);
      }
    });
  }
};
fs.writeFileSync(`./build/index.html`, RootTemplate(r.data));
write(r.data);
console.log(r.data);
module.exports = r;
