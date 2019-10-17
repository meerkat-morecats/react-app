module.exports = function() {
  return [
    require('./webpack.client.config'),
    require('./webpack.server.config'),
  ];
};
