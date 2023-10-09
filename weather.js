const userCity='hollywood'


const getWeatherData=(city)=>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '1dea8972f1msh1ec08f59ca1cf37p16b5e6jsn7c985ea790d0',
            'X-RapidAPI-Host': 'openweather43.p.rapidapi.com'
        }
    };
    
    //const url = `https://openweather43.p.rapidapi.com/weather?q=dehli&units=standard`;
    
    
   return fetch(`https://openweather43.p.rapidapi.com/weather?q=${city}&units=standard`,options)
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(err=>console.log(err))
}

const searchCity= async ()=>{
    const city=document.getElementById('city-input').value;
    console.log(city)
    const data= await getWeatherData(city)
    showWeatherData(data)
}

const showWeatherData=(weatherdata)=>{
    console.log(weatherdata.main.temp)
   document.getElementById('temp').innerHTML=weatherdata.main.temp
   document.getElementById('city-name').innerHTML=weatherdata.name
   document.getElementById('min-temp').innerHTML=weatherdata.main.temp_min
   document.getElementById('max-temp').innerHTML=weatherdata.main.temp_max
   document.getElementById('weather-type').innerHTML=weatherdata.weather[0].main
}

/*try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}*/