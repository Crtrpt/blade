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
      ],
      content: [
        {
          qos:0,
          time: "11001",
          content: "{name:20}",
          topic:"/test1"
        },
        {
          qos:1,
          time: "11001",
          content: "2999",
          topic:"/test1"
        },
        {
          qos:1,
          time: "11001",
          content: "2999",
          topic:"/test1"
        }
        , {
          qos:1,
          time: "11001",
          content: "2999",
          topic:"/test1"
        }, {
          qos:1,
          time: "11001",
          content: "2999",
          topic:"/test1"
        }
      ]
    }
  },
  getters: {
    topicList(state) {
      return state.topicList;
    },
    content(state) {
      return state.content;
    }
  },
}

export default Mqtt;