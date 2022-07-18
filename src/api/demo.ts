import { GET } from './request'

const queryIp = () => {
  return GET({
    url: '/myip/index.php?',
    params: {
      aa1: 'json',
    },
  })
}

export default {
  queryIp,
}
