<template>
  <div class="flex">
    <div class="para_top_bar flex justify-start items-center flex-grow">
      <RefreshIcon class="ops h-4 hover:bg-gray-200 cursor-pointer" />
      <CheckIcon class="ops h-4 hover:bg-gray-200 cursor-pointer" />

      <PlusIcon class="ops h-4 hover:bg-gray-200 cursor-pointer" />
      <MinusIcon class="ops h-4 hover:bg-gray-200 cursor-pointer" />
    </div>
    <div class="flex justify-start items-center pr-5">
      <CogIcon class="h-4 cursor-pointer text-gray-500" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import {
  PlusIcon,
  MinusIcon,
  CogIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  RefreshIcon,
  UploadIcon,
  CheckIcon,
} from "@heroicons/vue/solid";

export default defineComponent({
  components: {
    ChevronLeftIcon,
    RefreshIcon,
    ChevronRightIcon,
    CogIcon,
    ChevronDoubleLeftIcon,
    ChevronDoubleRightIcon,
    UploadIcon,
    CheckIcon,
    PlusIcon,
    MinusIcon,
  },
});
</script>

<style lang="scss" scoped>
.para_top_bar {
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
