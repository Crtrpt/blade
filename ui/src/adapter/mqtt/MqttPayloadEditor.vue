<template>
  <div class="border-b-2 flex-grow flex flex-col">
    <div class="py-1 pl-2 flex flex-row items-center border-t border-gray-200">
      <div class="topic flex-row flex items-center">
        <div class="text-sm">Topic:</div>
        <div
          class="
            topic
            p-1
            m-1
            bg-gray-100
            border border-gray-200
            hover:border-blue-600
            rounded-full
            flex
            items-center
          "
        >
          <input
            value="/test"
            class="pl-2 bg-gray-100 outline-none text-gray-800"
          />
          <ChevronDownIcon class="h-5 w-5 text-gray-800" />
        </div>
      </div>
      <div class="qos flex-row flex items-center">
        <div>Qos:</div>
        <div class="mx-2">
          <label class="inline-flex items-center">
            <input type="radio" name="qos" value="0" />
            <span class="ml-2">0</span>
          </label>
          <label class="ml-2 inline-flex items-center">
            <input type="radio" name="qos" value="1" />
            <span class="ml-2">1</span>
          </label>
          <label class="ml-2 inline-flex items-center">
            <input type="radio" name="qos" value="2" />
            <span class="ml-2">2</span>
          </label>
        </div>
      </div>
      <div class="retain flex-row flex items-center">
        <div>Retain:</div>
        <div class="mx-2">
          <label class="inline-flex items-center">
            <input type="checkbox" />
          </label>
        </div>
      </div>
      <ChevronRightIcon class="h-5 w-5" />
    </div>
    <div ref="editor" class="flex-grow flex flex-row mqtt_editor"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
import { mapActions, mapState, mapGetters } from "vuex";
import { ChevronRightIcon } from "@heroicons/vue/solid";
import {
  ChevronDownIcon,
  DotsVerticalIcon,
  SearchIcon,
} from "@heroicons/vue/solid";

import { EditorState, EditorView, basicSetup } from "@codemirror/basic-setup";
import { keymap, KeyBinding, Command } from "@codemirror/view";
import { javascript } from "@codemirror/lang-javascript";
import { defaultKeymap, indentWithTab } from "@codemirror/commands";
import { oneDark } from "@codemirror/theme-one-dark";

export default defineComponent({
  components: {
    ChevronRightIcon,
    ChevronDownIcon,
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
      parent: this.$refs.editor as Element,
    });
  },
});
</script>

<style lang="sass" scoped>
.mqtt_editor {
  height: 100px
}
</style>
