<template>
  <div class="w-full h-full" @click="click()">
    <div
      v-if="display.display"
      class="
        app_context_menu
        absolute
        shadow-2xl
        p-2
        bg-gray-400
        text-gray-600 text-sm
      "
      :style="{
        left: display.left,
        top: display.top,
      }"
      @contextmenu="stop($event)"
    >
      右键菜单
    </div>
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
import { mapActions, mapState, mapGetters } from "vuex";
export default defineComponent({
  name: "App",
  computed: {
    ...mapGetters({
      display: "app/displayContextMenu",
    }),
  },
  methods: {
    ...mapActions({
      closeMenu: "app/closeMenu",
    }),
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
}
</style>
