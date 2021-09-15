<template>
  <div>
    <component v-bind:is="adapter.property" v-model="current"></component>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapGetters } from "vuex";
export default defineComponent({
  setup() {
    console.log(this);
  },
  computed: {
    ...mapGetters({
      adapter: "connectlist/getAdapter",
      current: "connectlist/currentCtx",
    }),
  },
  methods: {
    ...mapActions(["connectlist/setCurrentCtx"]),
  },
  data() {
    return {};
  },
  watch: {
    $route: {
      deep: true,
      handler(n, o) {
        console.log("更新路由");
        this["connectlist/setCurrentCtx"](n.params.id);
      },
    },
  },
  created() {
    console.log("初始化");
    this["connectlist/setCurrentCtx"](this.$route.params.id);
  },
});
</script>
