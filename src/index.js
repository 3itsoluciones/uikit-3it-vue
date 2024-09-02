import * as Components from '@/components'
import * as Composables from '@/composables'
import * as Utils from '@/utils'

export default {
  install(app) {
    Object.keys(Components).forEach((key) => {
      app.component(key, Components[key])
    })
  },
  Composables,
  Utils
}
