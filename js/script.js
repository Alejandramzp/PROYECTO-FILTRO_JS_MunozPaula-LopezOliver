const rocketsUrl = 'https://api.spacexdata.com/v4/rockets';

fetch(rocketsUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach(rocketData => {
            let rocketsInfo = document.getElementById("infoRockets");
            rocketsInfo.innerHTML =``;
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
                <h1 class="rname">${rocket.name}</h1>
                <p class="rid"><strong>ID:</strong> ${rocket.id}</p>
                <p class="rdesc"><strong>Description:</strong><br><span style="color: #787878;"> ${rocket.description}</p>
                <a href="${rocket.wikipedia}" target="_blank">
                <img src="/storage/images/Wikipedia_Logo_1.0.png" class="rwiki">
                </a>
                <div class="generalinfo">
                    <p><strong>Type:</strong><br><span style="color: #787878;">${rocket.type}</span></p>
                    <p ><strong>Active:</strong><br><span style="color: #787878;"> ${rocket.active}</p>
                    <p ><strong>Stages:</strong><br><span style="color: #787878;"> ${rocket.stages}</p>
                    <p ><strong>Boosters:</strong><br><span style="color: #787878;"> ${rocket.boosters}</p>
                    <p ><strong>Cost per launch:</strong><br><span style="color: #787878;"> ${rocket.cost_per_launch}</p>
                    <p ><strong>Success rate pct:</strong><br><span style="color: #787878;"> ${rocket.success_rate_pct}</p>
                    <p ><strong>First flight:</strong><br><span style="color: #787878;"> ${rocket.first_flight}</p>
                    <p ><strong>Country:</strong><br><span style="color: #787878;"> ${rocket.country}</p>
                    <p ><strong>Company:</strong><br><span style="color: #787878;"> ${rocket.company}</p>
                </div>
                <div class="advancedinfo">
                    <p><strong>Height:</strong><br><span style="color: #787878;"> ${rocket.height.meters} meters<br>${rocket.height.feet} feet</p>
                    <p><strong>Diameter:</strong><br><span style="color: #787878;"> ${rocket.diameter.meters} meters<br>${rocket.diameter.feet} feet</p>
                    <p><strong>Mass:</strong><br><span style="color: #787878;">  ${rocket.mass.kg} kg<br> ${rocket.mass.lb} lb </p>
                    <p><strong>Landing legs:</strong></p>
                    <p><strong>Number:</strong><br><span style="color: #787878;"> ${rocket.landing_legs.number}</p>
                    <p><strong>Material:</strong><br><span style="color: #787878;"> ${rocket.landing_legs.material}</p>
                </div>
                <div class="stages">
                    <p><strong>First stage:</strong></p>
                    <p><strong>Thrust sea level:</strong><br><span style="color: #787878;"> ${rocket.first_stage.thrust_sea_level.kN} kN<br> ${rocket.first_stage.thrust_sea_level.lbf} lbf </p>
                    <p><strong>Thrust vacuum:</strong><br><span style="color: #787878;"> ${rocket.first_stage.thrust_vacuum.kN} kN<br> ${rocket.first_stage.thrust_vacuum.lbf} lbf </p>
                    <p><strong>Reusable:</strong><br><span style="color: #787878;"> ${rocket.first_stage.reusable}</p>
                    <p><strong>Engines:</strong><br><span style="color: #787878;"> ${rocket.first_stage.engines}</p>
                    <p><strong>Fuel amount tons:</strong><br><span style="color: #787878;"> ${rocket.first_stage.fuel_amount_tons}</p>
                    <p><strong>Burn time sec:</strong><br><span style="color: #787878;"> ${rocket.first_stage.burn_time_sec}</p>
                    
                    <p><strong>Second stage:</strong></p>
                    <p><strong>Thrust:</strong><br><span style="color: #787878;"> ${rocket.second_stage.thrust.kN} kN<br> ${rocket.second_stage.thrust.lbf} lbf </p>
                    <p><strong>Payloads:</strong></p>
                    <p><strong>Composite fairing:</strong></p>
                    <p><strong>Height:</strong><br><span style="color: #787878;"> ${rocket.second_stage.payloads.composite_fairing.height.meters} meters<br> ${rocket.second_stage.payloads.composite_fairing.height.feet} feet</p>
                    <p><strong>Diameter:</strong><br><span style="color: #787878;"> ${rocket.second_stage.payloads.composite_fairing.diameter.meters} meters<br> ${rocket.second_stage.payloads.composite_fairing.diameter.feet} feet</p>
                    <p><strong>Option 1:</strong><br><span style="color: #787878;"> ${rocket.second_stage.payloads.option_1}</p>
                    <p><strong>Reusable:</strong><br><span style="color: #787878;"> ${rocket.second_stage.reusable}</p>
                    <p><strong>Engines:</strong><br><span style="color: #787878;"> ${rocket.second_stage.engines}</p>
                    <p><strong>Fuel amount tons:</strong><br><span style="color: #787878;"> ${rocket.second_stage.fuel_amount_tons}</p>
                    <p><strong>Burn time sec:</strong><br><span style="color: #787878;"> ${rocket.second_stage.burn_time_sec}</p>
                </div>
                <div class="engines">
                    <p><strong>Engines:</strong></p>
                    <p><strong>Isp:</strong></p>
                    <p><strong>Sea level:</strong><br><span style="color: #787878;"> ${rocket.engines.isp.sea_level}</p>
                    <p><strong>Vacuum:</strong><br><span style="color: #787878;"> ${rocket.engines.isp.vacuum}</p>
                    <p><strong>Thrust sea level:</strong><br><span style="color: #787878;"> ${rocket.engines.thrust_sea_level.kN} kN <br> ${rocket.engines.thrust_sea_level.lbf} lbf</p>
                    <p><strong>Thrust vacuum:</strong><br><span style="color: #787878;"> ${rocket.engines.thrust_vacuum.kN} kN <br> ${rocket.engines.thrust_vacuum.lbf} lbf</p>
                    <p><strong>Number:</strong><br><span style="color: #787878;"> ${rocket.engines.number}</p>
                    <p><strong>Type:</strong><br><span style="color: #787878;"> ${rocket.engines.type}</p>
                    <p><strong>Version:</strong><br><span style="color: #787878;"> ${rocket.engines.version}</p>
                    <p><strong>Layout:</strong><br><span style="color: #787878;"> ${rocket.engines.layout}</p>
                    <p><strong>Engine loss max:</strong><br><span style="color: #787878;"> ${rocket.engines.engine_loss_max}</p>
                    <p><strong>Propellant 1:</strong><br><span style="color: #787878;"> ${rocket.engines.propellant_1}</p>
                    <p><strong>Propellant 2:</strong><br><span style="color: #787878;"> ${rocket.engines.propellant_2}</p>
                    <p><strong>Thrust to weight:</strong><br><span style="color: #787878;"> ${rocket.engines.thrust_to_weight}</p>
                </div>
                `;
                //---------------------PAYLOAD WEIGHTS-------------------
                payload = rocket.payload_weights;
                payload.forEach(element => {
                    document.getElementById("infoRockets").innerHTML += `
                    <div class="payloadWeights">
                        <p><strong>Payload weights:</strong></p>
                        <p><strong>ID:</strong><br><span style="color: #787878;"> ${element.id}</p>
                        <p><strong>Name:</strong><br><span style="color: #787878;"> ${element.name}</p>
                        <p><strong>Kg:</strong><br><span style="color: #787878;"> ${element.kg}</p>
                        <p><strong>Lb:</strong><br><span style="color: #787878;"> ${element.lb}</p>
                    </div>
                    `;
                });
                //---------------------IMAGENES-------------------
                images = rocket.flickr_images;
                images.forEach(element => {
                    document.getElementById("infoRockets").innerHTML += `
                    <div class="imagenes">
                        <img src="${element}">
                    </div>
                    `;
                });
            }
        })
        .catch((error) => console.log(error));
}
//-----------------------WebComponents--------------------
class rocket4 extends HTMLElement{
    constructor(){
        super();
        this.innerHTML =`
        <button class="rbtn1" id="botonRocket" onclick="displayRocketInfo(0)">1</button>
        <button class="rbtn2" id="botonRocket" onclick="displayRocketInfo(1)">2</button>
        <button class="rbtn3" id="botonRocket" onclick="displayRocketInfo(2)">3</button>
        <button class="rbtn4" id="botonRocket" onclick="displayRocketInfo(3)">4</button>`;
    }    
}
customElements.define('botones-rockets',rocket4)
