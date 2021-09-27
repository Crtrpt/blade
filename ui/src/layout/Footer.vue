<template>
  <div class="flex pl-2 justify-start items-center flex-row-reverse">
    <div class="displayAbout" @click="displayDialog({ name: '关于' })">
      version:{{ this["app/version"] }}
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["app/version"]),
  },
  name: "Footer",
  methods: {
    ...mapActions({
      displayDialog: "app/displayDialog",
    }),
  },
  setup() {
    console.log("Main 初始化");
  },
};
</script>
