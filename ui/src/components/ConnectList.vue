<template>
  <div class="h-full" @contextmenu="contextLeftBarMenu($event)">
    <div
      class="h-15 flex flex-col"
      v-for="i in list"
      :key="i.id"
      @contextmenu="contextMenu(i, $event)"
    >
      <div class="pl-2 p-2 flex">
        <div @click="toggle(i)">
          <ChevronDownIcon
            class="h-5 cursor-pointer text-gray-500"
            v-if="i.open"
          />
          <ChevronRightIcon class="h-5 text-gray-500" v-if="!i.open" />
        </div>
        <div
          class="flex-grow pl-2 text-sm text-gray-500 cursor-pointer"
          @click="toggle(i)"
        >
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
    ...mapActions({
      current: "connectlist/setCurrentCtx",
      displayContextMenu: "app/displayContextMenu",
      collectMenu: "app/collectMenu",
      displayDialog: "app/displayDialog",
    }),
    toggle(g) {
      g.open = !g.open;
    },
    contextLeftBarMenu(e: Event) {
      // this.collectMenu([
      //   {
      //     name: "menu 菜单",
      //   },
      // ]);
      this.displayContextMenu(e);
      e.preventDefault();
    },
    contextMenu(c, e: Event) {
      this.collectMenu([
        {
          name: "创建链接",
          ctx: c,
          run: (c) => {
            console.log(c);
            alert("创建链接");
          },
        },
        {
          name: "分组",
          children: [
            {
              name: "创建分组",
              ctx: c,
              run: (c) => {
                console.log("创建分组");
                this.displayDialog({
                  title: "创建分组",
                });
              },
            },
            {
              name: "删除分组",
              ctx: c,
              run: (c) => {
                this.displayDialog({
                  title: "删除分组",
                });
              },
            },
            {
              name: "重命名",
              ctx: c,
              run: (c) => {
                this.displayDialog({
                  title: "重命名",
                });
              },
            },
            {
              name: "克隆",
              ctx: c,
              run: (c) => {
                this.displayDialog({
                  title: "克隆",
                });
              },
            },
          ],
        },
      ]);
      e.preventDefault();
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
