var ConnectList = {
  namespaced: true,
  state: () => ({
    current: null,
    group: [
      {
        id: 1,
        name: "dev",
        open: false,
        children: [
          {
            id: 1,
            type: 1,
            name: "mqtt",
            group: 1,
            status: 0,
            active: false,
          },
          {
            id: 2,
            type: 2,
            name: "mysql",
            group: 1,
            status: 1,
            active: false,
          },
          {
            id: 3,
            type: 3,
            name: "redis",
            group: 1,
            status: 0,
            active: false,
          },
          {
            id: 4,
            type: 3,
            name: "redis",
            group: 1,
            status: 0,
            active: false,
          },
          {
            id: 5,
            type: 3,
            name: "redis",
            group: 1,
            status: 0,
            active: false,
          },
          {
            id: 6,
            type: 3,
            name: "redis",
            group: 1,
            status: 0,
            active: false,
          },
          {
            id: 7,
            type: 3,
            name: "redis",
            group: 1,
            status: 0,
            active: false,
          },
        ],
      },
      {
        id: 2,
        name: "prod",
        open: false,
        children: [
          {
            id: 8,
            type: 1,
            name: "mqtt",
            group: 1,
            status: 0,
            active: false,
          },
          {
            id: 9,
            type: 2,
            name: "mysql",
            group: 1,
            status: 0,
            active: false,
          },
          {
            id: 10,
            type: 3,
            name: "redis",
            group: 1,
            status: 0,
            active: false,
          },
        ],
      },
    ],
    activeConnectMap: new Map(),
    activeConnectList: [],
    adapter: [
      {
        name: "home",
        property:"HomeProperty",
        menuSlot:"homemenu",
      },
      {
        name: "mqtt",
        property:"mqttproperty",
        menuSlot:"mqttmenu",
      },
      {
        name: "mysql",
        property:"mysqlproperty",
        menuSlot:"mysqlmenu",
      },
      {
        name: "Redis",
        property:"redisproperty",
        menuSlot:"redismenu",
      },
    ],
  }),
  mutations: {
    closeActive(state, ctx) {
      console.log("清除"+ctx.id)
      state.activeConnectMap.delete(ctx.id);
      for (var item of state.activeConnectList) {
        if (item.id == ctx.id) {
          console.log("TODO 清除")
          item.activeBarDelete = false;
          break
        }
      }
    },
    setCurrentCtx(state, ctx) {
      var f = false;
      if (state.current != null && state.current.id == ctx.id) {
        console.log("更新")
        state.current.active=!state.current.active
        return;
      }
      for (const g of state.group) {
        for (const c of g.children) {
          if (c.id == ctx) {
            c.active = !c.active;
            state.current = c;
            //如果有什么都不做
            if (state.activeConnectMap.has(c.id)) {

            //如果没有就添加
            } else {
              state.activeConnectMap.set(c.id, c);
              c.activeBarDelete = true;
              state.activeConnectList.push(c);
            }
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
    closeActive(context, ctx) {
      context.commit("closeActive", ctx);
    },
    setCurrentCtx(context, ctx) {
      console.log("设置当前链接id" + ctx);
      context.commit("setCurrentCtx", ctx);
    },
  },
  getters: {
    activeConnectList(state) {
      return state.activeConnectList;
    },
    connectList(state) {
      console.log("获取列表");
      return state.group;
    },
    currentCtx(state) {
      return state.current;
    },
    getAdapters(state){
      return state.adapter;
    },
    getAdapter(state) {
      return state.adapter[state.current?.type || 0];
    },
  },
};

export default ConnectList;
