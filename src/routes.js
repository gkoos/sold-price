const Router = require("koa-router");

const router = new Router();

const PriceMap = new require("./PriceMap");
const priceMap = new PriceMap();

router.get("/api/data/1", async (ctx, next) => {
    ctx.body = priceMap.json1;
});

router.get("/api/data/2", async (ctx, next) => {
    ctx.body = priceMap.json2;
});

module.exports = router;
