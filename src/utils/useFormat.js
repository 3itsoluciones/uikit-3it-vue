import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'
import 'dayjs/locale/es'

dayjs.extend(relativeTime)
dayjs.locale('es')

export default function useFormat() {
  //Date
  function formatDate(value) {
    const date = dayjs(value).format('DD/MM/YYYY')
    return date
  }
  function formatDateToBack(value) {
    const date = dayjs(value).format('YYYY-MM-DD')
    return date
  }
  function formatDateAgo(value) {
    const date = dayjs(value).fromNow()
    return date
  }
  //RUT
  function formatRut(value) {
    let cleanValue = value.replace(/[^0-9kK]/g, '')

    let rut = cleanValue.slice(0, -1).replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    let dv = cleanValue.slice(-1).toUpperCase()

    return `${rut}-${dv}`
  }

  function formatCapitalize(value) {
    if(value === null) return ''
    else return value.charAt(0).toUpperCase() + value.slice(1).toLowerCase()
  }

  //Currency
  function formatCurrency(value) {
    return new Intl.NumberFormat('es-CL').format(value)
  }

  function formatCurrencyToBack(value) {
    const cleanedString = value.replace(/\./g, '')
    return Number(cleanedString)
  }
  return { 
    formatDate, 
    formatDateToBack, 
    formatDateAgo, 
    formatRut, 
    formatCapitalize, 
    formatCurrency,
    formatCurrencyToBack
  }
}
