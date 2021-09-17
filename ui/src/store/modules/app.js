var App = {
  namespaced: true,
  state() {
    return {
      version: "v0.0.1",
      menuDisplay: {
        display: false,
        left: "200px",
        top:"200px",
      },
      collectMenu: [],
      contextMenu: [],
    };
  },
  getters: {
    version(state) {
      return state.version;
    },
    displayContextMenu(state) {
      return state.menuDisplay;
    },
    getMenuList(state) {
      return state.contextMenu;
    },
  },
  mutations: {
    displayContextMenu(state, ctx) {
      state.menuReCollect = true;
      state.contextMenu = state.collectMenu;
      state.collectMenu = [];
      state.menuDisplay.display = true;
      state.menuDisplay.left = ctx.pageX + "px";
      state.menuDisplay.top = ctx.pageY +"px";
      console.log("显示右键菜单");
      console.log(ctx);
      console.log(state.contextMenu);
    },
    collectMenu(state, ctx) {
      console.log("收集菜单");
      console.log(ctx);
      state.collectMenu = [
        ...state.collectMenu,
        ...ctx
      ]
    },

    closeMenu(state) {
      state.menuDisplay.display = false;
    }
  },
  actions: {
    displayContextMenu(context, ctx) {
      context.commit("displayContextMenu", ctx);
    },
    collectMenu(context, ctx) {
      context.commit("collectMenu", ctx);
    },
    closeMenu(context) {
      context.commit("closeMenu");
    }
  },
};

export default App;
