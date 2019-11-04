fs = require("fs");

const MINPRICE = 10000;
const MAXPRICE = 10000000;

class PriceMap {
    constructor(dataSource = __dirname + "/data/sold-price-data.txt") {
        const rawData = fs.readFileSync(dataSource, "utf8");

        this.percentages = [
            [0, .05],
            [.05, .25],
            [.25, .75],
            [.75, .95],
            [.95, 1]
        ];

        this.rawJson = this.parse(rawData);

        this.json1 = this.calculatePercentages(this.rawJson, this.percentages);
        this.json2 = this.calculatePercentiles(this.rawJson, this.percentages);
    }

    parse(rawData) {
        return rawData.split("\n").map(rawLine => {
            if (rawLine.length) {
                const line = rawLine.split(" ");
                return ({
                    x: parseInt(line[0], 10),
                    y: parseInt(line[1], 10),
                    price: parseInt(line[2].trim(), 10)
                });
            }
        }).filter(e=>e);
    }

    calculatePercentages(rawJson, percentages) {
        return rawJson.map(record => {
            const priceRanges = percentages.map(pct => {
                return [MINPRICE + (MAXPRICE - MINPRICE) * pct[0], MINPRICE + (MAXPRICE - MINPRICE) * pct[1]];
            });

            const priceGroup = priceRanges.findIndex(priceRange => {
                return (priceRange[0] <= record.price) && (priceRange[1] >= record.price);
            });

            return {...record, priceGroup};
        })
    }

    calculatePercentiles(rawJson, percentages) {
        const indexBoundaries = percentages.map(pct => {
            return Math.floor(pct[1] * rawJson.length);
        });
        indexBoundaries[-1] = 0;

        return rawJson.sort((a, b) => {
            return a.price - b.price;
        }).map((record, index) => {
            const priceGroup = indexBoundaries.findIndex((e, i) => {
                return (indexBoundaries[i-1] <= index) && (index <= indexBoundaries[i]);
            });

            return {...record, priceGroup};
        });
    }
}

module.exports = PriceMap;