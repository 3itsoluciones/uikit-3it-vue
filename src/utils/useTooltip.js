export default function useTooltip() {
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
