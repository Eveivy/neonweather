let btnEl = document.getElementById("btn-el")
let inputEl = document.getElementById("input-el")
let marker;
let popup;
let map = L.map('map').setView([9.613629004215609, 7.867699651230769], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
}).addTo(map);

function defaultCity(){
     let result = document.getElementById("searched-result")
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=port harcourt&appid=42b31b59da0b420b7b7480b236208b86`)
            .then((response) => {
                console.log(response);
                return response.json();
            }).then(data => {
                console.log(data)
                let temperature = data.main.temp - 273.15;
                tempVal = Math.floor(temperature)

                let feelsLike = data.main.feels_like - 273.15
                like = Math.floor(feelsLike)
                console.log(temperature)

                let resultDetails = `<h2 class="text-start">Weather for ${data.name}, <span class="display-6 text-primary fw-bold">${data.sys.country}</span>
                    </h2>
                    <div class="d-flex justify-content-center align-items-center">
                        <div class="me-4">
                            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" alt="${data.weather[0].main}" class="img-fluid">
                        </div>
                        <div>
                            <span class="display-4 fw-bold">${tempVal}&deg;C</span>
                            <p class="lead">${data.weather[0].description}</p>
                        </div>
                    </div>
                    <div class="display-6 d-flex justify-content-center fw-bold">
                        <span class="fw-bold text-primary">Feels like</span>  
                        <span class="text-center ms-2">${like}&deg;C</span>
                    </div>
                    <div class="p-3 d-flex">
                        <p class="lead mx-3">Lat. <span class="display-5 fw-bold">${data.coord.lat}</span></p>
                        <p class="lead mx-3">Lon. <span class="display-5 fw-bold">${data.coord.lon}</span></p>
                    </div>
                    <div class="d-flex justify-content-evenly">
                        <div class="p-2">
                            <span class="fw-bold text-primary">Humidity</span> <br>
                            <span class="text-center">${data.main.humidity}%</span>
                        </div>
                    
                        <div class="p-2">
                            <span class="fw-bold text-primary">Pressure</span> <br>
                            <span class="text-center">${data.main.pressure}hPa</span>
                        </div> 
                        <div class="p-2">
                            <span class="fw-bold text-primary">Sea level</span> <br>
                            <span class="text-center">${data.main.sea_level}m</span>
                        </div>
                    
                    </div>
                    <div class="d-flex justify-content-center mt-2">
                        <p class="display-6 fw-bold text-uppercase me-2">Wind</p>
                        <span class="mt-md-3 mt-2 fw-bold text-primary">speed: <span class="fs-5 text-white">${data.wind.speed}m/s</span></span>
                    </div>`; 
                result.innerHTML = resultDetails;
 
                marker = L.marker([data.coord.lat, data.coord.lon]).addTo(map);
                 popup = L.popup();

                function onMapClick(e) {
                    console.log(e)
                    popup
                        .setLatLng(e.latlng)
                        .setContent(e.latlng.toString())
                        .openOn(map);
                }
                marker.bindPopup(`<h6>${data.name}, ${data.sys.country}</h6>
                       <p class="lead">${tempVal}&deg;C ${data.weather[0].description}</p>
                       <div class="d-flex justify-content-center fw-bold">
                        <span class="fw-bold text-primary">Feels like</span>
                        <span class="text-center ms-2">${like}&deg;C</span>
                    </div>
                      <div class="d-flex">
                        <p class="lead mx-3">Lat. <span class="fw-bold">${data.coord.lat}</span></p>
                        <p class="lead mx-3">Lon. <span class="fw-bold">${data.coord.lon}</span></p>
                    </div>
                    <span class="fw-bold text-primary">Wind speed: <span class="fs-5">${data.wind.speed}m/s</span></span>`
                ).openPopup();
                map.on('click', onMapClick);
                
            }).catch((err) => {
                console.log(err)
            });
}
defaultCity()



btnEl.addEventListener('click', () => {
    let inputVal = inputEl.value;
    let result = document.getElementById("searched-result")
    if (inputVal !== '') {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=42b31b59da0b420b7b7480b236208b86`)
            .then((response) => {
                console.log(response);
                return response.json();
            }).then(data => {
                console.log(data)
            if(data.cod === 200){ 
                let temperature = data.main.temp - 273.15;
                tempVal = Math.floor(temperature)

                let feelsLike = data.main.feels_like - 273.15
                like = Math.floor(feelsLike)
                

                let resultDetails = `<h2 class="text-start">Weather for ${data.name}, <span class="display-6 text-primary fw-bold">${data.sys.country}</span>
                    </h2>
                    <div class="d-flex justify-content-center align-items-center">
                        <div class="me-4">
                            <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png" alt="${data.weather[0].main}" class="img-fluid">
                        </div>
                        <div>
                            <span class="display-4 fw-bold">${tempVal}&deg;C</span>
                            <p class="lead">${data.weather[0].description}</p>
                        </div>
                    </div>
                    <div class="display-6 d-flex justify-content-center fw-bold">
                        <span class="fw-bold text-primary">Feels like</span>  
                        <span class="text-center ms-2">${like}&deg;C</span>
                    </div>
                    <div class="p-3 d-flex">
                        <p class="lead mx-3">Lat. <span class="display-5 fw-bold">${data.coord.lat}</span></p>
                        <p class="lead mx-3">Lon. <span class="display-5 fw-bold">${data.coord.lon}</span></p>
                    </div>
                    <div class="d-flex justify-content-evenly">
                        <div class="p-2">
                            <span class="fw-bold text-primary">Humidity</span> <br>
                            <span class="text-center">${data.main.humidity}%</span>
                        </div>
                    
                        <div class="p-2">
                            <span class="fw-bold text-primary">Pressure</span> <br>
                            <span class="text-center">${data.main.pressure}hPa</span>
                        </div> 
                        <div class="p-2">
                            <span class="fw-bold text-primary">Sea level</span> <br>
                            <span class="text-center">${data.main.sea_level}m</span>
                        </div>
                    
                    </div>
                    <div class="d-flex justify-content-center mt-2">
                        <p class="display-6 fw-bold text-uppercase me-2">Wind</p>
                        <span class="mt-md-3 mt-2 fw-bold text-primary">speed: <span class="fs-5 text-white">${data.wind.speed}m/s</span></span>
                    </div>`; 

                  result.innerHTML = resultDetails;
  
                let circle = L.circle([data.coord.lat, data.coord.lon], {
                    color: 'red',
                    fillColor: '#f03',
                    fillOpacity: 0.5,
                    radius: 500
                }).addTo(map)

                circle.bindPopup(`<h6>${data.name}, ${data.sys.country}</h6>
                       <p class="lead">${tempVal}&deg;C ${data.weather[0].description}</p>
                       <div class="d-flex justify-content-center fw-bold">
                        <span class="fw-bold text-primary">Feels like</span>
                        <span class="text-center ms-2">${like}&deg;C</span>
                    </div>
                      <div class="d-flex">
                        <p class="lead mx-3">Lat. <span class="fw-bold">${data.coord.lat}</span></p>
                        <p class="lead mx-3">Lon. <span class="fw-bold">${data.coord.lon}</span></p>
                    </div>
                    <span class="fw-bold text-primary">Wind speed: <span class="fs-5">${data.wind.speed}m/s</span></span>`)

                 popup = L.popup();
                function onMapClick(e) {
                    popup
                        .setLatLng(e.latlng)
                        .setContent(e.latlng.toString())
                        .openOn(map);
                }

                map.on('click', onMapClick);
                }else{
                      let errmsg = `<h2 class="text-center" style="color:red; font-style: italic;">${data.message}...</h2>`
                result.innerHTML = errmsg
                }
            }).catch((err) => {
                console.log(err)
            });
    }

});
 

