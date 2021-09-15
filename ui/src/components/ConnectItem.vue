<template>
  <router-link
    :to="{
      name: 'instance',
      params: {
        id: c.id,
      },
    }"
    class="flex flex-col"
    v-for="c in i.children"
    :key="c.id"
    @click="updateCtx(c)"
  >
    <div
      class="
        flex
        p-2
        pl-5
        border-l border-dashed border-grey-500
        ml-5
        cursor-pointer
      "
    >
      <div class="flex-grow text-sm text-gray-500 hover:text-gray-800">
        {{ c.name }}
      </div>

      <router-link
        :to="{
          name: 'property',
          params: {
            id: c.id,
          },
        }"
      >
        <DotsVerticalIcon class="h-4 cursor-pointer text-gray-500" />
      </router-link>
    </div>
    <component
      v-if="c.active"
      v-bind:is="adapters[c.type].menuSlot"
      v-model="current"
    ></component>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions, mapState, mapGetters } from "vuex";

export default defineComponent({
  props: {
    i: Object,
  },
  computed: {
    ...mapGetters({
      adapters: "connectlist/getAdapters",
      current: "connectlist/currentCtx",
    }),
  },
  methods: {
    updateCtx(c) {
      c.active = !c.active;
    },
  },
});
</script>
