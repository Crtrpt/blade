import Master from "../layout/Master.vue"
var route = [
  {
    path: "/",
    component: Master,
  },
  {
    path: "/home",
    component: ()=>import("../pages/Home.vue"),
  },
];
export default route;
