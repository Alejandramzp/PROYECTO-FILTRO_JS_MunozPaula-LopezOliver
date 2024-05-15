const historyUrl = 'https://api.spacexdata.com/v4/history';

fetch(historyUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        data.forEach(historyData => {
            let historyInfo = document.getElementById("infoHistory");
            historyInfo.innerHTML =``;
            displayHistoryInfo(0);
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
                    <h2 class="htitle">${history.title}</h2><br><br><br><br><br>
                    <p class="hid"><strong>ID:</strong><br><span style="color: grey;">${history.id}</p><br><br>
                    <p class="hd1"><strong>Event date utc:</strong><br><span style="color: grey;">${history.event_date_utc}</p><br><br>
                    <p class="hd2"><strong>Event date unix:</strong><br><span style="color: grey;">${history.event_date_unix}</p><br><br>
                    <p class="hdetails"><strong>Details:</strong><br><span style="color: grey;">${history.details}</p><br><br>
                </div>
                <iframe class="articulo" src="${history.links.article}" frameborder="0"></iframe>
                `;
            }
        })
        .catch((error) => console.log(error));
}
//-----------------------WebComponents--------------------
class history15 extends HTMLElement{
    constructor(){
        super();
        this.innerHTML =`
        <button class="btn1" id="botonHistory" onclick="displayHistoryInfo(0)">1</button>
        <button class="btn2" id="botonHistory" onclick="displayHistoryInfo(1)">2</button>
        <button class="btn3" id="botonHistory" onclick="displayHistoryInfo(2)">3</button>
        <button class="btn4" id="botonHistory" onclick="displayHistoryInfo(3)">4</button>
        <button class="btn5" id="botonHistory" onclick="displayHistoryInfo(4)">5</button>
        <button class="btn6" id="botonHistory" onclick="displayHistoryInfo(5)">6</button>
        <button class="btn7" id="botonHistory" onclick="displayHistoryInfo(6)">7</button>
        <button class="btn8" id="botonHistory" onclick="displayHistoryInfo(7)">8</button>
        <button class="btn9" id="botonHistory" onclick="displayHistoryInfo(8)">9</button>
        <button class="btn10" id="botonHistory" onclick="displayHistoryInfo(9)">10</button>
        <button class="btn11" id="botonHistory" onclick="displayHistoryInfo(10)">11</button>
        <button class="btn12" id="botonHistory" onclick="displayHistoryInfo(11)">12</button>
        <button class="btn13" id="botonHistory" onclick="displayHistoryInfo(12)">13</button>
        <button class="btn14" id="botonHistory" onclick="displayHistoryInfo(13)">14</button>
        <button class="btn15" id="botonHistory" onclick="displayHistoryInfo(14)">15</button>
        `;
    }    
}
customElements.define('botones-history',history15)
