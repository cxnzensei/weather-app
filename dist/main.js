(()=>{let e=document.querySelector("#searchInput"),t=document.querySelector("#searchBtn"),n=document.querySelector("#celsius"),d=document.querySelector("#farenheit");t.addEventListener("click",(async function(){try{let t=`https://api.openweathermap.org/data/2.5/weather?q=${e.value}&appid=4ba0d7eb9cf6e4d9ffdd61dfab171992`;const m=await fetch(t);!function(e){let t=e.weather[0].main,m=e.name,r=e.sys.country,i=e.coord.lon,o=e.coord.lat,s=e.main.temp,c=e.main.feels_like,l=e.main.temp_min,a=e.main.temp_max,u=e.main.pressure,p=e.main.humidity,L=e.wind.speed,y=e.wind.deg,g=new Date;document.getElementById("time").textContent=g,document.getElementById("h2").textContent=t,document.getElementById("place").textContent=`${m}, ${r}`,document.getElementById("coordinates").textContent=`${o}°, ${i}°`,document.getElementById("temperature").innerHTML=`Temperature <br> ${s} K`,document.getElementById("feelsLike").innerHTML=`Feels Like <br> ${c} K`,document.getElementById("lowestTemp").innerHTML=`Lowest temp <br> ${l} K`,document.getElementById("highestTemp").innerHTML=`Highest temp <br> ${a} K`,document.getElementById("pascal").innerHTML=`Pressure <br> ${u} Pa `,document.getElementById("humidity").innerHTML=`Humidity <br> ${p}% `,document.getElementById("speedAir").innerHTML=`Wind Speed <br> ${L} m/s`,document.getElementById("degAir").innerHTML=`Wind Angle <br> ${y}°`,n.addEventListener("click",(()=>{n.classList.add("chosen"),d.classList.remove("chosen"),document.getElementById("temperature").innerHTML=`Temperature <br> ${(s-273.15).toFixed(2)} °C`,document.getElementById("feelsLike").innerHTML=`Feels Like <br> ${(c-273.15).toFixed(2)} °C`,document.getElementById("lowestTemp").innerHTML=`Lowest temp <br> ${(l-273.15).toFixed(2)} °C`,document.getElementById("highestTemp").innerHTML=`Highest temp <br> ${(a-273.15).toFixed(2)} °C`})),d.addEventListener("click",(()=>{n.classList.remove("chosen"),d.classList.add("chosen"),document.getElementById("temperature").innerHTML=`Temperature <br> ${(1.8*(s-273.15)+32).toFixed(2)} F`,document.getElementById("feelsLike").innerHTML=`Feels Like <br> ${(1.8*(c-273.15)+32).toFixed(2)} F`,document.getElementById("lowestTemp").innerHTML=`Lowest temp <br> ${(1.8*(l-273.15)+32).toFixed(2)} F`,document.getElementById("highestTemp").innerHTML=`Highest temp <br> ${(1.8*(a-273.15)+32).toFixed(2)} F`}))}(await m.json())}catch{alert("Type something that would make sense or check for spell errors!")}})),t.addEventListener("click",(()=>{e.value="",n.classList.remove("chosen"),d.classList.remove("chosen")}))})();