export default function useInputMask() {
  //RUT
  function inputMaskRut(rut) {
    return rut.replace(/[.-]/g, "").replace(/^(\d{1,2})(\d{3})(\d{3})(\w{1})$/, "$1.$2.$3-$4")
  }
  //Currency
  function inputMaskCurrency(currency) {
    return currency.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ".")
  }

  //Phone
  function inputMaskPhone(phone) {
    return phone.replace(/\D/g, "").replace(/^(\d{3})(\d{4})(\d{4})$/, "+$1 $2-$3")
  }

  return { inputMaskRut, inputMaskCurrency, inputMaskPhone }
}