<template>
  <div>Mysql 的属性设置</div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
import { mapActions, mapState, mapGetters } from "vuex";
export default defineComponent({
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
