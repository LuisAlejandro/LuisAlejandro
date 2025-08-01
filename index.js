const config = require("./config");
const fs = require("fs");


fs.writeFileSync(
  './README.md',
  `
![About Me](https://github.com/LuisAlejandro/LuisAlejandro/blob/master/images/banner.svg)

I'm passionate 💖 about finding out end user needs and creating beautiful interfaces with sustainable architecture. I've been on the field for more than ${new Date().getFullYear() - config.STARTYEAR} years but I'm always fascinated by new technology, which I try to integrate into new projects as soon as possible.

I'm also a huge advocate of mental health 🧠 in our field: products for humans should be made by humans behaving as if they were human (or at least pretending to act like one).

### 🛠 &nbsp; On my toolbox

${config.SKILLS.map(({ logo, label, color, labelColor, logoColor }) => {
  return `<img src="https://img.shields.io/static/v1?message=${encodeURIComponent(label)}&label=&style=flat&logo=${encodeURIComponent(logo)}&color=${encodeURIComponent(color)}&labelColor=${encodeURIComponent(labelColor)}&logoColor=${encodeURIComponent(logoColor)}"/>&nbsp;`;
}).join("")}

### 🤝🏻 &nbsp; Get in touch

${config.SOCIAL.map(({ link, logo, label, color, labelColor, logoColor }) => {
  return `<a href="${link}"><img src="https://img.shields.io/static/v1?message=${encodeURIComponent(label)}&label=&style=flat&logo=${encodeURIComponent(logo)}&color=${encodeURIComponent(color)}&labelColor=${encodeURIComponent(labelColor)}&logoColor=${encodeURIComponent(logoColor)}"/></a>&nbsp;`;
}).join("")}
`
);
