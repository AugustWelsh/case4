
 
 document.getElementById('fetchUserDataBtn').addEventListener('click', fetchUserData);
    
        function fetchUserData(){
            fetch('https://api.documenu.com/v2/restaurants/zip_code/29464?key=72fd1ee1358951c527d5e38692ea214c')
                .then(response => response.json())
                .then(json => {
                    console.log(json);
                    document.getElementById("api").innerHTML += JSON.stringify(json)}
                )}

              

 // import data from "./Blog.json";

// show Error Inside Your Browser
// fetch(data).then(function(response) {
//   response.json().then(function(data) {
//     console.log(data)
//   });
// });

/*
// Read UserData Form Data.json File
fetch('https://api.documenu.com/v2/restaurants/zip_code/29464?key=72fd1ee1358951c527d5e38692ea214c')
  .then(function (response) {
    return response;
  })
  .then(function (data) {
    return data.json();
  })
  .then(function (Normal) {
    const html = Normal.products.map(
      (data) => `<div class="card"> 
        <h4> ${data.restaurant_name}</h4>
        <h2> ${data.zip_code}</h2>
        <h3> ${data.cuisine}</h3>
        
    </div>`
    );
    document.getElementById("app").innerHTML = html;
  })
  .catch(function (err) {
    console.log("Fetch problem show: " + err.message);
  });

*/





    
        
       /* document.getElementById('fetchUserDataBtn').addEventListener('click', fetchUserData);
    
        function fetchUserData(){
            fetch('https://api.documenu.com/v2/restaurants/zip_code/29464?key=72fd1ee1358951c527d5e38692ea214c')
                .then(response => response.json())
                .then(json => {
                    console.log(json);
                    document.getElementById("api").innerHTML += JSON.stringify(json)}
                    )
        }
        
     */
/*
        function seachResturant(query){
            const url = `https:api.documenu.com/v2/restaurants/search/fields?zip_code=${query}key=72fd1ee1358951c527d5e38692ea214c`
            fetch(url)
            .then(response => response.json())
            .then(jsonData =>{
                
                const results = jsonData.map(element => element.show.name);
                renderResults(results);
            });
        }
           function renderResults(results) {
               const list = document.getElementById("resultList");
               result.forEach(result =>{
                   const element = document.getElementById("li");
                   element.innerText= result;
                   list.appendChild(element)
               });
           }
           window.onload = () =>{
               const searchFieldElement = document.getElementById("searchField");
               searchFieldElement.onkeyup = (event) =>{
                   searchShow(searchFieldElement.value)
               };
           }

    */
   

            
    
        





          //https://www.ibrahima-ndaw.com/blog/build-a-search-filter-with-javascript/
          //https://www.programmableweb.com/news/how-to-geocode-user-input-postcodes/how-to/2016/12/20
          //https://stackoverflow.com/questions/31276005/google-api-how-to-pass-zip-code-value-into-the-javascript-code
          //https://stackoverflow.com/questions/67864100/displaying-data-from-javascript-fetch-api-question
          //https://stackoverflow.com/questions/65118071/how-to-implement-fetch-api-by-search
          //https://stackoverflow.com/questions/69750062/how-can-i-show-the-output-in-console-log
         // https://stackoverflow.com/questions/59060113/sending-data-from-a-search-bar-to-a-url
         //https://stackoverflow.com/questions/57671486/javascript-how-do-i-filter-the-data-on-the-ui-based-without-calling-the-api-ag
        //READ WITH BEAR API //https://stackoverflow.com/questions/59060113/sending-data-from-a-search-bar-to-a-url