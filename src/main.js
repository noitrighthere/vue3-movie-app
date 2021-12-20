import { createApp } from 'vue'
import App from './App'
import router from './routes/index.js'

// router를 설치해서 .mount앞에 .use(router)추가

createApp(App)
  .use(router)
  .mount('#app')