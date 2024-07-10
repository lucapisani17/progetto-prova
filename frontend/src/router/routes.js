import IndexPage from "pages/IndexPage.vue";
import LoggedInPage from "pages/LoggedInPage.vue";

const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: IndexPage, name: "login" },
      { path: "logged-in", component: LoggedInPage, name: "loggedInPage" },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
