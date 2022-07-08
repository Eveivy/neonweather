window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = []; window.myWidgetParam.push({ id: 22, cityid: '2324774', appid: '42b31b59da0b420b7b7480b236208b86', units: 'metric', containerid: 'openweathermap-widget-22', }); (function () { var script = document.createElement('script'); script.async = true; script.charset = "utf-8"; script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js"; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(script, s); })(); 

window.myWidgetParam ? window.myWidgetParam : window.myWidgetParam = []; window.myWidgetParam.push({ id: 21, cityid: '2324774', appid: '42b31b59da0b420b7b7480b236208b86', units: 'metric', containerid: 'openweathermap-widget-21', }); (function () { var script = document.createElement('script'); script.async = true; script.charset = "utf-8"; script.src = "//openweathermap.org/themes/openweathermap/assets/vendor/owm/js/weather-widget-generator.js"; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(script, s); })();

// function weatherEl() {
//     fetch("https://api.openweathermap.org/data/2.5/weather?q=lagos&appid=42b31b59da0b420b7b7480b236208b86")
//         .then((response) => {
//             console.log(response);
//             return response.json();
//         }).then(data => {
//             console.log(data)
//         }).catch((err) => {
//             console.log(err)
//         });
// }
// weatherEl()