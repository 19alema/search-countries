// API
const countApi = `https://restcountries.com/v2/all`;

const filterApi = `
https://restcountries.com/v2/continent/{region}`;

// Toggle Functionality
const toggleIcon = document.querySelector(".toggle-box i");
const toggleText = document.querySelector(".toggle_text")
toggleIcon.onclick = toggleTheme;

function toggleTheme() {
    toggleText.innerText = "Light Mode";
}

fetchCountry(countApi);

async function fetchCountry(url) {
    const respData = await fetch(url)
    const countryData = await respData.json();
    setCountries(countryData)
}
const textInput = document.getElementById("text-input");
const searchApi = `https://restcountries.com/v2/name/${textInput.value}`;


// Make individual Countrys

const countryContainer = document.querySelector(".country__container")

function setCountries(country) {
    let countries = country.map(countryItem => {
        // console.log(countryItem.flag);
        return `
            <article class="single_country">
              <div class="single_country_info>
               <img
                class = "flag"
               src = ${countryItem.flag}
               alt = "${countryItem.name.common} flag" />
               <div class="content_info">
                    <h2 class="county_name">${countryItem.name}</h3>
                    <h4 class="population">Population: ${countryItem.population}</h4>
                    <h4 class = "region"> Region: ${countryItem.region}</h4>
                    <h4 class = "city">City: ${countryItem.capital} </h4>
               </div>
              </div>
            </article>`

    })


    countries = countries.join("");
    countryContainer.innerHTML = countries;
}

// SEARCH COUNTRIES
const search = function () {
    fetchCountry().then((countries) => {
        let matchedCountries = countries.filter((country) =>
            country.name.common
            .toLowerCase()
            .includes(textInput.value.toLowerCase())
        );
       setCountries(matchedCountries);
    });
};
textInput.addEventListener("input",search)

setCountries()



fetchCountry()