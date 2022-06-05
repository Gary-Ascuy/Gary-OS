const withTM = require('next-transpile-modules')(['@garyos/kernel']);

module.exports = withTM({
  reactStrictMode: true,
});
