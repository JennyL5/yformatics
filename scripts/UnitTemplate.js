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
        E.Title(`Prospectus`),
        E.StyleTemplate(data.children)
      ),
      E.Body(
        E.Div({ class: [`page-container`, `unit`] })(
          E.Div({ class: [`page-tabs`] })(
            E.Div({ class: [`tabs-underlay`] })(
              E.Join(
                data.children.map((child, n) =>
                  E.Label({ for: `tab-${n}`, class: [`page-tab`] })(child.name)
                )
              )
            ),
            E.Join(
              data.children.map((child, n) =>
                E.Input({ name: `tab`, type: `radio`, id: `tab-${n}` })()
              )
            ),
            E.Div({ class: ["indicator"] })(),

            E.Div({ class: [`page-content`] })(
              E.Join(
                data.children.map((child, n) => {
                  return E.Div({
                    class: [`pane`],
                    id: `pane-${n}`,
                    style: `width: ${100 / data.children.length}%;`
                  })(
                    child.children.length > 0
                      ? E.Join(
                          child.children.map(gc => {
                            return E.Div({
                              href: gc.link,
                              class: [`card`, `no-bleed`]
                            })(
                              E.Img({ src: gc.image, class: [`image`] })(),
                              E.H3()(gc.name),
                              E.Div()(
                                gc.children
                                  ? E.Join(
                                      gc.children.map(ggc =>
                                        E.Anchor({
                                          href: ggc.link,
                                          class: [`action`]
                                        })(ggc.name)
                                      )
                                    )
                                  : "Coming soon"
                              )
                            );
                          })
                        )
                      : E.Join([
                          E.Img({
                            src: `https://prospectus.nyc3.cdn.digitaloceanspaces.com/static/construction`
                          })(),
                          E.H1()("Page under construction"),
                          E.H2()("Check back soon!")
                        ])
                  );
                })
              )
            )
          )
        ),

        E.Script(fs.readFileSync("./scripts/app.js"))
      )
    )
  );
module.exports = render;
