<template>
  <div class="flex flex-col h-full">
    <div class="p-2 border-b border-gray-200">
      <ChevronRightIcon class="w-5 h-5" />
    </div>
    <MqttContentList
      class="py-2 flex-grow xbar"
      :content="list"
    ></MqttContentList>
    <mqtt-payload-editor v-model="payload"></mqtt-payload-editor>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
import { mapActions, mapState, mapGetters } from "vuex";
import MqttPayloadEditor from "./MqttPayloadEditor.vue";
import MqttContentList from "./MqttContentList.vue";
import { ChevronRightIcon } from "@heroicons/vue/solid";
import {
  ChevronDownIcon,
  DotsVerticalIcon,
  SearchIcon,
} from "@heroicons/vue/solid";
export default defineComponent({
  components: { MqttPayloadEditor, MqttContentList, ChevronRightIcon },
  computed: {
    ...mapGetters({
      list: "mqtt/content",
    }),
  },
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
