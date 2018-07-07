const Router = require('koa-router');
const queries = require('../db/queries/strings');

const router = new Router();
const BASE_URL = `/api/v1/strings`;

module.exports = router;