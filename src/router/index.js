import Vue from 'vue';
import VueRouter from 'vue-router';
import Characters from '@/views/Characters.vue';
import CharacterDetail from '@/views/CharacterDetail.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Characters',
    component: Characters,
  },
  {
    path: '/character/:id',
    name: 'CharacterDetail',
    component: CharacterDetail,
    props: true,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
