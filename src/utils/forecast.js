// const url = 'http://api.weatherstack.com/current?access_key=21a82fa6eb6874a7d1e7e4447eb5df13&query=37.8267,-122.4233&units=m'

// request({ url: url, json: true}, (error, response) => {
//     data = response.body.current
//     if (error) {
//         console.log("ERROR")            
//     } 
//     else if(response.body.error){
//         console.log(response.body.error)


//     }else {
//         console.log("Es sind " + data.temperature + "°C und "+ data.feelslike +"°C ist die Gefühlte temperatur")

//     }
    
// })

const request = require("request")

const forcast = (lat , long, callback  ) =>{

    const url = 'http://api.weatherstack.com/current?access_key=21a82fa6eb6874a7d1e7e4447eb5df13&query='+ lat +','+ long +'&units=m'

    request({  url, json: true}, (error, {body}= {}) => {

        if (error) {
            callback('Unable to connect to location servives!', undefined)


    } else if (body.error) {
        
        callback(body.error, undefined)
    }else{
        data = body.current
        callback(undefined, "Es sind " + data.temperature + "°C und "+ data.feelslike +"°C ist die Gefühlte temperatur")
        
    }
    })
}

module.exports = forcast