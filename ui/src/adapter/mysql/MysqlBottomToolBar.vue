<template>
  <div class="flex">
    <div class="flex-grow text-sm flex items-center pl-2">选择了6个</div>
    <div class="para_bottom_bar flex justify-start items-center">
      <RefreshIcon class="ops h-4 hover:bg-gray-200 cursor-pointer" />

      <ChevronDoubleLeftIcon class="ops h-4 hover:bg-gray-200 cursor-pointer" />

      <ChevronLeftIcon class="ops h-4 hover:bg-gray-200 cursor-pointer" />

      <input
        class="ops current h-4 w-10 form-input text-xs border-2 p-2"
        value="10"
      />

      <ChevronRightIcon class="ops h-4 hover:bg-gray-200 cursor-pointer" />

      <ChevronDoubleRightIcon
        class="ops h-4 hover:bg-gray-200 cursor-pointer"
      />

      <input
        class="ops per h-4 w-10 form-input text-xs border-2 p-2"
        value="50"
      />

      <input
        class="ops total h-4 w-10 form-input text-xs border-2 p-2"
        value="999"
        readonly
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  RefreshIcon,
} from "@heroicons/vue/solid";

export default defineComponent({
  components: {
    ChevronLeftIcon,
    RefreshIcon,
    ChevronRightIcon,
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon,
  },
});
</script>

<style lang="scss" scoped>
.para_bottom_bar {
  display: flex;
  justify-items: center;
  align-content: center;
  padding: 5px 10px;
  .ops {
    margin: 2px 5px;
  }
  .current,
  .per,
  .total {
    text-align: center;
  }
}
</style>
