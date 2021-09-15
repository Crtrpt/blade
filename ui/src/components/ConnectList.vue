<template>
  <div class="">
    <div class="h-15 flex flex-col" v-for="i in list" :key="i.id">
      <div class="pl-2 p-2 flex">
        <div @click="toggle(i)">
          <ChevronDownIcon class="h-5 cursor-pointer" v-if="i.open" />
          <ChevronRightIcon class="h-5" v-if="!i.open" />
        </div>
        <div class="flex-grow pl-2 text-base cursor-pointer" @click="toggle(i)">
          {{ i.name }}
        </div>
        <!-- <DotsVerticalIcon class="h-4 cursor-pointer text-gray-500" /> -->
      </div>
      <template v-if="i.open">
        <ConnectItem :i="i" />
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
import ConnectItem from "./ConnectItem.vue";

export default defineComponent({
  components: {
    ChevronDownIcon,
    ChevronRightIcon,
    DotsVerticalIcon,
    ConnectItem,
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
