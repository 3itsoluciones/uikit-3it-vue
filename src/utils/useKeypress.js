// useKeypress.js
export default function useKeypress() {
  //RUT
  function keyPressRut(e) {
    let char = String.fromCharCode(e.keyCode)
    if (/^[0-9Kk.-]/.test(char)) return true
    else e.preventDefault()
  }
  return { keyPressRut }
}
