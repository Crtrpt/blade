<template>
  <div>
    <div class="border-b-2 p-2">
      <div>
        <ChevronRightIcon class="h-4 hover:bg-gray-200" />
      </div>
    </div>
    <div class="border-b-2 sql" ref="sql"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
import { mapActions, mapState, mapGetters } from "vuex";
import { ChevronRightIcon } from "@heroicons/vue/solid";

import { EditorState, EditorView, basicSetup } from "@codemirror/basic-setup";
import { keymap, KeyBinding, Command } from "@codemirror/view";
import { sql } from "@codemirror/lang-sql";
import { defaultKeymap, indentWithTab } from "@codemirror/commands";
import { oneDark } from "@codemirror/theme-one-dark";

export default defineComponent({
  components: {
    ChevronRightIcon,
  },
  setup() {
    console.log("mysql初始化");
  },
  props: {
    modelValue: Object,
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
        doc: "select * from test",
        extensions: [
          basicSetup,
          sql(),
          oneDark,
          keymap.of([
            {
              key: "Ctrl-Enter",
              run: ((t: EditorView): boolean => {
                console.log("执行sql");
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
