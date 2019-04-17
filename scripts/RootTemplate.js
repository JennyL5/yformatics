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
        E.StyleTemplate(data),
        `
<!-- Matomo -->
<script type="text/javascript">
  var _paq = window._paq || [];
  /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="//analytics.penalosa.dev/";
    _paq.push(['setTrackerUrl', u+'matomo.php']);
    _paq.push(['setSiteId', '2']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
  })();
</script>
<noscript><p><img src="//analytics.penalosa.dev/matomo.php?idsite=2&amp;rec=1" style="border:0;" alt="" /></p></noscript>
<!-- End Matomo Code -->
`      ),
      E.Body(
        E.Div({ class: [`page-container`, `root`] })(
          E.Div({ class: [`page-tabs`] })(
            E.Join(
              data.map((child, n) =>
                E.Input({
                  name: `tab`,
                  checked: "true",
                  type: `radio`,
                  id: `tab-${n}`
                })()
              )
            ),
            E.Div({ class: [`tabs-underlay`] })(
              E.Join(
                data.map((child, n) =>
                  E.Label({
                    for: `tab-${n}`,
                    id: `label-tab-${n}`,
                    class: [`page-tab`]
                  })(child.name)
                )
              )
            ),

            E.Div({ class: ["indicator"] })(),

            E.Div({ class: [`page-content`] })(
              E.Join(
                data.map((child, n) => {
                  return E.Div({
                    class: [`pane`],
                    id: `pane-${n}`,
                    style: `width: calc(${100 / data.length}% - 80px);`
                  })(
                    child.children.length > 0
                      ? E.Join(
                          child.children.map(gc => {
                            return E.Anchor({
                              href: gc.link,
                              class: [`card`, `bleed`],
                              style: `background:${gc.colour};`
                            })(
                              E.Img({ src: gc.image, class: [`image`] })(),
                              E.H2()(gc.name)
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
