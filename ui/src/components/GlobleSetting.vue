<template>
  <div class="flex justify-start items-center pl-2 pr-2">
    <div class="flex-grow">
      <PlusIcon class="h-4 cursor-pointer text-gray-500" />
    </div>
    <div>
      <CogIcon class="h-4 cursor-pointer text-gray-500" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  DotsVerticalIcon,
  PlusIcon,
  CogIcon,
} from "@heroicons/vue/solid";

import { mapGetters } from "vuex";

export default defineComponent({
  components: {
    ChevronDownIcon,
    ChevronRightIcon,
    DotsVerticalIcon,
    PlusIcon,
    CogIcon,
  },
  setup() {},
  methods: {
    toggle(g) {
      g.open = !g.open;
    },
  },
  computed: {
    ...mapGetters(["connectlist/connectList"]),
  },
  data() {
    return {};
  },
});
</script>
