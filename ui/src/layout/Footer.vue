<template>
  <div>version:{{ version }}</div>
</template>

<script lang="ts">
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["version"]),
  },
  name: "Footer",
  setup() {
    console.log("Main 初始化");
  },
};
</script>
