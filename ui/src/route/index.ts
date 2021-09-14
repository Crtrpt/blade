import Master from "../layout/Master.vue"
var route = [
  {
    path: "/",
    component: ()=>import("../layout/Main.vue"),
    children:[
      {
        name:"home",
        path: "/home",
        component: ()=>import("../pages/Home.vue"),
      },
      {
        name:"instance",
        path: "/instance/:id",
        component: ()=>import("../pages/Instance.vue"),
      },
      {
        name:"property",
        path: "/property/:id",
        component: ()=>import("../pages/Property.vue"),
      }
    ]
  },
  {
    name:"login",
    path: "/login",
    component: ()=>import("../pages/auth/Auth.vue"),
  },
  {
    name:"sign",
    path: "/sign",
    component: ()=>import("../pages/auth/Sign.vue"),
  },
 
];
export default route;
