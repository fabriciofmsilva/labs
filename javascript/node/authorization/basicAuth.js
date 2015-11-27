import basicAuth from 'basic-auth';

function unauthorized(res) {
  res.set('WWW-Authenticate', 'BASIC realm=Authorization Required');
  return res.send(401);
}

export default function auth(req, res, next) {
  const {name, pass} = basicAuth(req) || {};

  if(!name || !pass) {
    return unauthorized(res);
  }

  if(name === 'john' && pass === 'secret') {
    return next();
  }

  return unauthorized(res);
};
