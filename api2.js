const searchElement = document.getElementById('fetchUserDataBtn').addEventListener('click', fetchUserData);
const optionElement = document.getElementById('option')
const inputElement = document.getElementById('areaCode')
const result = document.getElementById('result')


function fetchUserData() {
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
        result.innerHTML += `<li>${element.restaurant_name}</li>`
       // result.innerHTML += `<h4>${element.cuisines}</h4>`
       // result.innerHTML += `<h4>${element.restaurant_phone}</h4>`
        
    })

}

function filter(obj) {

    //this is how to make a filter
    //let data = obj.data.filter()
   
    return obj;
}



 