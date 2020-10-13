// const request = require('request')

// const url2 = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiMjFqb24yMDAzIiwiYSI6ImNrZzVhNjh3bzByam0yeHBqeGlwN29uZHkifQ.F09m8_Luzqc0bV440YVnzg&limit=1'

// request({url:url2, json: true},(error, response) => {

// if (error) {
//     console.log("ERROR")   
// } if (response.body.features.length === 0 ) {
//     console.log("Es wurde keien Stadt gefund")
// }
// else {
//     data = response.body.features[0]

// console.log("len"+ data.center[0]  +"long"+ data.center[1] )
// }





 

// })

const request = require("request")


const geocode = (address, callback) =>{
const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1IjoiMjFqb24yMDAzIiwiYSI6ImNrZzVhNjh3bzByam0yeHBqeGlwN29uZHkifQ.F09m8_Luzqc0bV440YVnzg&limit=1'


request({url , json: true}, (error, {body}={})=>{

    if (error) {
            callback('Unable to connect ot location servives!', undefined)


    } else if (body.features.length === 0) {
        
        callback('Unable to find location. Try another search', undefined)
    }else{
        callback(undefined, {
            lat: body.features[0].center[1],
            long: body.features[0].center[0],
            location: body.features[0].place_name

        })
        
    }


})


}
module.exports =  geocode
