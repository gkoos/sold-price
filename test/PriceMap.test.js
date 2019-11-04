const PriceMap = require("../src/PriceMap");
const priceMap = new PriceMap();

const fixtures = require("./fixtures"); console.log()

describe("PriceMap: calculatePercentages()", () => {
    test("should calculate price groups correctly", async () => {
        expect(priceMap.calculatePercentages(fixtures.houses, priceMap.percentages)).toEqual(fixtures.housesWithPriceGroup);
    });
});

describe("PriceMap: parse()", () => {
    test("should calculate age correctly", () => {
        expect(priceMap.parse(fixtures.rawHouses)).toEqual(fixtures.houses);
    });
});