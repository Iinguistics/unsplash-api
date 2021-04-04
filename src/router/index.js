import { createWebHistory, createRouter } from "vue-router";
import Search from '../components/Search'
import Home from '../components/Home'
const routes = [

    {
        path: "/",
        name: "Home",
        component: Home,
      },

    {
        path: "/search/:id",
        name: "Search",
        component: Search,
        props: true
    },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;