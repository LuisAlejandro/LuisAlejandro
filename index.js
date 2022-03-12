const config = require("./config");
const fs = require("fs");


fs.writeFileSync(
  './README.md',
  `
![About Me](https://github.com/LuisAlejandro/LuisAlejandro/blob/master/banner.svg)

I'm a Telecom Engineer, founder of [@CollageLabs](https://github.com/CollageLabs): a tech startup on early stage.

I'm passionate 💖 about finding out end user needs and creating beautiful interfaces with sustainable architecture.

I've been on the field for more than 12 years but I'm always fascinated by new technology, which I try to integrate into new projects as soon as possible.

I'm also a huge advocate of mental health 🧠 in our field: products for humans should be made by humans behaving humanly.

### 🛠 &nbsp; On my toolbox

#### Typescript

${config.SKILLS.map(({ logo, label, color, labelColor, logoColor }) => {
  return `<img src="https://img.shields.io/static/v1?message=${label}&label=&style=flat&logo=${logo}&color=${color}&labelColor=${labelColor}&logoColor=${logoColor}"/>&nbsp;`;
}).join("")}

### 🤝🏻 &nbsp; Get in touch

${config.SOCIAL.map(({ link, logo, label, color, labelColor, logoColor }) => {
  return `<a href="${link}"><img src="https://img.shields.io/static/v1?message=${label}&label=&style=flat&logo=${logo}&color=${color}&labelColor=${labelColor}&logoColor=${logoColor}"/></a>&nbsp;`;
}).join("")}
`
);
