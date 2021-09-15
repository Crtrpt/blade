<template>
  <div>
    <div class="w-full pr-2 flex justify-start items-center">
      <div class="flex-grow">
        <Popover v-slot="{ open }" class="relative">
          <PopoverButton
            :class="open ? '' : 'text-opacity-90'"
            class="
              inline-flex
              items-center
              px-3
              py-2
              text-base
              font-medium
              text-red
              bg-orange-700
              rounded-md
              group
              hover:text-opacity-100
              focus:outline-none
              focus-visible:ring-2
              focus-visible:ring-white
              focus-visible:ring-opacity-75
            "
          >
            <span class="text-indigo-600 hover:text-indigo-500">开始</span>
            <ChevronDownIcon
              :class="open ? '' : 'text-opacity-70'"
              class="
                w-5
                h-5
                ml-2
                text-orange-300
                transition
                duration-150
                ease-in-out
                group-hover:text-opacity-80
              "
              aria-hidden="true"
            />
          </PopoverButton>

          <transition
            enter-active-class="transition duration-200 ease-out"
            enter-from-class="translate-y-1 opacity-0"
            enter-to-class="translate-y-0 opacity-100"
            leave-active-class="transition duration-150 ease-in"
            leave-from-class="translate-y-0 opacity-100"
            leave-to-class="translate-y-1 opacity-0"
          >
            <PopoverPanel
              class="
                absolute
                z-10
                w-screen
                max-w-sm
                px-4
                mt-3
                transform
                -translate-x-1/5
                left-1/5
                sm:px-0
              "
            >
              <div
                class="
                  overflow-hidden
                  rounded-lg
                  shadow-lg
                  ring-1 ring-black ring-opacity-5
                "
              >
                <div class="relative grid gap-8 bg-white p-7">
                  <a
                    v-for="item in solutions"
                    :key="item.name"
                    @click="newConnect(item)"
                    class="
                      flex
                      items-center
                      p-2
                      -m-3
                      transition
                      duration-150
                      ease-in-out
                      rounded-lg
                      hover:bg-gray-50
                      focus:outline-none
                      focus-visible:ring
                      focus-visible:ring-orange-500
                      focus-visible:ring-opacity-50
                    "
                  >
                    <div
                      class="
                        flex
                        items-center
                        justify-center
                        flex-shrink-0
                        w-10
                        h-10
                        text-white
                        sm:h-12 sm:w-12
                      "
                    >
                      <div v-html="item.icon"></div>
                    </div>
                    <div class="ml-4">
                      <p class="text-sm font-medium text-gray-900">
                        {{ item.name }}
                      </p>
                      <p class="text-sm text-gray-500">
                        {{ item.description }}
                      </p>
                    </div>
                  </a>
                </div>
                <!-- <div class="p-4 bg-gray-50">
              <a
                href="##"
                class="flow-root px-2 py-2 transition duration-150 ease-in-out rounded-md hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-orange-500 focus-visible:ring-opacity-50"
              >
                <span class="flex items-center">
                  <span class="text-sm font-medium text-gray-900">
                    文档
                  </span>
                </span>
                <span class="block text-sm text-gray-500">
                  Start integrating products and tools
                </span>
              </a>
            </div> -->
              </div>
            </PopoverPanel>
          </transition>
        </Popover>
      </div>
      <SearchIcon class="h-4 cursor-pointer text-gray-500" />
      <DotsVerticalIcon class="h-4 cursor-pointer text-gray-500" />
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { Popover, PopoverButton, PopoverPanel } from "@headlessui/vue";
import {
  ChevronDownIcon,
  DotsVerticalIcon,
  SearchIcon,
} from "@heroicons/vue/solid";
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  DialogDescription,
} from "@headlessui/vue";

export default {
  components: {
    Popover,
    PopoverButton,
    PopoverPanel,
    ChevronDownIcon,
    DotsVerticalIcon,
    SearchIcon,
    Dialog,
    DialogOverlay,
    DialogTitle,
    DialogDescription,
  },
  methods: {
    newConnect(i) {
      console.log(this);
      this.isOpen = true;
    },
  },
  setup() {
    let isOpen = ref(false);
    return {
      isOpen,
      solutions: [
        {
          name: "Mqtt",
          type: 1,
          description: "MQTT 客户端管理工具",
          href: "##",
        },
        {
          name: "Mysql",
          description: "Mysql 客户端管理工具",
          href: "##",
          type: 2,
        },
        {
          name: "Redis",
          description: "Redis 客户端管理工具",
          href: "##",
          type: 3,
        },
      ],
    };
  },
};
</script>
