<template>
  <div class="">
    <div class="p-2 mt-4 border-b border-gray-300 text-lg font-bold">
      链接信息
    </div>
    <div
      class="
        px-2
        mt-4
        border-b border-b-0 border-gray-300
        text-base
        flex flex-row
      "
    >
      <div
        :class="{
          'bg-gray-400': select == 0,
        }"
        @click="select = 0"
        class="border border-gray-400 p-1 px-2 cursor-pointer hover:bg-gray-300"
      >
        基础信息
      </div>
      <div
        @click="select = 1"
        :class="{
          'bg-gray-400': select == 1,
        }"
        class="border border-gray-400 p-1 px-2 cursor-pointer hover:bg-gray-300"
      >
        高级
      </div>
      <div
        @click="select = 2"
        :class="{
          'bg-gray-400': select == 2,
        }"
        class="border border-gray-400 p-1 px-2 cursor-pointer hover:bg-gray-300"
      >
        遗言
      </div>
    </div>
    <div class="p-2 mt-4 max-w-md">
      <div class="grid grid-cols-1 gap-6">
        <label class="block">
          <span class="text-gray-700">名称:</span>
          <input
            type="text"
            class="
              mt-1
              block
              w-full
              bg-gray-100
              border-transparent
              focus:border-gray-500 focus:bg-white focus:ring-0
            "
            value="test"
            placeholder=""
          />
        </label>

        <label class="block">
          <span class="text-gray-700">地址:</span>
          <input
            type="text"
            class="
              mt-1
              block
              w-full
              bg-gray-100
              border-transparent
              focus:border-gray-500 focus:bg-white focus:ring-0
            "
            value="mqtt://test.mqtt.com"
            placeholder=""
          />
        </label>
        <label class="block">
          <span class="text-gray-700">客户id:</span>
          <div class="flex flex-row items-center">
            <div class="">
              <label class="inline-flex items-center">
                <input type="checkbox" checked="" />
                <span class="ml-2">自动创建</span>
              </label>
            </div>
            <input
              type="text"
              class="
                ml-2
                flex-grow
                mt-1
                block
                bg-gray-100
                border-transparent
                focus:border-gray-500 focus:bg-white focus:ring-0
              "
              value="test"
              placeholder=""
            />

            <div
              class="
                ml-2
                mr-2
                p-2
                bg-blue-600
                hover:bg-blue-700
                text-white
                cursor-pointer
              "
            >
              重新生成
            </div>
          </div>
        </label>

        <div class="flex">
          <label class="block">
            <span class="text-gray-700">用户名:</span>
            <input
              type="text"
              class="
                mt-1
                block
                w-full
                bg-gray-100
                border-transparent
                focus:border-gray-500 focus:bg-white focus:ring-0
              "
              value="test1"
              placeholder=""
            />
          </label>
          <label class="block ml-2">
            <span class="text-gray-700">密码:</span>
            <input
              type="text"
              class="
                mt-1
                block
                w-full
                bg-gray-100
                border-transparent
                focus:border-gray-500 focus:bg-white focus:ring-0
              "
              value="mqtt://test.mqtt.com"
              placeholder=""
            />
          </label>
        </div>
        <div class="flex">
          <label class="block">
            <span class="text-gray-700">保持状态:</span>
            <input
              type="number"
              class="
                mt-1
                block
                w-100
                bg-gray-100
                border-transparent
                focus:border-gray-500 focus:bg-white focus:ring-0
              "
              value="60"
              placeholder=""
            />
          </label>
          <label class="block ml-2">
            <span class="text-gray-700">链接超时:</span>
            <input
              type="number"
              class="
                mt-1
                block
                w-100
                bg-gray-100
                border-transparent
                focus:border-gray-500 focus:bg-white focus:ring-0
              "
              value="60"
              placeholder=""
            />
          </label>
        </div>
        <div class="block">
          <label class="inline-flex items-center">
            <input type="checkbox" checked="" />
            <span class="ml-2">清除状态信息</span>
          </label>

          <label class="ml-2 inline-flex items-center">
            <input type="checkbox" checked="" />
            <span class="ml-2">自动重连</span>
          </label>
        </div>
        <div class="block">
          <div>
            <label class="inline-flex items-center">
              <input type="checkbox" v-model="form.openSSL" />
              <span class="ml-2">开启ssl认证</span>
            </label>
            <label class="ml-2 inline-flex items-center" v-if="form.openSSL">
              <input
                type="radio"
                name="catype"
                v-model="form.caType"
                value="0"
              />
              <span class="ml-2">CA认证</span>
            </label>
            <label class="ml-2 inline-flex items-center" v-if="form.openSSL">
              <input
                type="radio"
                name="catype"
                v-model="form.caType"
                value="1"
              />
              <span class="ml-2">自签名认证</span>
            </label>
          </div>
        </div>

        <div class="block" v-if="form.caType == 1">
          <label class="block">
            <div class="">CA认证</div>
            <input type="file" class="mt-2" />
          </label>

          <label class="block">
            <div class="mt-2">客户端认证文件</div>
            <input type="file" class="mt-2" />
          </label>
          <label class="block">
            <div class="mt-2">客户端key</div>
            <input type="file" class="mt-2" />
          </label>
        </div>

        <div class="flex">
          <div
            class="
              bg-blue-600
              p-2
              px-4
              text-white text-center
              cursor-pointer
              hover:bg-blue-700
            "
          >
            保存
          </div>
          <div
            class="
              bg-white
              p-2
              ml-2
              border border-gray-400
              text-gray
              cursor-pointer
              hover:bg-blue-700 hover: hover:text-white
            "
          >
            测试链接
          </div>
          <div
            class="
              bg-white
              p-2
              ml-2
              border border-gray-400
              text-gray
              cursor-pointer
              text-center
              hover:bg-blue-700 hover: hover:text-white
            "
          >
            断开连接
          </div>
          <div
            class="
              bg-red-600
              p-2
              ml-2
              px-4
              text-white
              cursor-pointer
              hover:bg-red-700
              text-center
            "
          >
            删除
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";
import { mapActions, mapState, mapGetters } from "vuex";
export default defineComponent({
  setup() {
    console.log("mqtt初始化");
  },
  props: {
    modelValue: Object,
  },
  data() {
    return {
      select: 0,
      form: {
        ssl: false,
        name: "",
        url: "",
        authGenClientId: true,
        clientId: "",
        username: "",
        password: "",
        timeout: 1000,
        keepalive: 600000,
        cleansesson: true,
        autoReconnect: true,
        openSSL: true,
        caType: 0,
        sslCaFile: "",
        sslClientFile: "",
        sslClientKey: "",
      },
    };
  },
  created() {
    console.log(this.$props);
  },
});
</script>
