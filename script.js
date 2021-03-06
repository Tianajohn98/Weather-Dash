var button = document.querySelector('.btn')
var key = ("9ad0721d21a4ea8d5e5ac7b0c479ae8b")
var input = document.querySelector('.search-input')
var text = document.querySelector('.history')
const searchHistory = document.querySelector('.searchList')
const inputValue = document.querySelector('#City')
const saveLocation = document.querySelector('.history')
const storedCity = localStorage.getItem('cityName')
//variables for current day weather
var mainName = document.querySelector('#city-name')
var temp = document.querySelector('#city-temp')
var uv = document.querySelector('#city-index')
var humidity = document.querySelector('#city-humidity')
var wind = document.querySelector('#city-wind')
var now = moment()
//variables for forecast
var forecastDate = document.querySelector('#Date')
var forecastTemp = document.querySelector('#Temp')
var forecastWind = document.querySelector('#Wind')
var forecastHumidity = document.querySelector('#Humidity')

//save search input to p element
if(input) {

    text.textContent = storedCity
}


button.addEventListener('click',function(){
    
  saveLocalStorage();
  dailyForecast ();

//Get weather for forecast
fetch('https://api.openweathermap.org/data/2.5/forecast?q='+input.value+'&units=imperial&appid=9ad0721d21a4ea8d5e5ac7b0c479ae8b').then(function(response){
response.json().then(function(data) {
   console.log(data);

var weekForecast = [];

for (var i =4; i < response.list.length && i < response.list.length; i += 8)
 weekForecast.push(response.list[i]);

      
          for (var i = 0; i < weekForecast.length; i++)
      
  {  
      var fDate = new Date(weekForecast[i].dt_txt);
      forecastDate.html(`${(fDate.getMonth() + 1)}/${fDate.getDate()}/${fDate.getFullYear()}`);

   }

});

});


});
 

    


//save city search name under search
    

inputValue.addEventListener('input', letter  => {
 text.textContent = letter.target.value

});


//save to local storage function
saveLocalStorage = () => {

localStorage.setItem('cityName', text.textContent)

};



 
  function displayCityInfo() {

   


    
  };

//get weather for Day
dailyForecast = function(){
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=imperial&appid=9ad0721d21a4ea8d5e5ac7b0c479ae8b').then(function(response){
        response.json().then(function(data) {
     
            console.log(data);
           
            var nameValue = data['name'];
            var tempValue = data['main']['temp'];
            var cityHum = data['main']['humidity'];
            var cityWind = data['wind']['speed'];
            
            

             mainName.innerHTML =  nameValue + ('\xa0') + now.format("MMM Do YYYY") ;
             temp.innerHTML = ('Temperature:') + ('\xa0') + tempValue + ('\xa0') + ('\u00B0') +('F');
             humidity.innerHTML = ('Humidity:') + ('\xa0') + cityHum + ('%');
             wind.innerHTML = ('Wind:') + ('\xa0') +   cityWind + ('\xa0') + ('MPH') ;
             
           


        });
    
    });
    };
    
