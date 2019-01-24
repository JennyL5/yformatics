let fs = require("fs");
var minify = require("html-minifier").minify;
let makeElem = (tag, ...args) => {
  let config = args[0];
  if (typeof config == `object`) {
    config = Object.keys(config)
      .map(key => {
        let val;
        if (key == "class") {
          val = config[key].join(" ");
        } else {
          val = config[key];
        }
        return `${key}="${val}"`;
      })
      .join(" ");
    if (config.length > 0) {
      config = ` ${config}`;
    }
  } else {
    config = ``;
  }

  return `<${tag}${config}>${args.slice(1).join(``)}</${tag}>`;
};

const HTML = options => (...children) => makeElem("html", options, ...children);
const Head = (...children) => makeElem("head", {}, ...children);
const Body = (...children) => makeElem("body", {}, ...children);
const Meta = options => makeElem("meta", options);
const Title = text => makeElem("title", {}, text);
const Anchor = options => (...children) => makeElem("a", options, ...children);
const Div = options => (...children) => makeElem("div", options, ...children);
const H2 = options => (...children) => makeElem("h2", options, ...children);
const H3 = options => (...children) => makeElem("h3", options, ...children);
const H1 = options => (...children) => makeElem("h1", options, ...children);
const Img = options => (...children) => makeElem("img", options, ...children);
const Input = options => (...children) =>
  makeElem("input", options, ...children);
const Label = options => (...children) =>
  makeElem("label", options, ...children);
const Join = children => children.join("");
const Script = js => makeElem("script", {}, js);
const StyleTemplate = require("./StyleTemplate.js");
let Build = inner =>
  minify(inner, {
    removeAttributeQuotes: true,
    removeStyleLinkTypeAttributes: true,
    collapseWhitespace: true,
    minifyCSS: true,
    minifyJS: true
  });

module.exports = {
  Build,
  HTML,
  Head,
  Body,
  Meta,
  Title,
  Anchor,
  Div,
  H1,
  H2,
  Img,
  Input,
  Label,
  Join,
  Script,
  StyleTemplate,
  H3
};
