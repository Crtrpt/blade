<template>
  <div class="w-full h-full" @click="click()">
    <context-menu />
    <Dialog />
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
import { mapActions, mapState, mapGetters } from "vuex";
import ContextMenu from "./components/ContextMenu.vue";
import Dialog from "./components/Dialog.vue";
export default defineComponent({
  components: { ContextMenu, Dialog },
  name: "App",
  computed: {
    ...mapGetters({}),
  },
  methods: {
    ...mapActions({
      closeMenu: "app/closeMenu",
    }),
    click(e) {
      this.closeMenu();
    },
  },
  setup() {},
});
</script>
