async function getLocation() {

let res = await fetch("https://ipapi.co/json/");
let data = await res.json();

document.getElementById("result").innerHTML = `

<p><b>IP:</b> ${data.ip}</p>
<p><b>City:</b> ${data.city}</p>
<p><b>Region:</b> ${data.region}</p>
<p><b>Country:</b> ${data.country_name}</p>
<p><b>Latitude:</b> ${data.latitude}</p>
<p><b>Longitude:</b> ${data.longitude}</p>

`;

}
