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
      "
      v-for="db in database"
      :key="db"
      @contextmenu="contextMenu(db, $event)"
    >
      {{ db.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState, mapGetters } from "vuex";

export default defineComponent({
  computed: {
    ...mapGetters({
      database: "redis/dblist",
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
          name: "删除",
        },
      ]);
    },
  },
  data() {
    return {};
  },
});
</script>
