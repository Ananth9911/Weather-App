const request = require('request')

const url="http://api.weatherstack.com/current?access_key=546386551a926786474dbf6713f40a75&query=New%20York"
request({ url:url, json:true }, (error,respose) =>{
    console.log(respose.body.current)
} )