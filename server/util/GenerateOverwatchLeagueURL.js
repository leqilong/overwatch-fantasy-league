const url = require('url');
const config = require('./ConfigOverwatchLeagueEndpoint');

module.exports = {
  generateFetchMatchesURL: function(){
    const baseUrlConfig = config.baseUrl;
    const params = config.params;

    return url.format({
      protocol: baseUrlConfig.protocol,
      hostname: baseUrlConfig.hostname,
      pathname: baseUrlConfig.path,
      query: params
    });

  }
}
