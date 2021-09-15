<template>
  <div class="flex justify-start pl-2">
    <div></div>
    <div class="flex flex-row tab self-end">
      <div v-for="i in list" :key="i">
        <div
          :class="[
            i.id == current.id ? 'bg-blue-400 text-white' : '',
            `item
            p-1
            border border-gray-100 border-b-0
            flex flex-row
            items-center
            bg-gray-100
            cursor-pointer
          `,
          ]"
          v-if="i.activeBarDelete"
        >
          <div class="ml-2" @click="active(i)">{{ i.name }}</div>
          <XCircleIcon class="h-3 ml-2 mr-2" @click="close(i)" />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from "vuex";
import { XCircleIcon } from "@heroicons/vue/solid";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    XCircleIcon,
  },
  methods: {
    ...mapActions({
      close: "connectlist/closeActive",
    }),
    active(i: any) {
      this.$router.push({
        name: "instance",
        params: {
          id: i.id,
        },
      });
    },
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      ctx: "connectlist/currentCtx",
      list: "connectlist/activeConnectList",
      current: "connectlist/currentCtx",
    }),
  },
  name: "Header",
  setup() {
    console.log("Main初始化");
  },
});
</script>

<style lang="sass" scoped>
.tab {

}
</style>
