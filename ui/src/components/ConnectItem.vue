<template>
  <div
    class="flex flex-col"
    v-for="c in i.children"
    :key="c.id"
    @contextmenu="contextMenu(c, $event)"
  >
    <component
      v-bind:is="adapters[c.type].menuItem"
      v-model="current"
      :c="c"
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
