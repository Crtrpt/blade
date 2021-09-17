<template>
  <div class="flex flex-col h-full">
    <div class="p-2 flex-grow">topic 接收列表</div>
    <div class="h-1/3 border border-gray-300 flex">
      <mqtt-payload-editor v-model="payload"></mqtt-payload-editor>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
import { mapActions, mapState, mapGetters } from "vuex";
import MqttPayloadEditor from "./MqttPayloadEditor.vue";
export default defineComponent({
  components: { MqttPayloadEditor },
  setup() {
    console.log("mqtt初始化");
  },
  props: {
    modelValue: Object,
  },
  created() {
    console.log(this.$props);
  },
});
</script>
