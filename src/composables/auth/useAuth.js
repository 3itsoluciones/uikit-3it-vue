  //Composables
  import { 
    useFormat
  } from '@/composables'
  const { 
		formatCapitalize
	} = useFormat()

export default function useAuth() {

  function modulePermissions (user) {
    return user.role.modules.map(item => formatCapitalize(item.module.name)) 
    //return user.role.rolePolicy[0].policyModule.map(item => formatCapitalize(item.module.name)) 
  }

  function moduleLinksPermissions (item, store) {
    if(item.requiresPermissions) return modulePermissions(store).includes(item.name)
    else return true
  }

  return { modulePermissions, moduleLinksPermissions }
}