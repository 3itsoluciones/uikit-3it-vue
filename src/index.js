import * as components from './components'
import './composables'
//import './utils'
import useValidator from './utils/useValidator.js'
import useInputMask from './utils/useInputMask.js'
import useKeypress from './utils/useKeypress.js'
import useTable from './utils/useTable.js'
import useFormat from './utils/useFormat'
import useTooltip from './utils/useTooltip'

export default {
  install(app) {
    Object.keys(components).forEach((key) => {
      app.component(key, components[key])
    })
  },
}
 export {
  useValidator,
  useInputMask,
  useKeypress,
  useTable,
  useFormat,
  useTooltip
}
