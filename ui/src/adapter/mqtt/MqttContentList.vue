<template>
  <div style="overflow-y: scroll">
    <div v-for="i in content" :key="i">
      <MqttContentItem :data="i" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState, mapGetters } from "vuex";
import MqttContentItem from "./MqttContentItem.vue";

export default defineComponent({
  components: {
    MqttContentItem,
  },
  props: {
    content: Array,
  },
});
</script>
