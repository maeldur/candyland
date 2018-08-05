const Koa = require("koa");
const app = new Koa();
const Router = require("koa-router");
const router = new Router();
const koaBody = require("koa-body");

const model = require("./model");

model.developmentResync();

router.get("/api/candidate", async ctx => {
  let candidate = await model.Candidate.findById(1);
  ctx.body = {
    success: true,
    candidate
  };
});

router.put("/api/candidate", koaBody(), async ctx => {
  let candidate = await model.Candidate.findById(1);
  if (!candidate) {
    ctx.body = {
      success: false
    };
    return;
  }
  var body = ctx.request.body;
  if (body.priority1) {
    candidate.priority1 = body.priority1;
  }
  if (body.priority2) {
    candidate.priority2 = body.priority2;
  }
  if (body.priority3) {
    candidate.priority3 = body.priority3;
  }
  if (body.extendedBiography) {
    candidate.extendedBiography = body.extendedBiography
  }
  if (body.philosophy) {
    candidate.philosophy = body.philosophy
  }
  await candidate.save()
  ctx.body = {
    success: true
  };
});

app.use(router.routes());
app.listen(4000);
