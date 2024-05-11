const rocketsUrl = 'https://api.spacexdata.com/v4/rockets';

fetch(rocketsUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach(rocketData => {
            let rocketsInfo = document.getElementById("info");
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
                document.getElementById("info").innerHTML = `
                    <h1>${rocket.name}</h1>
                    <p><strong>ID:</strong> ${rocket.id}</p>
                    <p><strong>Type:</strong> ${rocket.type}</p>
                    <p><strong>Active:</strong> ${rocket.active}</p>
                    <p><strong>Stages:</strong> ${rocket.stages}</p>
                    <p><strong>Boosters:</strong> ${rocket.boosters}</p>
                    <p><strong>Cost per launch:</strong> ${rocket.cost_per_launch}</p>
                    <p><strong>Success rate pct:</strong> ${rocket.success_rate_pct}</p>
                    <p><strong>First flight:</strong> ${rocket.first_flight}</p>
                    <p><strong>Country:</strong> ${rocket.country}</p>
                    <p><strong>Company:</strong> ${rocket.company}</p>
                    <p><strong>Description:</strong> ${rocket.description}</p>
                    <a href="${rocket.wikipedia}">wikipedia</a><br>

                //----------------------MEDIDAS------------------
                    <p><strong>Height:</strong> ${rocket.height.meters} meters - ${rocket.height.feet} feet</p>
                    <p><strong>Diameter:</strong> ${rocket.diameter.meters} meters - ${rocket.diameter.feet} feet</p>
                    <p><strong>Mass:</strong> ${rocket.mass.kg} kg - ${rocket.mass.lb} lb </p>

                //------------------PRIMER ESCENARIO---------
                    <p><strong>First stage:</strong></p>
                    <p><strong>Thrust sea level:</strong> ${rocket.first_stage.thrust_sea_level.kN} kN - ${rocket.first_stage.thrust_sea_level.lbf} lbf </p>
                    <p><strong>Thrust vacuum:</strong> ${rocket.first_stage.thrust_vacuum.kN} kN - ${rocket.first_stage.thrust_vacuum.lbf} lbf </p>
                    <p><strong>Reusable:</strong> ${rocket.reusable}</p>
                    <p><strong>Engines:</strong> ${rocket.engines}</p>
                    <p><strong>Fuel amount tons:</strong> ${rocket.fuel_amount_tons}</p>
                    <p><strong>Burn time sec:</strong> ${rocket.burn_time_sec}</p>

                //------------------SEGUNDO ESCENARIO---------
                <p><strong>Second stage:</strong></p>
                <p><strong>Thrust:</strong> ${rocket.second_stage.thrust.kN} kN - ${rocket.second_stage.thrust.lbf} lbf </p>
                <p><strong>Payloads:</strong></p>
                <p><strong>Composite fairing:</strong></p>
                <p><strong>Height:</strong> ${rocket.second_stage.payloads.composite_fairing.height.meters} meters - ${rocket.second_stage.payloads.composite_fairing.height.feet} feet</p>
                `;
            }
        })
        .catch((error) => console.log(error));
}
//-----------------------WebComponents--------------------
class rocket4 extends HTMLElement{
    constructor(){
        super();
        this.innerHTML =`<button id="botonRocket" onclick="displayRocketInfo(2)">1</button>
        <button id="botonRocket" onclick="displayRocketInfo(1)">2</button>
        <button id="botonRocket" onclick="displayRocketInfo(2)">3</button>
        <button id="botonRocket" onclick="displayRocketInfo(3)">4</button>`;
    }    
}
customElements.define('botones-rockets',rocket4)
