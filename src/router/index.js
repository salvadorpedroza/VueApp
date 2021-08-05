import Vue from "vue";
import VueRouter from "vue-router";
import Navbar from "@/components/Navbar.vue";

const Data = () => import('@/views/Data.vue');
const Home = () => import('@/views/Home.vue');
const Components = () => import('@/views/Components.vue');

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    components: {
      default: Home,
      navbar: Navbar
    }
  },
  {
    path: "/components",
    name: "Components",
    components: {
      default: Components,
      navbar: Navbar
    }
  },
  {
    path: "/data",
    name: "Data",
    components: {
      default: Data,
      navbar: Navbar
    }
  },
];

const router = new VueRouter({
  routes,
});

export default router;
