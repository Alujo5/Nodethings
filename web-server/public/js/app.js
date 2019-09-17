console.log("Client side js file is loaded")

const weatherForm = document.querySelector('form')
const searchElement = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

messageOne.textContent = 'Loading...'
messageTwo.textContent = ''

weatherForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const value = searchElement.value

    fetch('https://3000-d9bc6edd-3bd2-4aa4-aabf-f128516a1833.ws-us1.gitpod.io/weather?address=' + value).then((response) => {
    response.json().then((data) => {
        if(data.error){
            return messageOne.textContent = data.error
        }
        messageOne.textContent = data.location
        messageTwo.textContent = data.forecast
        console.log(data.location)
        console.log(data.forecast)
    })
})
})