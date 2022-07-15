import { GET } from './request'

const musicRankingsDetails = () => {
  return GET({
    url: '/myip/index.php?',
    params: {
      aa1: 'json',
    },
  })
}

export default {
  musicRankingsDetails,
}
