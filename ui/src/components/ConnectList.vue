<template>
  <div class="">
    <div
      class="h-15 flex flex-col border-b border-grey-500"
      v-for="i in list"
      :key="i.id"
    >
      <div class="pl-2 p-2 flex border-b border-grey-500">
        <div @click="toggle(i)">
          <ChevronDownIcon class="h-5 cursor-pointer" v-if="i.open" />
          <ChevronRightIcon class="h-5" v-if="!i.open" />
        </div>
        <div class="flex-grow pl-2 text-base cursor-pointer" @click="toggle(i)">
          {{ i.name }}
        </div>
        <DotsVerticalIcon class="h-4 cursor-pointer text-gray-500" />
      </div>
      <template v-if="i.open">
        <router-link
          :to="{
            name: 'instance',
            params: {
              id: c.id,
            },
          }"
          class="
            pl-5
            pt-1
            pb-1
            pr-2
            border-l border-grey-500
            ml-5
            hover:bg-gray-100 hover:text-white
            cursor-pointer
            flex
          "
          v-for="c in i.children"
          :key="c.id"
        >
          <div class="flex-grow text-sm text-green-600" v-if="c.status == 0">
            {{ c.name }}
          </div>
          <div class="flex-grow text-sm text-red-600" v-if="c.status == 1">
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
        </router-link>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  DotsVerticalIcon,
} from "@heroicons/vue/solid";

import { mapGetters, mapActions } from "vuex";

export default defineComponent({
  components: {
    ChevronDownIcon,
    ChevronRightIcon,
    DotsVerticalIcon,
  },
  methods: {
    ...mapActions(["connectlist/setCurrentCtx"]),
    toggle(g) {
      g.open = !g.open;
    },
  },
  computed: {
    ...mapGetters({
      list: "connectlist/connectList",
    }),
  },
  data() {
    return {};
  },
});
</script>
