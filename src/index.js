const Koa = require('Koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', (ctx) => {
  ctx.body = '홈';
});

router.get('/about', (ctx) => {
  ctx.body = '소개';
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
  console.log('listending to port 4000');
});
