const capsulesUrl = 'https://api.spacexdata.com/v4/capsules';

fetch(capsulesUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach(capsuleData => {
            let capsulesInfo = document.getElementById("infoCapsules");
            capsulesInfo.innerHTML =``;
           
        });displayCapsuleInfo(0);
    })
    .catch((error) => console.log(error));
    
// Función para mostrar la info en el div "infoCapsules"    
function displayCapsuleInfo(c){
    fetch(capsulesUrl)
       .then(response => response.json())
       .then(data => {
            const capsule = data[c];
            if (capsule) {
                document.getElementById("serial").innerHTML = `
                    <h1>${capsule.serial}</h1>
                    <p><strong>ID:</strong>${capsule.id}</p>
                `;
                document.getElementById("infoCapsules").innerHTML = `
                <div>
                    <span><img class="f1" src="/storage/f1.png"> Type:</span>
                    <p>${capsule.type}</p>
                </div>
                <div>
                    <span><img class="f1" src="/storage/f1.png"> Status:</span>
                    <p>${capsule.status}</p>
                </div>
                <div>
                    <span><img class="f1" src="/storage/f2.png"> Water landings:</span>
                    <p>${capsule.water_landings}</p>
                </div>
                <div>
                    <span><img class="f1" src="/storage/f1.png"> Reuse count:</span>
                    <p>${capsule.reuse_count}</p>
                </div>
                <div>
                    <span><img class="f1" src="/storage/f3.png"> Land landings:</span>
                    <p>${capsule.land_landings}</p>
                </div>
                `;
                document.getElementById("last").innerHTML=`
                    <span><img class="f1" src="/storage/satelite.png"> Last update:</span>
                    <p>${capsule.last_update}</p>    
                `;
                launchesId = capsule.launches[0];
                launchesUrl = `https://api.spacexdata.com/v4/launches/${launchesId}`;
                fetch(launchesUrl)
                .then(response => response.json())
                .then(data2 => {
                    //--------------LANZAMIENTO--------------
                    document.getElementById("patch").innerHTML=`
                        <img src="${data2.links.patch.small}">
                    `;
                    document.getElementById("lanza1").innerHTML = `
                        <span><img class="l1" src="/storage/lanzamiento1.png"><strong>Launches:</strong></span>
                        <p class=""><strong>Name:</strong> ${data2.name}</p>
                        <p class=""><strong>Window:</strong> ${data2.window}</p>
                        <p class=""><strong>Success:</strong> ${data2.success}</p>
                    `;
                    document.getElementById("lanza2").innerHTML = `	
                        <span><img class="l1" src="/storage/lanzamiento2.png"><strong>Launches:</strong></span>
                        <p class=""><strong>Flight number:</strong> ${data2.flight_number}</p>
                        <p class=""><strong>Date local:</strong> ${data2.date_local}</p>
                        <p class=""><strong>Date precision:</strong> ${data2.date_precision}</p>
                    `;
                    document.getElementById("enlaces").innerHTML=`
                    <a href="${data2.links.webcast}"><img class="youtube" src="/storage/images/youtube.png"></a><br>
                    <a href="${data2.links.wikipedia}"><img class="wiki" src="/storage/images/Wikipedia_Logo_1.0.png"></a><br> 
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
