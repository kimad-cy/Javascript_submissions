// router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import HomePage from './views/HomePage.vue';  // Assure-toi que le chemin est correct
import PostDetailView from './views/PostDetailView.vue';  // Assure-toi que le chemin est correct
import TagPage from './views/TagPage.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage, // La vue de la page d'accueil
  },
  {
    path: '/post/:id',
    name: 'PostDetail',
    component: PostDetailView, // La vue pour afficher le détail de l'article
    props: true,  // Passe l'ID du post en tant que prop à PostDetailView
  },
  {
    path: '/tag/:tag',
    name: 'tagPage',
    component: TagPage,
    props: true  // Pass the route parameter as a prop
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
