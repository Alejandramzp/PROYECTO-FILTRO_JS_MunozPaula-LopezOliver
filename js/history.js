const historyUrl = 'https://api.spacexdata.com/v4/history';

fetch(historyUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach(historyData => {
            let historyInfo = document.getElementById("infoHistory");
            historyInfo.innerHTML =``;
            //displayHistoryInfo(0);
        });
    })
    .catch((error) => console.log(error));
    
// Función para mostrar la info en el div "infoHistory"
function displayHistoryInfo(h) {
    fetch(historyUrl)
        .then(response => response.json())
        .then(data => {
            const history = data[h];
            if (history) {
                document.getElementById("infoHistory").innerHTML = `
                <div class="infoPrincipal">
                    <h2 class="">${history.title}</h2>
                    <p class=""><strong>ID:</strong> ${history.id}</p>
                    <p class=""><strong>Event date utc:</strong> ${history.event_date_utc}</p>
                    <p class=""><strong>Event date unix:</strong> ${history.event_date_unix}</p>
                    <p class=""><strong>Details:</strong> ${history.details}</p>
                    <a href="${history.links.article}">Article</a><br>
                </div>
                `;
            }
        })
        .catch((error) => console.log(error));
}
//-----------------------WebComponents--------------------
class history15 extends HTMLElement{
    constructor(){
        super();
        this.innerHTML =`<button id="botonHistory" onclick="displayHistoryInfo(0)">1</button>
        <button id="botonHistory" onclick="displayHistoryInfo(1)">2</button>
        <button id="botonHistory" onclick="displayHistoryInfo(2)">3</button>
        <button id="botonHistory" onclick="displayHistoryInfo(3)">4</button>
        <button id="botonHistory" onclick="displayHistoryInfo(4)">5</button>
        <button id="botonHistory" onclick="displayHistoryInfo(5)">6</button>
        <button id="botonHistory" onclick="displayHistoryInfo(6)">7</button>
        <button id="botonHistory" onclick="displayHistoryInfo(7)">8</button>
        <button id="botonHistory" onclick="displayHistoryInfo(8)">9</button>
        <button id="botonHistory" onclick="displayHistoryInfo(9)">10</button>
        <button id="botonHistory" onclick="displayHistoryInfo(10)">11</button>
        <button id="botonHistory" onclick="displayHistoryInfo(11)">12</button>
        <button id="botonHistory" onclick="displayHistoryInfo(12)">13</button>
        <button id="botonHistory" onclick="displayHistoryInfo(13)">14</button>
        <button id="botonHistory" onclick="displayHistoryInfo(14)">15</button>
        `;
    }    
}
customElements.define('botones-history',history15)
