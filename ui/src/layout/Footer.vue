<template>
  <div class="flex pl-2 justify-start items-center">version:{{ this["app/version"] }}</div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["app/version"]),
  },
  name: "Footer",
  setup() {
    console.log("Main 初始化");
  },
};
</script>
