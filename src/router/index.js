import Vue from "vue";
import VueRouter from "vue-router";
// import store from '@/store'

import Login from "@/views/login";
import Empty from "@/views/back-system/components/empty"
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/back-system",
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    // 某些页面规定必须登录后才能查看 ，可以在router中配置 meta ，将不需要登录的 noRequireToken 设为true，
    meta: {
      noRequireToken: true,
    }
  },
  {
    path: "/integration",
    name: "Integration",
    component: () =>
      import("@/views/integration"),
    redirect: "/integration/home",
    children: [
      {
        path: "home",
        name: "Home",
        component: () =>
          import("@/views/integration/home")
      },
      {
        path: "eg1",
        name: "eg1",
        component: () =>
          import("@/views/integration/eg1")
      },
      {
        path: "eg2",
        name: "eg2",
        component: () =>
          import("@/views/integration/eg2")
      },
    ]
  },
  {
    path: "/back-system",
    name: "BackSystem",
    component: () =>
      import("@/views/back-system"),
    redirect: "/back-system/system1",
    children: [
      {
        path: "system1",
        name: "System1",
        component: () =>
          import("@/views/back-system/system1"),
        redirect: "/back-system/system1/map",
        children: [
          {
            path: "map",
            name: "Map",
            component: () =>
              import("@/views/back-system/system1/map")
          },
        ]
      },
      {
        path: "system2",
        name: "System2",
        component: () =>
          import("@/views/back-system/system2"),
        redirect: "/back-system/system2/homepage",
        children: [
          {
            path: "homepage",
            name: "Homepage",
            component: () =>
              import("@/views/back-system/system2/homepage")
          },
          {
            path: "reservoir",
            name: "Reservoir",
            component: () =>
              import("@/views/back-system/system2/reservoir")
          },
          {
            path: "empty",
            name: "Empty",
            component: Empty
          }
        ]
      },
      {
        path: "system3",
        name: "System3",
        component: () =>
          import("@/views/back-system/system3"),
        redirect: "/back-system/system3/empty",
        children: [
          {
            path: "empty",
            name: "Empty",
            component: Empty
          },
        ]
      },
      {
        path: "system4",
        name: "System4",
        component: () =>
          import("@/views/back-system/system4"),
        redirect: "/back-system/system4/empty",
        children: [
          {
            path: "empty",
            name: "Empty",
            component: Empty
          },
        ]
      },
    ]
  },
  // {
  //   path: "/404",
  //   name: "NotPage",
  //   component: () =>
  //     import("@/views/404/index.vue")
  // },
  // {
  //   path: "*",
  //   name: "AllPage",
  //   redirect: "/404"
  // }
];

const router = new VueRouter({
  routes
});


// 设置路由守卫，在进页面之前，判断有token，才进入页面，否则返回登录页面
// router.beforeEach((to, from, next) => {
//   // 判断要去的路由有没有 noRequireToken
//   // to.matched.some(r => r.meta.noRequireToken) or to.meta.noRequireToken
//   if (to.matched.some(r => !r.meta.noRequireToken)) {
//     let token = store.getters.getToken
//     // console.log("token：", token)
//     if (token) {
//       next(); //有token,进行request请求，后台还会验证token
//     } else {
//       next({
//         name: "Login", // 使用params参数不会消失，meta刷新后消失；params必须和query一起用？
//         // path:"/login",
//         // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由，这要进一步在登陆页面判断
//         query: { redirect: to.fullPath },
//         // params: { redirect: to.fullPath },
//         // meta: { redirect: to.fullPath },
//       });
//     }
//   } else {
//     next(); //如果无需token,那么随它去吧
//   }
// });

export default router;
