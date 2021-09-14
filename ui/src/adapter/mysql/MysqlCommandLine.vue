<template>
  <div>
    <div class="border-b-2 p-2">
        <div>
            <ChevronRightIcon  class="h-4 hover:bg-gray-200" />
        </div>
    </div>
    <div class="border-b-2 p-2">
    {{ modelValue }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
import { mapActions, mapState, mapGetters } from "vuex";
import { ChevronRightIcon } from "@heroicons/vue/solid";

export default defineComponent({
    components:{
        ChevronRightIcon
    },
setup() {
    console.log("mysql初始化");
  },
  props: {
    modelValue: Object,
  },
  created() {
    console.log(this.$props);
  },
});
</script>
