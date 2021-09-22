<template>
  <div
    class="
      px-2
      pl-5
      border-l border-dashed border-grey-500
      ml-5
      text-sm text-gray-500
    "
  >
    <div
      class="
        p-1
        pl-5
        border-l border-dashed border-grey-500
        cursor-pointer
        hover:text-gray-600 hover:border-black
        flex
      "
      v-for="topic in topics"
      :key="topic"
      @contextmenu="contextMenu(topic, $event)"
    >
      <div class="flex-grow">
        {{ topic.name }}
      </div>
      <!-- <div>
        ↑{{ topic.upCount || 0 }}/↓{{ topic.downCount || 0 }} ↑{{
          topic.up || 0
        }}/↓{{ topic.down || 0 }}
      </div> -->
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState, mapGetters } from "vuex";

export default defineComponent({
  computed: {
    ...mapGetters({
      topics: "mqtt/topicList",
    }),
  },
  methods: {
    ...mapActions({
      collectMenu: "app/collectMenu",
    }),
    contextMenu(c, e: Event) {
      e.preventDefault();
      this.collectMenu([
        {
          name: "取消订阅",
          ctx: c,
          run: (c) => {
            
          },
        },
        {
          name: "新建发布",
        },
      ]);
    },
  },
  data() {
    return {};
  },
});
</script>
