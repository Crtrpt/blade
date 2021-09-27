<template>
  <div class="dialog flex justify-center" v-if="dialogDisplay">
    <div class="w-1/2">
      <div
        class="
          mt-8
          outer_wrap
          bg-white
          shadow-md
          border border-gray-400
          flex flex-col
        "
      >
        <div
          class="header flex flex-row p-2 border-b border-gray-400 bg-gray-200"
        >
          <div class="flex-grow">
            {{ dialog.title }}
          </div>
          <div>
            <XIcon
              @click="closeDialog"
              class="h-5 w-5 text-gray-400 cursor-pointer hover:text-gray-500"
            />
          </div>
        </div>

        <component
          class="content"
          v-bind:is="dialog.component"
          v-model="dialog"
        ></component>
        <div
          class="footer flex flex-row p-2 border-t border-gray-400 bg-gray-100"
        >
          <div class="flex-grow"></div>
          <div class="flex flex-row">
            <div
              class="
                py-1
                px-2
                text-sm
                bg-blue-600
                text-white
                cursor-pointer
                :hover:bg-blue-700
              "
            >
              确定
            </div>
            <div
              @click="closeDialog"
              class="
                text-sm
                cursor-pointer
                :hover:bg-blue-700 :hover:text-white
                py-1
                px-2
              "
            >
              取消
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { XIcon } from "@heroicons/vue/solid";
import { mapGetters, mapActions } from "vuex";
export default {
  components: {
    XIcon,
  },
  computed: {
    ...mapGetters({ dialogDisplay: "app/dialogDisplay", dialog: "app/dialog" }),
  },
  data() {
    return {
      title: "标题",
    };
  },
  watch: {
    "dialog.display": {
      deep: true,
      handler(n, o) {
        if (n == true) {
          console.log("动态加载");
          console.log(this.dialog);
        }
      },
    },
  },
  methods: {
    ...mapActions({
      closeDialog: "app/closeDialog",
    }),
  },
};
</script>

<style lang="sass">
.dialog {
    z-index: 999;
    position: absolute;
    width: 100vw;
    height: 100vh;
    .outer_wrap {
      pointer-events:all;
      height:unset;
    }
    .content {
      min-height:100px;

    }
    pointer-events:none;
}
</style>
