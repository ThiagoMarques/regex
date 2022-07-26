const init = () => {
  const validateEmail = (event) => {
    const input = event.currentTarget
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const emailTest = regex.test(input.value)

    if (!emailTest) {
      console.log('Erro')
      submitButton.setAttribute('disabled', 'disabled')
      input.classList.add('error')
    } else {
      submitButton.removeAttribute('disabled')
      input.classList.remove('error')
    }
  }

  const validatePassword = (event) => {
    const input = event.currentTarget

    if (input.value.length < 8) {
      submitButton.setAttribute('disabled', 'disabled')
      input.classList.add('error')
    } else {
      submitButton.removeAttribute('disabled')
      input.classList.remove('error')
    }
  }

  const inputEmail = document.querySelector('input[type="email"]')
  const inputPassword = document.querySelector('input[type="password"]')
  const submitButton = document.querySelector('.login__submit')

  inputEmail.addEventListener('input', validateEmail)
  inputPassword.addEventListener('input', validatePassword)

  const errorHandler = () => {
    submitButton.classList.remove('success')
    submitButton.classList.add('error')
    submitButton.textContent = 'Error :('
  }

  if (submitButton) {
    submitButton.addEventListener('click', (event) => {
      event.preventDefault()

      submitButton.textContent = '...Carregando'

      fetch('https://62e01c41fa8ed271c47e9563.mockapi.io/regexLogin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: inputEmail.value,
          password: inputPassword.value,
        }),
      })
        .then((response) => {
          if (response.status !== 200) {
            errorHandler()
          }
          return response.json()
        })
        .catch(() => {
          errorHandler()
        })
    })
  }
}
window.onload = init
