<template>
  <div
    v-if="display.display"
    class="
      app_context_menu
      absolute
      shadow-2xl
      bg-gray-400
      text-gray-600 text-sm
      pt-2
      pb-2
    "
    :style="{
      left: display.left,
      top: display.top,
    }"
    @contextmenu="stop($event)"
  >
    <div
      v-for="m in menuList"
      :key="m"
      class="menu_item flex flex-col"
      @mouseover="hover(m, true, $event)"
      @mouseleave="hover(m, false, $event)"
    >
      <div
        class="
          pt-1
          pb-1
          pl-4
          pr-2
          text-sm text-white
          hover:bg-blue-400
          cursor-pointer
          flex
          items-center
        "
      >
        <div class="flex-grow" @click="m.run(m.ctx)">{{ m.name }}</div>
        <div class="flex-shark-1" v-if="(m?.children?.length || 0) > 0">
          <ChevronRightIcon class="h-5" />
        </div>
      </div>
      <div
        class="submenu flex flex-col pt-1 pb-1"
        v-if="(m?.children?.length || 0) > 0 && m.hover"
        :style="{
          top: p.top,
          left: p.left,
        }"
        @mouseleave="hover(m, false, $event)"
      >
        <div
          v-for="s in m?.children"
          :key="s"
          class="
            pt-1
            pb-1
            pl-4
            pr-2
            text-sm text-white
            hover:bg-blue-400
            cursor-pointer
          "
        >
          {{ s.name }}
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
import { mapActions, mapState, mapGetters } from "vuex";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  DotsVerticalIcon,
} from "@heroicons/vue/solid";
export default defineComponent({
  name: "ContextMenu",
  components: {
    ChevronDownIcon,
    ChevronRightIcon,
  },
  computed: {
    ...mapGetters({
      display: "app/displayContextMenu",
      menuList: "app/getMenuList",
    }),
  },
  data() {
    return {
      p: {
        left: "0px",
        top: "0px",
      },
    };
  },
  methods: {
    ...mapActions({
      closeMenu: "app/closeMenu",
    }),
    hover(c, b, e) {
      if (b == c.hover) {
        return;
      }
      c.hover = b;
      console.log(e);
      var rect = e.target.getBoundingClientRect();
      this.p.left = rect.x + 190 + "px";
      this.p.top = rect.y + "px";
    },
    click(e) {
      this.closeMenu();
    },
    stop(e: Event) {
      e.stopPropagation();
      e.preventDefault();
    },
  },
  setup() {},
});
</script>
<style>
.app_context_menu {
  height: 300px;
  width: 200px;
  z-index: 99;
  left: 200px;
  top: 200px;
  background-color: #343434;
  color: white;
}
.submenu {
  position: fixed;
  width: 200px;
  background-color: #343434;
  color: white;
}
</style>
