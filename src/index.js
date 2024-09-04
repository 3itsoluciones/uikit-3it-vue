import * as components from './components'
import './composables'
import './utils'

export default {
  install(app) {
    Object.keys(components).forEach((key) => {
      app.component(key, components[key])
    })
  },
}
