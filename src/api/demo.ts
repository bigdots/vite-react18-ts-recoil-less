import { GET } from './request'

const musicRankingsDetails = () => {
  return GET({
    url: '/musicRankingsDetails',
    params: {
      type: 1,
    },
  })
}

export default {
  musicRankingsDetails,
}
