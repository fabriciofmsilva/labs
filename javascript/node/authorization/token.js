var koa = require('koa');
var jwt = require('koa-jwt');

var app = koa();

app.use(jwt({
  secret: 'very-secret',
}));

// Protected middleware
app.use(function *() {
  // content of the toker will be available on this.state.user
  this.body = {
    secret: '42',
  };
});
