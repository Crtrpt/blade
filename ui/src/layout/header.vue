<template>
  <div class="flex justify-start items-center pl-2">
    <router-link to="home">{{ ctx?.name || "" }}</router-link>
  </div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters({
      ctx: "connectlist/currentCtx",
    }),
  },

  name: "Header",
  setup() {
    console.log("Main初始化");
  },
};
</script>
