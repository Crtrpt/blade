<template>
  <div
    class="py-2 flex flex-col border-b border-gray-200 p-1 hover:bg-gray-100"
  >
    <div class="flex flex-row">
      <div class="text-sm flex flex-row">
        <div>Topic:</div>
        <div class="round border rounded px-2 mx-2 bg-gray-100">
          {{ data.topic }}
        </div>
      </div>
    </div>
    <div class="bg-gray-1 rounded py-1 my-1">{{ data.content }}</div>
    <div class="flex flex-row text-sm">
      <div class="">Qos:{{ data.qos }}</div>
      <div class="pl-2">time:{{ data.time }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState, mapGetters } from "vuex";

export default defineComponent({
  props: {
    data: Object,
  },
});
</script>
