import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/home/Home.vue";
import LayoutAuth from "../views/layout/layoutAuth/LayoutAuth.vue";
import About from "../views/about/About.vue";
import Job from "../views/job/Job.vue";
import JobDetail from "../views/job/jobdetail/JobDeail.vue";
import Page404 from "./../views/page404/Page404.vue";
import Login from "../views/login/Login.vue";
import Register from "../views/register/Register.vue";
import Profile from "../views/profile/Profile.vue";
import { authGuard } from "../guards/auth.guard";
import Todo from "../views/todo/todo.vue";

const routes = [
  // cách 1:
  {
    pathh: "/",
    name: "Home",
    component: Home,
  },
  // cách 2:
  {
    path: "/car",
    name: "Car",
    component: () => import("../components/car/Car.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/",
    name: "Home",
    component: LayoutAuth,
    children: [
      {
        path: "/job",
        component: Job,
        name: "Job",
        meta: {
          requiresVisitor: true,
        },
      },
    ],
  },
  // redirect page
  {
    path: "/job-all",
    redirect: "/job",
  },
  {
    path: "/todo-list",
    name: "Todo",
    component: Todo,
    beforeEnter: authGuard,
  },
  // parameter with path
  {
    path: "/job/:id",
    name: "JobDetail",
    component: JobDetail,
    // với props: true thì ta có thể lây param thông qua props
    props: true,
    // set guard for router
    beforeEnter: authGuard,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/register",
    name: "Register",
    component: Register,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    beforeEnter: authGuard,
  },
  // error page
  {
    path: "/:catchAll(.*)",
    name: "Page404",
    component: Page404,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
