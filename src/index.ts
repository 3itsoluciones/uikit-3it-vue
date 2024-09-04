import * as components from './components'
import './composables'
import './utils'
import { App } from 'vue' // Assuming you are using Vue 3

export default {
  install(app: App) {
    Object.keys(components).forEach((key: string) => {
      app.component(key, components[key as keyof typeof components])
    })
  },
}