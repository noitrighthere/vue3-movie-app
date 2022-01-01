import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './Home'
import Movie from './Movie'
import About from './About'

export default createRouter( {
  // Hash
  // 특정 페이지를 찾고 싶을 때
  history: createWebHashHistory(),
  // pages
  routes: [
    {
      // 페이지를 구분해주는 각각의 경로
      path: '/',
      component: Home
    },
    {
      path: '/movie/:hello',
      component: Movie
    },
    {
      path: '/about',
      component: About
    }
  ]
})