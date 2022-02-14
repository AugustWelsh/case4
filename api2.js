const searchElement = document.getElementById('myInput').addEventListener('keyup', myInput);
const optionElement = document.getElementById('option')
const inputElement = document.getElementById('areaCode')
const result = document.getElementById('result')



function myInput() {
    fetch('api.json')
        .then(response => response.json())
        .then(obj => {
            console.log(obj);
            //document.getElementById("result").innerHTML += JSON.stringify(json)}
            return obj;
        }).then(obj => filter(obj))
        .then(obj => render(obj));
}

function render(obj) {
    obj.data.forEach(element => {
        //console.log(element.restaurant_name)
        result.innerHTML += `<li><a href="#">${element.restaurant_name}</a><a href="#"><p>${element.cuisines}</p></a></li>`
       // result.innerHTML += `<h4>${element.cuisines}</h4>`
       // result.innerHTML += `<h4>${element.restaurant_phone}</h4>`
        
    })

}
function myFunction() {
    // Declare variables
    var input, filter, ul, li, a, i, txtValue;
    input = document.getElementById('myInput');
    filter = input.value.toUpperCase();
    ul = document.getElementById("result");
    li = ul.getElementsByTagName('li');
  
    // Loop through all list items, and hide those who don't match the search query
    for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
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





 