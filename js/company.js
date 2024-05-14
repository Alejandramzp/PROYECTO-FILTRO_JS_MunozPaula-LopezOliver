const companyUrl = 'https://api.spacexdata.com/v4/company';

fetch(companyUrl)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        let companyInfo = document.getElementById("infoCompany");
        companyInfo.innerHTML =`
        <h2>${data.name}</h2>
        <p class=""><strong>Founder:</strong> ${data.founder}</p>
        <p class=""><strong>Founded:</strong> ${data.founded}</p>
        <p class=""><strong>Employees:</strong> ${data.employees}</p>
        <p class=""><strong>Vehicles:</strong> ${data.vehicles}</p>
        <p class=""><strong>Launch sites:</strong> ${data.launch_sites}</p>
        <p class=""><strong>Test sites:</strong> ${data.test_sites}</p>
        <p class=""><strong>CEO:</strong> ${data.ceo}</p>
        <p class=""><strong>CTO:</strong> ${data.cto}</p>
        <p class=""><strong>COO:</strong> ${data.coo}</p>
        <p class=""><strong>CTO Propulsion:</strong> ${data.cto_propulsion}</p>
        <p class=""><strong>Valuation:</strong> ${data.valuation}</p>
        <p class=""><strong>Summary:</strong> ${data.summary}</p>
        <p class=""><strong>ID:</strong> ${data.id}</p>
        <p class=""><strong>Address:</strong> ${data.headquarters.address}</p>
        <p class=""><strong>City:</strong> ${data.headquarters.city}
        <p class=""><strong>State:</strong> ${data.headquarters.state}
        <br><a href="${data.links.website}">Website</a><br>
        <a href="${data.links.flickr}">Flickr</a><br>
        <a href="${data.links.twitter}">Twitter</a><br>
        <a href="${data.links.elon_twitter}">Elon Twitter</a><br>
        `;
            

    })
    .catch((error) => console.log(error));

    