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
        pb-2
        pl-5
        border-l border-dashed border-grey-500
        cursor-pointer
        hover:text-gray-600
      "
      v-for="db in databases"
      :key="db"
    >
      {{ db.name }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState, mapGetters } from "vuex";

export default defineComponent({
  data() {
    return {
      databases: [
        {
          name: "test",
        },
      ],
    };
  },
});
</script>
