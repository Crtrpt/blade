<template>
  <div
    class="flex flex-col"
    v-for="c in i.children"
    :key="c.id"
    @contextmenu="contextMenu(c, $event)"
  >
    <div
      class="
        flex
        p-2
        pl-5
        border-l border-dashed border-grey-500
        ml-5
        cursor-pointer
        hover:border-black
      "
    >
      <div
        class="flex-grow text-sm text-gray-500 hover:text-gray-800"
        @dblclick="updateCtx(c)"
      >
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
      </router-link>
      <!-- {{ adapters[c.type].menuSlot }} -->
    </div>
    <component
      v-if="c.open"
      v-bind:is="adapters[c.type].menuSlot"
      v-model="current"
    ></component>
  </div>
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
    ...mapActions({
      collectMenu: "app/collectMenu",
    }),
    contextMenu(c, e: Event) {
      e.preventDefault();
      console.log("右键点击");
      this.collectMenu([
        {
          name: "连接属性",
          ctx: c,
          run: (c) => {
            this.$router.push({
              name: "property",
              params: {
                id: c.id,
              },
            });
          },
        },
      ]);
    },
    updateCtx(c: any) {
      c.open = !c.open;
      this.$router.push({
        name: "instance",
        params: {
          id: c.id,
        },
      });
    },
  },
});
</script>
