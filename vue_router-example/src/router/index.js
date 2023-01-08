import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import UserProfile from '../components/UserProfile.vue';
import UserPosts from '../components/UserPosts.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/user/:id',
      name: 'userProfile',
      component: UserProfile,
    },
    {
      path: '/user/:userId/posts',
      name: 'userPosts',
      component: UserPosts,
    }
  ]
})

export default router
