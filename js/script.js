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
                <div class="infoPrincipal">
                    <h1 class="rname">${rocket.name}</h1>
                    <p class=""><strong>ID:</strong> ${rocket.id}</p>
                    <p class=""><strong>Type:</strong> ${rocket.type}</p>
                    <p class=""><strong>Active:</strong> ${rocket.active}</p>
                    <p class=""><strong>Stages:</strong> ${rocket.stages}</p>
                    <p class=""><strong>Boosters:</strong> ${rocket.boosters}</p>
                    <p class=""><strong>Cost per launch:</strong> ${rocket.cost_per_launch}</p>
                    <p class=""><strong>Success rate pct:</strong> ${rocket.success_rate_pct}</p>
                    <p class=""><strong>First flight:</strong> ${rocket.first_flight}</p>
                    <p class=""><strong>Country:</strong> ${rocket.country}</p>
                    <p class=""><strong>Company:</strong> ${rocket.company}</p>
                    <p class=""><strong>Description:</strong> ${rocket.description}</p>
                    <a href="${rocket.wikipedia}">wikipedia</a><br>
                </div>
            //----------------------MEDIDAS------------------
                <div class="medidas">
                    <p><strong>Height:</strong> ${rocket.height.meters} meters - ${rocket.height.feet} feet</p>
                    <p><strong>Diameter:</strong> ${rocket.diameter.meters} meters - ${rocket.diameter.feet} feet</p>
                    <p><strong>Mass:</strong> ${rocket.mass.kg} kg - ${rocket.mass.lb} lb </p>
                </div>
            //------------------PRIMER ESCENARIO---------
                <div class="primerEscenario">
                    <p><strong>First stage:</strong></p>
                    <p><strong>Thrust sea level:</strong> ${rocket.first_stage.thrust_sea_level.kN} kN - ${rocket.first_stage.thrust_sea_level.lbf} lbf </p>
                    <p><strong>Thrust vacuum:</strong> ${rocket.first_stage.thrust_vacuum.kN} kN - ${rocket.first_stage.thrust_vacuum.lbf} lbf </p>
                    <p><strong>Reusable:</strong> ${rocket.first_stage.reusable}</p>
                    <p><strong>Engines:</strong> ${rocket.first_stage.engines}</p>
                    <p><strong>Fuel amount tons:</strong> ${rocket.first_stage.fuel_amount_tons}</p>
                    <p><strong>Burn time sec:</strong> ${rocket.first_stage.burn_time_sec}</p>
                </div>
            //------------------SEGUNDO ESCENARIO---------
                <div class="segundoEscenario">
                    <p><strong>Second stage:</strong></p>
                    <p><strong>Thrust:</strong> ${rocket.second_stage.thrust.kN} kN - ${rocket.second_stage.thrust.lbf} lbf </p>
                    <p><strong>Payloads:</strong></p>
                    <p><strong>Composite fairing:</strong></p>
                    <p><strong>Height:</strong> ${rocket.second_stage.payloads.composite_fairing.height.meters} meters - ${rocket.second_stage.payloads.composite_fairing.height.feet} feet</p>
                    <p><strong>Diameter:</strong> ${rocket.second_stage.payloads.composite_fairing.diameter.meters} meters - ${rocket.second_stage.payloads.composite_fairing.diameter.feet} feet</p>
                    <p><strong>Option 1:</strong> ${rocket.second_stage.payloads.option_1}</p>
                    <p><strong>Reusable:</strong> ${rocket.second_stage.reusable}</p>
                    <p><strong>Engines:</strong> ${rocket.second_stage.engines}</p>
                    <p><strong>Fuel amount tons:</strong> ${rocket.second_stage.fuel_amount_tons}</p>
                    <p><strong>Burn time sec:</strong> ${rocket.second_stage.burn_time_sec}</p>
                </div>
            //-----------------------ENGINES-----------------
                <div class="engines">
                    <p><strong>Engines:</strong></p>
                    <p><strong>Isp:</strong></p>
                    <p><strong>Sea level:</strong> ${rocket.engines.isp.sea_level}</p>
                    <p><strong>Vacuum:</strong> ${rocket.engines.isp.vacuum}</p>
                    <p><strong>Thrust sea level:</strong> ${rocket.engines.thrust_sea_level.kN} kN - ${rocket.engines.thrust_sea_level.lbf} lbf</p>
                    <p><strong>Thrust vacuum:</strong> ${rocket.engines.thrust_vacuum.kN} kN - ${rocket.engines.thrust_vacuum.lbf} lbf</p>
                    <p><strong>Number:</strong> ${rocket.engines.number}</p>
                    <p><strong>Type:</strong> ${rocket.engines.type}</p>
                    <p><strong>Version:</strong> ${rocket.engines.version}</p>
                    <p><strong>Layout:</strong> ${rocket.engines.layout}</p>
                    <p><strong>Engine loss max:</strong> ${rocket.engines.engine_loss_max}</p>
                    <p><strong>Propellant 1:</strong> ${rocket.engines.propellant_1}</p>
                    <p><strong>Propellant 2:</strong> ${rocket.engines.propellant_2}</p>
                    <p><strong>Thrust to weight:</strong> ${rocket.engines.thrust_to_weight}</p>
                </div>
            //---------------------LANDING LEGS-------------------
                <div class="landingLegs">
                    <p><strong>Landing legs:</strong></p>
                    <p><strong>Number:</strong> ${rocket.landing_legs.number}</p>
                    <p><strong>Material:</strong> ${rocket.landing_legs.material}</p>
                </div>
                `;
                //---------------------PAYLOAD WEIGHTS-------------------
                payload = rocket.payload_weights;
                payload.forEach(element => {
                    document.getElementById("infoRockets").innerHTML += `
                    <div class="payloadWeights">
                        <p><strong>Payload weights:</strong></p>
                        <p><strong>ID:</strong> ${element.id}</p>
                        <p><strong>Name:</strong> ${element.name}</p>
                        <p><strong>Kg:</strong> ${element.kg}</p>
                        <p><strong>Lb:</strong> ${element.lb}</p>
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
        this.innerHTML =`<button id="botonRocket" onclick="displayRocketInfo(0)">1</button>
        <button id="botonRocket" onclick="displayRocketInfo(1)">2</button>
        <button id="botonRocket" onclick="displayRocketInfo(2)">3</button>
        <button id="botonRocket" onclick="displayRocketInfo(3)">4</button>`;
    }    
}
customElements.define('botones-rockets',rocket4)
