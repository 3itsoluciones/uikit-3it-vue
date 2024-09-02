import { useRoute } from 'vue-router'
import { computed } from 'vue'

export function useLogos(storeAuth, storeTheme) {
  //Router
  const route = useRoute()
  //Computed
  const logotipo = computed(() => {
    if (route.path === '/login') return storeTheme.platformDarkTheme ? storeTheme.logotipo.logo_dark : storeTheme.logotipo.logo_light
    else return storeAuth.config.darkTheme ? storeTheme.logotipo.logo_dark : storeTheme.logotipo.logo_light
  })

  const isotipo = computed(() => {
    return storeAuth.config.darkTheme ? storeTheme.logotipo.isotipo_dark : storeTheme.logotipo.isotipo_light
  })
  //Properties
  return { logotipo, isotipo }
}
export default useLogos