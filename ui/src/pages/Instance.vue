<template>
  <keep-alive>
    <component v-bind:is="adapter.name" v-model="current"></component>
  </keep-alive>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
import { mapActions, mapState, mapGetters } from "vuex";
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
