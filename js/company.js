const companyUrl = 'https://api.spacexdata.com/v4/company';

fetch(companyUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let companyInfo = document.getElementById("name");
        companyInfo.innerHTML =`
        <h2 class="name">${data.name}</h2>
        `;
        document.getElementById("info1").innerHTML=`
        <div>
            <span><img class="f1" src="/storage/f2.png"> Founder:</span>
            <p>${data.founder}</p>
        </div>
        <div>
            <span><img class="f1" src="/storage/f1.png"> Founded:</span>
            <p>${data.founded}</p>
        </div>
        <div>
            <span><img class="f1" src="/storage/f1.png"> Employees:</span>
            <p>${data.employees}</p>
        </div>
        <div>
            <span><img class="f1" src="/storage/f1.png"> Vehicles:</span>
            <p>${data.vehicles}</p>
        </div>
        <div>
            <span><img class="f1" src="/storage/f1.png"> Launch sites:</span>
            <p>${data.launch_sites}</p>
        </div>
        <div>
            <span><img class="f1" src="/storage/f1.png"> Test sites:</span>
            <p>${data.test_sites}</p>
        </div>
        <div>
            <span><img class="f1" src="/storage/f3.png"> CEO:</span>
            <p>${data.ceo}</p>
        </div>
        <div>
            <span><img class="f1" src="/storage/f1.png"> CTO:</span>
            <p>${data.cto}</p>
        </div>
        <div>
            <span><img class="f1" src="/storage/f1.png"> COO:</span>
            <p>${data.coo}</p>
        </div>
        <div>
            <span><img class="f1" src="/storage/f2.png"> CTO Propulsion:</span>
            <p>${data.cto_propulsion}</p>
        </div>
        <div>
            <span><img class="f1" src="/storage/f1.png"> Valuation:</span>
            <p>${data.valuation}</p>
        </div>
        
        `;
        document.getElementById("info2").innerHTML=`
        <div>
            <span><img class="f1" src="/storage/f1.png"> Summary:</span>
            <p>${data.summary}</p>
        </div>
        <div>
            <span><img class="f1" src="/storage/f2.png"> ID:</span>
            <p>${data.id}</p>
        </div>
        <div>
            <span><img class="f1" src="/storage/f1.png"> Address:</span>
            <p>${data.headquarters.address}</p>
        </div>
        <div>
            <span><img class="f1" src="/storage/f1.png"> City:</span>
            <p> ${data.headquarters.city}</p>
        </div>
        <div>
            <span><img class="f1" src="/storage/f3.png"> State:</span>
            <p>${data.headquarters.state}</p>
        </div>
        `;
        document.getElementById("redes").innerHTML=`
        <a href="${data.links.flickr}"><img class="ph" src="/storage/images/photos.png"></a><br>
        <a href="${data.links.elon_twitter}"><img class="tw" src="/storage/images/twitter.png"></a><br>
        `;
        document.getElementById("frame").innerHTML=`
            <iframe class="web" src="${data.links.website}" frameborder="0"></iframe> 
        `;
    })
    .catch((error) => console.log(error));

    