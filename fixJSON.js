const fs = require('fs');

let rawdata = fs.readFileSync('cb.json');
let cats = JSON.parse(rawdata);
console.log(cats);

// "life_span": {min: 14, max: 15},

cats.cat_breeds.map(el => {
    const [min, max] = el.life_span.split(" - ")
    el.life_span = {min: +min, max: +max}
    return el
})

// after this change life_span is no longer string, but object, 
// so split won't work in this json

console.log(cats)

fs.writeFileSync('cb.json', JSON.stringify(cats));


// from: "weight": { "imperial": "7  -  10", "metric": "3 - 5" },
// to: "weight_metric": {min: 3, max 5}

cats.cat_breeds.map(el => {
        const [min, max] = el.weight.metric.split(" - ")
        el.weight_metric = {min: +min, max: +max}
        return el
    })

    console.log(cats)

fs.writeFileSync('cb.json', JSON.stringify(cats));