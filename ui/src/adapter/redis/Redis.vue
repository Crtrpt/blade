<template>
  <div class="h-full flex">
    <div class="flex flex-col h-full flex-grow border-gray-300 border-r">
      <div class="p-2 flex-grow">
        <redis-content />
      </div>
      <div class="h-1/3 border border-gray-300 flex">
        <redis-terminal />
      </div>
    </div>
    <div class="w-1/4">历史</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
import { mapActions, mapState, mapGetters } from "vuex";
import RedisContent from "./RedisContent.vue";
import RedisTerminal from "./RedisTerminal.vue";
export default defineComponent({
  components: { RedisTerminal, RedisContent },
  setup() {
    console.log("redis初始化");
  },
  props: {
    modelValue: Object,
  },
  created() {
    console.log(this.$props);
  },
});
</script>
