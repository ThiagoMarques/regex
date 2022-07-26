function checkValidIp() {
  const inputIp = document.querySelector('#ipv4')
  const n = '(\\d{1,2}|1\\d{2}|2[0-4]\\d|25[0-5])'
  const ipv4 = RegExp(`\\b${n}\\.${n}\\.${n}\\.${n}\\b`, 'g')
  matchValue = inputIp.value.match(ipv4)

  if (!matchValue) {
    inputIp.textContent = 'nenhum ip válido'
  } else {
    inputIp.textContent = matchValue
  }
}

function clearIp() {
  const inputIp = document.querySelector('#ipv4')
  inputIp.textContent = `
  192.268.0.1
  1.333.1.1
  192.168.0.256
  256.256.256.256
  192.168.0.1
  127.0.0.1
  10.0.0.255
  10.11.12.0
  255.255.255.255
  0.0.0.0
  `
}

function checkPhones() {
  const inputPhone = document.querySelector('#phones')
  matchValue = inputPhone.value.match(/(\(\d{2}\)\s?)?\d{4,5}-\d{4}/g)

  if (!matchValue) {
    inputPhone.textContent = 'nenhum telefone válido'
  } else {
    inputPhone.textContent = matchValue
  }
}

function clearPhones() {
  const inputPhone = document.querySelector('#phones')
  inputPhone.textContent = `Inválidos: 
  - (21) 12345-6789
  - (11) 12345-6789
  - 12345-6789
  - (85) 3333-6789
  - (1) 4321-6789
  `
}

function checkPWD() {
  const inputPWD = document.querySelector('#PWD')
  const inputresponse = document.querySelector('#response')
  matchValue = inputPWD.value.match(
    /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@#$%!^&*]).{6,20}$/gm,
  )
  if (!matchValue) {
    inputresponse.value = 'senha inválida'
  } else {
    inputresponse.value = 'senha válida'
  }
}

function clearPWD() {
  const inputPWD = document.querySelector('#PWD')
  inputPWD.value = 'Digite aqui uma senha'
}
