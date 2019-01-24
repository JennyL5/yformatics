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
    }
    
    @media (max-width: 900px) {
      #tab-${n}:not(:checked) ~ .tabs-underlay #label-tab-${n} {
        opacity:0.8;
        font-size:80%;
        width: auto;
        max-width:20%;
        margin-left: 8px;
        margin-right: 8px;
      }
      #tab-${n}:checked ~ .tabs-underlay #label-tab-${n} {
        opacity:1;
        font-size:125%;
        width: auto;
        margin-left: 8px;
        margin-right: 8px;
      }
      
    }
    `
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
    @media (max-width: 900px) {
      .indicator {
        display:none;
      }
    }

   
    `;

module.exports = data =>
  `<style>${
    data ? dynamic(data) : ""
  }</style><style>${katex}${normalise}${typekit}${base}${card}${page}</style>`;
