var button = document.querySelector('.btn')
var key = ("9ad0721d21a4ea8d5e5ac7b0c479ae8b")
var input = document.querySelector('.search-input')
var text = document.querySelector('.history')
const searchHistory = document.querySelector('.searchList')
const inputValue = document.querySelector('#City')
const saveLocation = document.querySelector('.history')
const storedCity = localStorage.getItem('cityName')

//save search input to p element
if(input) {

    text.textContent = storedCity
}


button.addEventListener('click',function(){
 
  saveLocalStorage()

//Get weather for city
fetch('https://api.openweathermap.org/data/2.5/forecast?q='+input.value+'&appid=9ad0721d21a4ea8d5e5ac7b0c479ae8b')
.then(response => response.json())
  .then (data => console.log(data))
  .catch(err => alert("Wrong city name!"));



    
})

//save city search name under search
    

inputValue.addEventListener('input', letter  => {
 text.textContent = letter.target.value

})
//save to local storage function
const saveLocalStorage = () => {

localStorage.setItem('cityName', text.textContent)

}



  