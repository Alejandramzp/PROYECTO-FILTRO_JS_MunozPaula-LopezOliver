const rocketsUrl = 'https://api.spacexdata.com/v4/rockets';

fetch(rocketsUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach(rocketData => {
            let rocketsInfo = document.getElementById("infoRockets");
            rocketsInfo.innerHTML =``;
            displayRocketInfo(1)
        });
        
    })
    .catch((error) => console.log(error));

// Función para mostrar la info en el div "info"
function displayRocketInfo(r) {
    fetch(rocketsUrl)
        .then(response => response.json())
        .then(data => {
            const rocket = data[r];
            if (rocket) {
                document.getElementById("infoRockets").innerHTML = `
                <h1 class="rname"><span style="color: white;">${rocket.name}</h1>
                <p class="rid"><strong>ID:</strong><span style="color: white;"> ${rocket.id}</p>
                <div class="rdesc">
                 <p><strong>Description:</strong><br><span style="color: white;"> ${rocket.description}</p>
                </div>
                <a href="${rocket.wikipedia}" target="_blank">
                <img src="/storage/images/Wikipedia_Logo_1.0.png" class="rwiki">
                </a>
                <div class="generalinfo">
                    <p><strong>Type:</strong><br><span style="color: white;">${rocket.type}</span></p><br>
                    <p ><strong>Active:</strong><br><span style="color: white;"> ${rocket.active}</p><br>
                    <p ><strong>Stages:</strong><br><span style="color: white;"> ${rocket.stages}</p><br>
                    <p ><strong>Boosters:</strong><br><span style="color: white;"> ${rocket.boosters}</p><br>
                    <p ><strong>Cost per launch:</strong><br><span style="color: white;"> ${rocket.cost_per_launch}</p><br>
                    <p ><strong>Success rate pct:</strong><br><span style="color: white;"> ${rocket.success_rate_pct}</p><br>
                    <p ><strong>First flight:</strong><br><span style="color: white;"> ${rocket.first_flight}</p><br>
                    <p ><strong>Country:</strong><br><span style="color: white;"> ${rocket.country}</p><br>
                    <p ><strong>Company:</strong><br><span style="color: white;"> ${rocket.company}</p><br>
                </div>
                <div class="advancedinfo">
                    <p><strong>Height:</strong><br><span style="color: white;"> ${rocket.height.meters} meters<br>${rocket.height.feet} feet</p><br>
                    <p><strong>Diameter:</strong><br><span style="color: white;"> ${rocket.diameter.meters} meters<br>${rocket.diameter.feet} feet</p><br>
                    <p><strong>Mass:</strong><br><span style="color: white;">  ${rocket.mass.kg} kg<br> ${rocket.mass.lb} lb </p><br>
                    <p><strong>Landing legs:</strong></p>
                    <p><strong>Number:</strong><br><span style="color: white;"> ${rocket.landing_legs.number}</p>
                    <p><strong>Material:</strong><br><span style="color: white;"> ${rocket.landing_legs.material}</p>
                </div>
                <div class="stages">
                    <p><strong>First stage:</strong></p>
                    <p><strong>Thrust sea level:</strong><br><span style="color: white;"> ${rocket.first_stage.thrust_sea_level.kN} kN<br> ${rocket.first_stage.thrust_sea_level.lbf} lbf </p><br>
                    <p><strong>Thrust vacuum:</strong><br><span style="color: white;"> ${rocket.first_stage.thrust_vacuum.kN} kN<br> ${rocket.first_stage.thrust_vacuum.lbf} lbf </p><br>
                    <p><strong>Reusable:</strong><br><span style="color: white;"> ${rocket.first_stage.reusable}</p><br>
                    <p><strong>Engines:</strong><br><span style="color: white;"> ${rocket.first_stage.engines}</p><br>
                    <p><strong>Fuel amount tons:</strong><br><span style="color: white;"> ${rocket.first_stage.fuel_amount_tons}</p><br>
                    <p><strong>Burn time sec:</strong><br><span style="color: white;"> ${rocket.first_stage.burn_time_sec}</p><br>
                    
                    <p><strong>Second stage:</strong></p>
                    <p><strong>Thrust:</strong><br><span style="color: white;"> ${rocket.second_stage.thrust.kN} kN<br> ${rocket.second_stage.thrust.lbf} lbf </p><br>
                    <p><strong>Payloads:</strong></p>
                    <p><strong>Composite fairing:</strong></p>
                    <p><strong>Height:</strong><br><span style="color: white;"> ${rocket.second_stage.payloads.composite_fairing.height.meters} meters<br> ${rocket.second_stage.payloads.composite_fairing.height.feet} feet</p><br>
                    <p><strong>Diameter:</strong><br><span style="color: white;"> ${rocket.second_stage.payloads.composite_fairing.diameter.meters} meters<br> ${rocket.second_stage.payloads.composite_fairing.diameter.feet} feet</p><br>
                    <p><strong>Option 1:</strong><br><span style="color: white;"> ${rocket.second_stage.payloads.option_1}</p><br>
                    <p><strong>Reusable:</strong><br><span style="color: white;"> ${rocket.second_stage.reusable}</p><br>
                    <p><strong>Engines:</strong><br><span style="color: white;"> ${rocket.second_stage.engines}</p><br>
                    <p><strong>Fuel amount tons:</strong><br><span style="color: white;"> ${rocket.second_stage.fuel_amount_tons}</p><br>
                    <p><strong>Burn time sec:</strong><br><span style="color: white;"> ${rocket.second_stage.burn_time_sec}</p><br>
                </div>
                <div class="engines">
                    <p><strong>Engines:</strong></p>
                    <p><strong>Isp:</strong></p>
                    <p><strong>Sea level:</strong><br><span style="color: white;"> ${rocket.engines.isp.sea_level}</p><br>
                    <p><strong>Vacuum:</strong><br><span style="color: white;"> ${rocket.engines.isp.vacuum}</p><br>
                    <p><strong>Thrust sea level:</strong><br><span style="color: white;"> ${rocket.engines.thrust_sea_level.kN} kN <br> ${rocket.engines.thrust_sea_level.lbf} lbf</p><br>
                    <p><strong>Thrust vacuum:</strong><br><span style="color: white;"> ${rocket.engines.thrust_vacuum.kN} kN <br> ${rocket.engines.thrust_vacuum.lbf} lbf</p><br>
                    <p><strong>Number:</strong><br><span style="color: white;"> ${rocket.engines.number}</p><br>
                    <p><strong>Type:</strong><br><span style="color: white;"> ${rocket.engines.type}</p><br>
                    <p><strong>Version:</strong><br><span style="color: white;"> ${rocket.engines.version}</p><br>
                    <p><strong>Layout:</strong><br><span style="color: white;"> ${rocket.engines.layout}</p><br>
                    <p><strong>Engine loss max:</strong><br><span style="color: white;"> ${rocket.engines.engine_loss_max}</p><br>
                    <p><strong>Propellant 1:</strong><br><span style="color: white;"> ${rocket.engines.propellant_1}</p><br>
                    <p><strong>Propellant 2:</strong><br><span style="color: white;"> ${rocket.engines.propellant_2}</p><br>
                    <p><strong>Thrust to weight:</strong><br><span style="color: white;"> ${rocket.engines.thrust_to_weight}</p><br>
                </div>
                <div class="payloadWeights">
                <p><strong>Payload weights:</strong></p>
                <p><strong>ID:</strong><br><span style="color: white;"> ${rocket.payload_weights[0].id}</p><br>
                <p><strong>Name:</strong><br><span style="color: white;"> ${rocket.payload_weights[0].name}</p><br>
                <p><strong>Kg:</strong><br><span style="color: white;"> ${rocket.payload_weights[0].kg}</p><br>
                <p><strong>Lb:</strong><br><span style="color: white;"> ${rocket.payload_weights[0].lb}</p><br>
                </div>
                `;
                images = rocket.flickr_images;
                let imagesHTML = "";
                images.forEach(element => {
                    imagesHTML += `<img src="${element}" class="cohetes" eferrerpolicy="no-referrer">`;
                });
                let container = document.getElementById("images");
                container.innerHTML = imagesHTML;
            }
        })
        .catch((error) => console.log(error));
}
//-----------------------WebComponents--------------------
class rocket4 extends HTMLElement{
    constructor(){
        super();
        this.innerHTML =`
        <button id="botonRocket" onclick="displayRocketInfo(0)">1</button>
        <button id="botonRocket" onclick="displayRocketInfo(1)">2</button>
        <button id="botonRocket" onclick="displayRocketInfo(2)">3</button>
        <button id="botonRocket" onclick="displayRocketInfo(3)">4</button>`;
    }    
}
customElements.define('botones-rockets',rocket4)
