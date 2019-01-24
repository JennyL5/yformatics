const fs = require("fs");
let katex = fs.readFileSync("./styles/katex.css");
let normalise = fs.readFileSync("./styles/normalise.css");
let typekit = fs.readFileSync("./styles/typekit.css");
let base = fs.readFileSync("./styles/base.css");
let card = fs.readFileSync("./styles/card.css");
let page = fs.readFileSync("./styles/page.css");
let dynamic = data => ` 
${data
  .map(
    (_, n) => `
    #tab-${n}:checked ~ .page-content {
       transform:translateX(-${n * (100 / data.length)}%);
    }
    #tab-${n}:checked ~ .indicator {
         transform:translateX(${n * 100}%);
    }`
  )
  .join("")}
    .page-content {
        width:${data.length * 100}%;
      position: relative;
      transition: transform 200ms ease-in-out;
      will-change: transform;
      text-align: center;
      margin-top:56px;
    }
    
    .indicator {
      display: inline-block;
      height: 4px;
      background: #fff;
      width: 20%;
      position: absolute;
      top: 52px;
      left: ${(100 - data.length * 20) / 2}%;
      transition: transform 300ms ease-in-out;
      will-change: transform;
    }
    `;

module.exports = data =>
  `<style>${
    data ? dynamic(data) : ""
  }</style><style>${katex}${normalise}${typekit}${base}${card}${page}</style>`;
