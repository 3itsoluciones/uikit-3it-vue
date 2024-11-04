export default function useTooltip() {
  function handleTooltip(value, parent, placement = 'right') {
    if (parent)
      return {
        content: value,
        theme: 'main',
        placement: placement,
        appendTo: 'parent'
      }
    else return { content: value, theme: 'main', placement: placement }
  }

  return { handleTooltip }
}
