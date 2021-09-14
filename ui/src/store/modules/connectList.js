var ConnectList = {
  namespaced: true,
  state: () => ({
    current: null,
    group: [
      {
        id: 1,
        name: "分组1",
        open: true,
        children: [
          {
            id: 1,
            type: 1,
            name: "mqtt",
            group: 1,
            status: 0,
          },
          {
            id: 2,
            type: 2,
            name: "mysql",
            group: 1,
            status: 1,
          },
          {
            id: 3,
            type: 3,
            name: "redis",
            group: 1,
            status: 0,
          },
          {
            id: 4,
            type: 3,
            name: "redis",
            group: 1,
            status: 0,
          },
          {
            id: 5,
            type: 3,
            name: "redis",
            group: 1,
            status: 0,
          },
          {
            id: 6,
            type: 3,
            name: "redis",
            group: 1,
            status: 0,
          },
          {
            id: 7,
            type: 3,
            name: "redis",
            group: 1,
            status: 0,
          },
        ],
      },
      {
        id: 2,
        name: "分组2",
        open: false,
        children: [
          {
            id: 8,
            type: 1,
            name: "mqtt",
            group: 1,
            status: 0,
          },
          {
            id: 9,
            type: 2,
            name: "mysql",
            group: 1,
            status: 0,
          },
          {
            id: 10,
            type: 3,
            name: "redis",
            group: 1,
            status: 0,
          },
        ],
      },
    ],
    adapter: [
      {
        name: "home",
        property:"HomeProperty"
      },
      {
        name: "mqtt",
        property:"mqttproperty"
      },
      {
        name: "mysql",
        property:"mysqlproperty"
      },
      {
        name: "Redis",
        property:"redisproperty"
      },
    ],
  }),
  mutations: {
    setCurrentCtx(state, ctx) {
      var f = false;
      if (state.current != null && state.current.id == ctx.id) {
        return;
      }
      for (const g of state.group) {
        for (const c of g.children) {
          if (c.id == ctx) {
            state.current = c;
            f = true;
            break;
          }
        }
        if (f == true) {
          break;
        }
      }
    },
  },
  actions: {
    setCurrentCtx(context, ctx) {
      console.log("设置当前链接id" + ctx);
      context.commit("setCurrentCtx", ctx);
    },
  },
  getters: {
    connectList(state) {
      console.log("获取列表");
      return state.group;
    },
    currentCtx(state) {
      return state.current;
    },
    getAdapter(state) {
      return state.adapter[state.current?.type || 0];
    },
  },
};

export default ConnectList;
