<script setup>
import { ref } from 'vue'
import { codeToHtml } from 'shiki'

//Props
const props = defineProps({
  code: {
    type: String,
    required: true,
    default: ''
  },
  lang: {
    type: String,
    default: 'vue'
  },
  theme: {
    type: String,
    default: 'github-dark'
  }
})

const highlightedCode = ref('')

const highlightCode = async () => {
  const code = `${props.code}`
  highlightedCode.value = await codeToHtml(code, {
    lang: props.lang,
    theme: props.theme
  })
}

highlightCode()
</script>

<template>
  <div v-html="highlightedCode"></div>
</template>

<style lang="scss">
.shiki {
  margin-bottom: 0;
  @include border-round(3px);
}
</style>
