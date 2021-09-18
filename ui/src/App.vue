<template>
  <div class="w-full h-full" @click="click()">
    <context-menu />
    <router-view></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
import { mapActions, mapState, mapGetters } from "vuex";
import ContextMenu from "./components/ContextMenu.vue";
export default defineComponent({
  components: { ContextMenu },
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
