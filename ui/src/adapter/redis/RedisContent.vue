<template>
  <div>
    <div>内容</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
import { mapActions, mapState, mapGetters } from "vuex";
import RedisTerminal from "./RedisTerminal.vue";
export default defineComponent({
  components: { RedisTerminal },
  setup() {
    console.log("redis内容初始化");
  },
  props: {
    modelValue: Object,
  },
  created() {
    console.log(this.$props);
  },
});
</script>
