var Mqtt = {
  namespaced: true,
  state() {
    return {
      topicList: [
        {
          name: "/test1",
          upCount:99,
          downCount: 99,
          up: 99,
          down: 99,
        },
        {
          name: "/test2",
          upCount:99,
          downCount: 99,
          up: 99,
          down: 99,
        },
        {
          name:"/test3"
        },
        {
          name:"/test4"
        },
        {
          name:"/test5"
        },
        {
          name:"/test6"
        },
        {
          name:"/test7"
        },
        {
          name:"/test8"
        },
        {
          name:"/test9"
        },
        {
          name:"/test10"
        }
      ]
    }
  },
  getters: {
    topicList(state) {
      return state.topicList;
    },
  },
}

export default Mqtt;