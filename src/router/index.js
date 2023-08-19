import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import TeamView from "../views/OurTeamView.vue";
import VolunteerView from "../views/VolunteerView.vue";
import EnrollView from "../views/EnrollView.vue";
import ArticlesView from "../views/ArticlesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/team",
      name: "team",
      component: TeamView,
    },
    {
      path: "/enroll",
      name: "Enroll",
      component: EnrollView,
    },
    {
      path: "/volunteer",
      name: "volunteer",
      component: VolunteerView,
    },
    {
      path: "/articles",
      name: "articles",
      component: ArticlesView,
    },
  ],
});

export default router;
