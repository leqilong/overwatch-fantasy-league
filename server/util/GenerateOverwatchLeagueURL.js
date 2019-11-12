const url = require('url');
const config = require('./ConfigOverwatchLeagueEndpoint');

module.exports = {
  generateFetchMatchesURL: function(){
    const baseUrlConfig = config.baseUrl;
    const params = config.params;

    baseUrlConfig['path'] = '/schedule';

    return url.format({
      protocol: baseUrlConfig.protocol,
      hostname: baseUrlConfig.hostname,
      pathname: baseUrlConfig.path,
      query: params
    });

  },

  generateFetchMatchURL: function(id){
    const baseUrlConfig = config.baseUrl;
    const params = config.params;

    baseUrlConfig['path'] = '/match/' + id.toString();

    return url.format({
      protocol: baseUrlConfig.protocol,
      hostname: baseUrlConfig.hostname,
      pathname: baseUrlConfig.path,
      query: params
    });
  },

  generateFetchPlayersURL: function(){
    const baseUrlConfig = config.baseUrl;
    baseUrlConfig['path'] = '/players';

    return url.format({
      protocol: baseUrlConfig.protocol,
      hostname: baseUrlConfig.hostname,
      pathname: baseUrlConfig.path
    });
  },

  generateFetchPlayersStatsURL: function(){
    const baseUrlConfig = config.baseUrl;
    baseUrlConfig['path'] = '/stats/players';

    return url.format({
      protocol: baseUrlConfig.protocol,
      hostname: baseUrlConfig.hostname,
      pathname: baseUrlConfig.path
    });
  }
}
