const rawHouses = `
0 0 10000
1 0 1000000
2 0 5000000
3 0 8000000
4 0 9900000
`;

const houses = [
    {
        x: 0,
        y: 0,
        price: 10000
    },
    {
        x: 1,
        y: 0,
        price: 1000000
    },
    {
        x: 2,
        y: 0,
        price: 5000000
    },
    {
        x: 3,
        y: 0,
        price: 8000000
    },
    {
        x: 4,
        y: 0,
        price: 9900000
    }
];

const housesWithPriceGroup = [
    {
        x: 0,
        y: 0,
        price: 10000,
        priceGroup: 0
    },
    {
        x: 1,
        y: 0,
        price: 1000000,
        priceGroup: 1
    },
    {
        x: 2,
        y: 0,
        price: 5000000,
        priceGroup: 2
    },
    {
        x: 3,
        y: 0,
        price: 8000000,
        priceGroup: 3
    },
    {
        x: 4,
        y: 0,
        price: 9900000,
        priceGroup: 4
    },
];

module.exports = { rawHouses, houses, housesWithPriceGroup }