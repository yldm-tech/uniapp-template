import { createSSRApp } from 'vue'
import fui from './common/fui-app'
import pinia from './stores'

import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)

  app.use(pinia)
  app.config.globalProperties.fui = fui
  return {
    app,
  }
}
