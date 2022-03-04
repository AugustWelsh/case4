//const searchElement = document.getElementById('myInput').addEventListener('keyup', myInput);
const searchElement = document.getElementById('fetchUserDataBtn').addEventListener('click', fetchUserData);
const optionElement = document.getElementById('option')
const inputElement = document.getElementById('areaCode')
const result = document.getElementById('result')



function /*myInput*/fetchUserData() {
    fetch('api.json')
        .then(response => response.json())
        .then(obj => {
            console.log(obj);
            //document.getElementById("result").innerHTML += JSON.stringify(json)}
            return obj;
        }).then(obj => filter(obj))
        .then(obj => render(obj));
}
fetchUserData();
function render(obj) {
    obj.data.forEach(element => {
        //console.log(element.restaurant_name)
        result.innerHTML += `<li><div>${element.restaurant_name} <br> <p>Cuisines:</p><h4>${element.cuisines.join(" - ")}</h4> <h4><a href="${element.restaurant_website}" target="_blank"> ${element.restaurant_website}</a></h4></div></li>`
       // result.innerHTML += `<h4>${element.cuisines}</h4>`
       // result.innerHTML += `<h4>${element.restaurant_phone}</h4>`
        
    })

}
function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, p, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("result");
    li = ul.getElementsByTagName('li');
    p = ul.getElementsByTagName('p')
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      div = li[i].getElementsByTagName("div")[0];
      txtValue = div.textContent || div.innerText;
      console.log(txtValue)
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  }

function filter(obj) {

    //this is how to make a filter
    //let data = obj.data.filter()
  

    return obj;
}





 