console.log("this is d3"); 

const w = 2000;
const h = 800;
const padding = 4;
const data = [708, 714, 798, 743, 644, 680, 664, 635, 644, 646, 620, 597, 617, 556, 546, 542,
              524, 566, 517, 516, 506, 480, 512, 476, 511, 509, 469, 455, 474, 515, 533, 489,
              530, 478, 499, 494, 521, 522, 536, 503, 506, 533, 575, 499, 519, 513, 558, 482,
              489, 469, 460, 509, 550];

const bottomData = [1, 2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20, 21, 22, 23, 24, 25,
                    26, 27, 28,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20, 21, 22, 23, 24, 25]

let svg = d3.select('body')
            .append('svg')
            .attr('width', w)
            .attr('height', h);

svg.selectAll('rect')
  .data(data)
  .enter()//create placeholder elements for data points
  .append('rect')//add to each rectangle
     .attrs({
      x: (d, i) => i * (w / data.length),
      y: d => h - d,
      width: w / data.length - padding,
      height: d => d,
      fill: 'orange'
});

svg.selectAll('text')
  .data(data)
  .enter()
    .append('text')
    .text(d => d)
    .attrs({
      x: (d,i) => i * (w / data.length) + (w / data.length - padding) / 2,
      y: (d) => h - d + 20 //20 is the padding
         });