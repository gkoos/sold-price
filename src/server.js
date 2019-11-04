const Koa = require("koa");
const cors = require('koa-cors');
const serve = require("koa-static");
const mount = require("koa-mount");

const routes = require("./routes");

const app = new Koa();

const static_pages = new Koa();
static_pages.use(serve(__dirname + "/frontend/build")); //serve the build directory
app
    .use(mount("/", static_pages))
    .use(cors())
    .use(routes.routes());

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
    console.log(`==> Server listening on port ${PORT}.`);
});