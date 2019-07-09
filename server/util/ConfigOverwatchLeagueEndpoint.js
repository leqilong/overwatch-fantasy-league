module.exports = {
  baseUrl: {
    protocol: 'https',
    hostname: 'api.overwatchleague.com',
    path: '/schedule'
  },

  params: {
    expand: 'team',
    locale: 'en_US',
    season: '2019',
    separateStagePlayoffsWeek: true
  }
}
