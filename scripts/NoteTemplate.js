let fs = require("fs");
let E = require("./BaseTemplate.js");
let render = data =>
  E.Build(
    E.HTML({ lang: "en" })(
      E.Head(
        E.Meta({ charset: `utf-8` }),
        E.Meta({
          name: `viewport`,
          content: `width=device-width,initial-scale=1.0`
        }),
        E.Title(`Yformatics`),
        E.StyleTemplate()
      ),
      E.Body(
        E.Div({ class: [`page-container`, `note`] })(
          E.H1({ id: `top`, class: [`page-title`] })(data.title),
          E.Div({ class: [`page-index`] })(
            E.Join(
              data.render.contents.map(c =>
                E.Anchor({ href: c.link, class: [`index-link`] })(c.name)
              )
            )
          ),
          E.Div({ class: [`page-content`] })(data.render.html)
        ),

        E.Script(fs.readFileSync("./scripts/app.js"))
      )
    )
  );
module.exports = render;
