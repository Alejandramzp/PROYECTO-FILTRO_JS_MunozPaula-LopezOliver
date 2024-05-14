const capsulesUrl = 'https://api.spacexdata.com/v4/capsules';

fetch(capsulesUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach(capsuleData => {
            let capsulesInfo = document.getElementById("infoCapsules");
            capsulesInfo.innerHTML =``;
           
        });//displayCapsuleInfo(0);
    })
    .catch((error) => console.log(error));
    
// Función para mostrar la info en el div "infoCapsules"    
function displayCapsuleInfo(c){
    fetch(capsulesUrl)
       .then(response => response.json())
       .then(data => {
            const capsule = data[c];
            if (capsule) {
                document.getElementById("infoCapsules").innerHTML = `
                <div class="infoPrincipal">
                    <p class=""><strong>ID:</strong> ${capsule.id}</p>
                    <p class=""><strong>Type:</strong> ${capsule.type}</p>
                    <p class=""><strong>Status:</strong> ${capsule.status}</p>
                    <p class=""><strong>Serial:</strong> ${capsule.serial}</p>
                    <p class=""><strong>Reuse count:</strong> ${capsule.reuse_count}</p>
                    <p class=""><strong>Water landings:</strong> ${capsule.water_landings}</p>
                    <p class=""><strong>Land landings: </strong> ${capsule.land_landings}</p>
                    <p class=""><strong>Last update:</strong> ${capsule.last_update}</p>
                </div>
                `;
                launchesId = capsule.launches[0];
                launchesUrl = `https://api.spacexdata.com/v4/launches/${launchesId}`;
                fetch(launchesUrl)
                .then(response => response.json())
                .then(data2 => {
                    //--------------LANZAMIENTO--------------
                    document.getElementById("infoCapsules").innerHTML += `
                    <div class="lanzamiento">
                        <h2 class="">${data2.name}</h2>
                        <p class=""><strong>ID:</strong> ${data2.id}</p>
                        <p class=""><strong>patch:</strong></p>
                        <img src="${data2.links.patch.small}"><br>
                        <a href="${data2.links.webcast}">Youtube</a><br>
                        <a href="${data2.links.wikipedia}">Wikipedia</a><br> 
                        <p class=""><strong>Static fire date utc:</strong> ${data2.static_fire_date_utc}</p>
                        <p class=""><strong>Static fire date unix:</strong> ${data2.static_fire_date_unix}</p>
                        <p class=""><strong>Window:</strong> ${data2.window}</p>
                        <p class=""><strong>Success:</strong> ${data2.success}</p>
                        <p class=""><strong>Flight number:</strong> ${data2.flight_number}</p>
                        <p class=""><strong>Date utc:</strong> ${data2.date_utc}</p>
                        <p class=""><strong>Date unix:</strong> ${data2.date_unix}</p>
                        <p class=""><strong>Date local:</strong> ${data2.date_local}</p>
                        <p class=""><strong>Date precision:</strong> ${data2.date_precision}</p>
                        <p class=""><strong>Upcoming:</strong> ${data2.upcoming}</p>
                    </div>
                    `;
                })
                .catch((error) => console.log(error)); 
            } 
        })
        .catch((error) => console.log(error));    
} 

//-----------------------WebComponents--------------------
class capsules25 extends HTMLElement{
    constructor(){
        super();
        this.innerHTML =`<button id="botonCapsule" onclick="displayCapsuleInfo(0)">1</button>
        <button id="botonCapsule" onclick="displayCapsuleInfo(1)">2</button>
        <button id="botonCapsule" onclick="displayCapsuleInfo(2)">3</button>
        <button id="botonCapsule" onclick="displayCapsuleInfo(3)">4</button>
        <button id="botonCapsule" onclick="displayCapsuleInfo(4)">5</button>
        <button id="botonCapsule" onclick="displayCapsuleInfo(5)">6</button>
        <button id="botonCapsule" onclick="displayCapsuleInfo(6)">7</button>
        <button id="botonCapsule" onclick="displayCapsuleInfo(7)">8</button>
        <button id="botonCapsule" onclick="displayCapsuleInfo(8)">9</button>
        <button id="botonCapsule" onclick="displayCapsuleInfo(9)">10</button>
        <button id="botonCapsule" onclick="displayCapsuleInfo(10)">11</button>
        <button id="botonCapsule" onclick="displayCapsuleInfo(11)">12</button>
        <button id="botonCapsule" onclick="displayCapsuleInfo(12)">13</button>
        <button id="botonCapsule" onclick="displayCapsuleInfo(13)">14</button>
        <button id="botonCapsule" onclick="displayCapsuleInfo(14)">15</button>
        <button id="botonCapsule" onclick="displayCapsuleInfo(15)">16</button>
        <button id="botonCapsule" onclick="displayCapsuleInfo(16)">17</button>
        <button id="botonCapsule" onclick="displayCapsuleInfo(17)">18</button>
        <button id="botonCapsule" onclick="displayCapsuleInfo(18)">19</button>
        <button id="botonCapsule" onclick="displayCapsuleInfo(19)">20</button>
        <button id="botonCapsule" onclick="displayCapsuleInfo(20)">21</button>
        <button id="botonCapsule" onclick="displayCapsuleInfo(21)">22</button>
        <button id="botonCapsule" onclick="displayCapsuleInfo(22)">23</button>
        <button id="botonCapsule" onclick="displayCapsuleInfo(23)">24</button>
        <button id="botonCapsule" onclick="displayCapsuleInfo(24)">25</button>
        `;
    }    
}
customElements.define('botones-capsules',capsules25)   
