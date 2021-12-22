import { createApp } from 'vue'
import App from './App'
import router from './routes'
import store from './store'

// router를 설치해서 .mount앞에 .use(router)추가

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')