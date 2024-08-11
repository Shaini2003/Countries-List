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
            console.log(element.name.common);
        });
        tblCountries.innerHTML = tableBody;
    })