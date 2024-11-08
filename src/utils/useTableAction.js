export default function useTableAction() {

  function actionView(handle, label = 'Ver registro') {
    return {
      name: 'view',
      label: label,
      icon: 'fa-regular fa-eye',
      iconClass: 'eit-color--blue',
      handler: handle
    }
  }
  function actionEdit(handle, label = 'Editar registro') {
    return {
      name: 'edit',
      label: label,
      icon: 'fa-solid fa-square-pen',
      iconClass: 'eit-color--yellow',
      handler: handle
    }
  }
  function actionDelete(handle, label = 'Eliminar registro') {
    return {
      name: 'delete',
      label: label,
      icon: 'fa-solid fa-trash',
      iconClass: 'eit-color--red',
      handler: handle
    }
  }
  function actionDownload(handle, label = 'Descargar registro') {
    return {
      name: 'download',
      label: label,
      icon: 'fa-solid fa-download',
      iconClass: 'eit-color--blue',
      handler: handle
    }
  }
  function actionEnabledDisabled(handle, booleanKey) {
    return {
      name: 'enabledDisabled',
      booleanKey: booleanKey,
      handler: handle,
      true: {
        label: 'Habilitar',
        icon: 'fa-regular fa-circle-check',
        iconClass: 'eit-color--green'
      },
      false: {
        label: 'Deshabilitar',
        icon: 'fa-solid fa-ban',
        iconClass: 'eit-color--red'
      },
    }
  }
  return { 
    actionView,
    actionEdit,
    actionDelete,
    actionDownload,
    actionEnabledDisabled
  }
}