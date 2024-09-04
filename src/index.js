import * as components from '@/components'
import * as composables from '@/composables'
import * as utils from '@/utils'

export default {
  install(app) {
    Object.keys(components).forEach((key) => {
      app.component(key, components[key])
    })
  },
}

export { composables, utils }
