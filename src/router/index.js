import { createWebHistory, createRouter } from "vue-router";
import Search from '../components/Search'

const routes = [
 
  {
    path: "/search",
    name: "Search",
    component: Search,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;