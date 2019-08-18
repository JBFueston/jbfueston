module.exports = {
  devServer: {
    disableHostCheck: true,
    port: 8080,
    hotOnly: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    },
  },
};
