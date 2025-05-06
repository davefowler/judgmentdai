// -- simple script to generate a svg of stars
let svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="1000"><rect width="1000" height="1000" fill="black"/>`;
for(let i=0;i<120;i++){
  let x = Math.floor(Math.random()*980)+10;
  let y = Math.floor(Math.random()*980)+10;
  let r = (Math.random()*1.5+0.4).toFixed(2);
  let o = (Math.random()*0.5+0.5).toFixed(2);
  svg += `<circle cx="${x}" cy="${y}" r="${r}" fill="white" opacity="${o}"/>`;
}
svg += `</svg>`;
console.log(svg);