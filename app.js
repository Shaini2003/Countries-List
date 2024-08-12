let tblCountries = document.getElementById("tblCountries");
let tableBody = `<thead class="table-light">
                    <tr>
                       <th class="text-primary">Name</th>
                       <th class="text-primary">Flag</th>
                    </tr>
                </thead>`;

fetch(" https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then(data => {

        data.forEach(element => {
            tableBody += `<tr>
                              <td><h1>${element.name.common}</h1><br>

                              Official Name : ${element.name.official}<br>
                              Capital : ${element.capital}
                              <p>Region : ${element.region} </p>
                              Population : ${element.population}
                              <p>Area : ${element.area} </p>
                              <p>Time Zone : ${element.timezones} </p>
                              <a class="btn btn-primary" href="${element.maps.googleMaps}">Go To Map </a>

                              </td>
                              <td><img src="${element.flags.png}"alt=""></td>
                         </tr>`

        });
        tblCountries.innerHTML = tableBody;
    })

function searchCountry() {
    let userInput = document.getElementById("txtInput").value;


    let flagImg = document.getElementById("flagImg");
    let name = document.getElementById("name");
    let officialName = document.getElementById('officialName');
    let capital = document.getElementById("capital");
    let region = document.getElementById("region");
    let population = document.getElementById("population");
    let area = document.getElementById("area");
    let timezones = document.getElementById("timezones");
    

    fetch( `https://restcountries.com/v3.1/name/${userInput}`)
        .then(res => res.json())
        .then(data => {
            data.forEach(obj => {
                flagImg.src = obj.flags.png;
                name.innerText = obj.name.common;
                officialName.innerText = obj.name.official;
                capital.innerText = obj.capital;
                region.innerText = obj.region;
                population.innerText = obj.population;
                area.innerText = obj.area;
                timezones.innerText = obj.timezones;
                

            })
        })

}