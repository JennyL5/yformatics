window.inflight = {};
window.addEventListener("popstate", e => {
  console.log(e);
  if (!sessionStorage[window.location.pathname]) {
    fetch(window.location.pathname)
      .then(r => r.text())
      .then(html => {
        sessionStorage[window.location.pathname] = html;
        handle(window.location.pathname);
      });
  } else {
    handle(window.location.pathname);
  }
});
document.addEventListener(
  "mouseover",
  e => {
    if (e.target.tagName == "A") {
      let href = e.target.attributes.href.nodeValue;
      if (!window.inflight[href] && !sessionStorage[href]) {
        window.inflight[href] = true;
        fetch(href)
          .then(r => r.text())
          .then(html => {
            sessionStorage[href] = html;
            window.inflight[href] = false;
          });
      }
    } else if (
      e.target.parentElement &&
      e.target.parentElement.tagName == "A"
    ) {
      let href = e.target.parentElement.attributes.href.nodeValue;
      if (!window.inflight[href] && !sessionStorage[href]) {
        window.inflight[href] = true;
        fetch(href)
          .then(r => r.text())
          .then(html => {
            sessionStorage[href] = html;
            window.inflight[href] = false;
          });
      }
    }
  },
  true
);

document.addEventListener(
  "click",
  e => {
    if (e.target.tagName == "A") {
      e.preventDefault();

      goto(e.target.attributes.href.nodeValue);
    } else if (
      e.target.parentElement &&
      e.target.parentElement.tagName == "A"
    ) {
      e.preventDefault();

      goto(e.target.parentElement.attributes.href.nodeValue);
    }
  },
  true
);
function goto(href) {
  if (href.startsWith("#")) {
    document
      .getElementById(href.slice(1))
      .scrollIntoView({ behavior: "smooth" });
    return;
  }
  handle(href);
  history.pushState({}, "", href);
}
function handle(href) {
  if (!sessionStorage[href]) {
    setTimeout(() => handle(href), 200);
  } else {
    let elem = document.createElement("html");
    elem.innerHTML = sessionStorage[href];
    document.head.replaceChild(
      elem.getElementsByTagName("style")[0],
      document.getElementsByTagName("style")[0]
    );
    document.documentElement.replaceChild(
      elem.getElementsByTagName("body")[0],
      document.body
    );
  }
}
