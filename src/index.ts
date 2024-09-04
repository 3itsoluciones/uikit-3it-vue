import * as components from './components'
import './composables'
//import './utils'
import useValidator from './utils/useValidator.js'
import useInputMask from './utils/useInputMask.js'
import useKeypress from './utils/useKeypress.js'
import useTable from './utils/useTable.js'
import useFormat from './utils/useFormat'
//import useTooltip from './utils/useTooltip'

import { App } from 'vue' // Assuming you are using Vue 3

function useTooltip() {
  function handleTooltip(value, parent) {
    if (parent)
      return {
        content: value,
        theme: 'main',
        placement: 'right',
        appendTo: 'parent'
      }
    else return { content: value, theme: 'main', placement: 'right' }
  }

  return { handleTooltip }
}

const uikitVue = (function (exports: any) {
  'use strict'
  exports.useTooltip = useTooltip
  return exports
})({})

export default {
  install(app: App) {
    Object.keys(components).forEach((key: string) => {
      app.component(key, components[key as keyof typeof components])
    })
  },
  uikitVue,
  useValidator,
  useInputMask,
  useKeypress,
  useTable,
  useFormat,
  useTooltip
}
