import { atom, selector } from 'recoil'

export const countState = atom({
  key: 'countState', // unique ID (with respect to other atoms/selectors)
  default: 0, // default value (aka initial value)
})

/**
 * 处理数据的纯函数
 */
export const doubleCountState = selector({
  key: 'doubleCountState', // unique ID (with respect to other atoms/selectors)
  get: ({ get }) => {
    const count = get(countState)
    return count * 2
  },
})

/**
 * 异步请求副作用操作
 */
const currentUserNameQuery = selector({
  key: 'CurrentUserName',
  get: async ({ get }) => {
    const response = await myDBQuery({
      userID: get(countState),
    })
    return response
  },
})

//请求函数
function myDBQuery(data: any) {
  // 请求
}
