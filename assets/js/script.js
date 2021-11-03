var button = document.querySelector('.btn')
var key = ("9ad0721d21a4ea8d5e5ac7b0c479ae8b")
var input = document.querySelector('.search-input')


button.addEventListener('click',function(){

fetch('https://api.openweathermap.org/data/2.5/forecast?q='+input.value+'&appid=9ad0721d21a4ea8d5e5ac7b0c479ae8b')
.then(response => response.json())
  .then (data => console.log(data))
  .catch(err => alert("Wrong city name!"))
    
})