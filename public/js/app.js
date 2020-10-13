

console.log('Client side javascript file is loaded!')



// fetch('http://puzzle.mead.io/puzzle').then((response)=>{

//         response.json().then((data)=>{

//             console.log(data)

//         })


// })





const search = document.querySelector('input')
const weatherForm = document.querySelector('form')
const messageOne = document.querySelector('#one')
const messagetwo = document.querySelector('#two')
const messagetree = document.querySelector('#tree')





weatherForm.addEventListener('submit', (e) =>{

    e.preventDefault()


    const location = search.value

    messageOne.textContent = 'Loading ...'
    messagetwo.textContent = ''  
    messagetree.textContent = ''

    fetch('http://localhost:3000/weather?address='+location).then((response)=>{

response.json().then((data)=>{
    if (data.error) {
        messageOne.textContent = data.error
    } else {
       
        messageOne.textContent = ''
        messagetwo.textContent = data.location  
        messagetree.textContent = data.forecastData
    }


})

})

})