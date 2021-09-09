<template>
  <div class="black">
    <div class="flex flex-col">
      <div>
        <form className="">
          <span class="text-gray-700">用户名:</span>
          <input
            type="email"
            class="form-input mx-5 px-4 py-3 rounded-full"
            placeholder="请输入用户名"
          />
          <span class="text-gray-700">密码:</span>
          <input
            type="password"
            class="form-input mx-5 px-4 py-3 rounded-full"
            placeholder="请输入密码"
          />
          <input
            type="submit"
            class="form-input mx-5 px-4 py-3 rounded-full bg-primary text-white"
            value="登录"
          />
        </form>
      </div>
    </div>
  </div>
</template>
<script lang="ts">
export default {
   name:"Home",
  setup() {
    console.log("初始化");
  },
};
</script>
<style>
.black {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
