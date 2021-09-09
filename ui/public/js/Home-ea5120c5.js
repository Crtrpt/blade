
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35729/livereload.js?snipver=1'; r.id = 'livereloadscript'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
import { c as createElementBlock, o as openBlock, a as createBaseVNode } from './main-8947d36b.js';

var script = {
    name: "Home",
    setup() {
        console.log("初始化");
    },
};

const _hoisted_1 = { class: "black" };
const _hoisted_2 = /*#__PURE__*/createBaseVNode("div", { class: "flex flex-col" }, [
  /*#__PURE__*/createBaseVNode("div", null, [
    /*#__PURE__*/createBaseVNode("form", { className: "" }, [
      /*#__PURE__*/createBaseVNode("span", { class: "text-gray-700" }, "用户名:"),
      /*#__PURE__*/createBaseVNode("input", {
        type: "email",
        class: "form-input mx-5 px-4 py-3 rounded-full",
        placeholder: "请输入用户名"
      }),
      /*#__PURE__*/createBaseVNode("span", { class: "text-gray-700" }, "密码:"),
      /*#__PURE__*/createBaseVNode("input", {
        type: "password",
        class: "form-input mx-5 px-4 py-3 rounded-full",
        placeholder: "请输入密码"
      }),
      /*#__PURE__*/createBaseVNode("input", {
        type: "submit",
        class: "form-input mx-5 px-4 py-3 rounded-full bg-primary text-white",
        value: "登录"
      })
    ])
  ])
], -1 /* HOISTED */);
const _hoisted_3 = [
  _hoisted_2
];

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createElementBlock("div", _hoisted_1, _hoisted_3))
}

script.render = render;
script.__file = "src/pages/Home.vue";

export { script as default };
//# sourceMappingURL=Home-ea5120c5.js.map
