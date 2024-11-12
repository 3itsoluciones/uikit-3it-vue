export default function useTable() {
  //Sort Table
  function sortTable(table) {
    const { sort, data } = table
    const { keys, index, asc } = sort
    const key = keys[index]

    data.sort((a, b) => {
      let aValue = a[key]
      let bValue = b[key]

      if (typeof aValue === 'object' && aValue !== null) {
        aValue = aValue.name
        bValue = bValue.name
      }

      if (aValue === bValue) return 0
      return (aValue > bValue ? 1 : -1) * (asc ? 1 : -1)
    })
    return data
  }
  function changeStatus(item) {
    if (item) return  { name: 'Activo', className: 'eit-badge eit-badge__outline--secondary', status: item } 
    if (!item) return { name: 'Inactivo', className: 'eit-badge eit-badge__outline--gray', status: item }
    return ''
  }

  return { 
    sortTable, 
    changeStatus 
  }
}
