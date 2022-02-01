document.getElementById('fetchUserDataBtn').addEventListener('click', fetchUserData);
    
        function fetchUserData(){
            fetch('https://api.documenu.com/v2?key=9de5b91547cbbd7085cc1b2367b76a5c')
                .then(response => response.json())
                .then(json => console.log(json))
        }