// const  response  = require("express")

// console.log('Client side javascipt file is loaded!')

// fetch('http://puzzle.mead.io/puzzle').then((response) => {

//     response.json().then((data) => {

// })
// })


let  hello = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector('#message-1')
const messageTwo = document.querySelector('#message-2')

/*Fdtdrw
aded comennts */
hello.addEventListener('submit',(e) => {
    e.preventDefault()

    const location = search.value

    messageOne.textContent = 'Loadong..'
    messageTwo.textContent = ''

    fetch('http://localhost:3000/weather/address=' + location).then((response) => {

        response.json().then((data) => {

            if (data.error) {
                messageOne.textContent = data.error
                
            } else {
                messageOne.textContent = data.location
                messageTwo.textContent = data.forecast
            }

        })

})
})

