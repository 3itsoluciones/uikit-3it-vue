export default function useValidator() {
  
  //Default
  function validateDefault(value) {
    if (value === null || value === undefined) return false
    if (typeof value === 'string' && value.trim() === '') return false
    if (typeof value === 'object' && Object.keys(value).length === 0) return false
    if (Array.isArray(value) && value.length === 0) return false
    return true
  }

  //Email
  function validateEmail(email) {
    const emailParams = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g
    return emailParams.test(email)
  }

  //RUT
  function validateRut(rut) {
    if(rut.length >= 11 && rut.length <= 12 && /[.-]/.test(rut)) return true
    if(rut.length < 11) return false
  }

  //Password
  function validatePassword(value) {
    const hasMinimumLength = value.length >= 8
    const hasUpperCase = /[A-Z]/.test(value)
    const hasLowerCase = /[a-z]/.test(value)
    const hasNumber = /[0-9]/.test(value)
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value)
    return hasMinimumLength && hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar
  }

  function validatePhone(phone) {
    const phoneParams = /^\+\d{3} \d{4}-\d{4}$/
    return phoneParams.test(phone)
  }

  return { validateDefault, validateEmail, validateRut, validatePassword, validatePhone }
}