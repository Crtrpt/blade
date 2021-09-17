<template>
  <div class="border-b-2 sql flex-grow flex flex-row" ref="sql"></div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
import { mapActions, mapState, mapGetters } from "vuex";
import { ChevronRightIcon } from "@heroicons/vue/solid";

import { EditorState, EditorView, basicSetup } from "@codemirror/basic-setup";
import { keymap, KeyBinding, Command } from "@codemirror/view";
import { javascript } from "@codemirror/lang-javascript";
import { defaultKeymap, indentWithTab } from "@codemirror/commands";
import { oneDark } from "@codemirror/theme-one-dark";

export default defineComponent({
  components: {
    ChevronRightIcon,
  },
  setup() {
    console.log("mqtt 初始化");
  },
  props: {
    modelValue: String,
  },
  data() {
    var editor1: EditorView | undefined;
    return {
      editor: editor1,
    };
  },
  mounted() {
    this.editor = new EditorView({
      state: EditorState.create({
        doc: "{}",
        extensions: [
          basicSetup,
          javascript(),
          oneDark,
          keymap.of([
            {
              key: "Ctrl-Enter",
              run: ((t: EditorView): boolean => {
                console.log("发送->");
                return true;
              }) as Command,
            } as KeyBinding,
          ]),
        ],
      }),
      parent: this.$refs.sql as Element,
    });
  },
});
</script>

<style lang="sass" scoped></style>
