// API
const countApi = `https://restcountries.com/v2/all`;

const filterApi = `
https://restcountries.com/v2/continent/{region}`;

// Toggle Functionality
const toggleIcon = document.querySelector(".toggle-box i");
const toggleText = document.querySelector(".toggle_text");
const header = document.querySelector(".header")
// Make individual Countrys

const countryContainer = document.querySelector(".country__container")
toggleIcon.onclick = toggleTheme;

function toggleTheme() {
    if (toggleIcon.classList.contains("fa-sun")) {
        toggleIcon.classList.remove("fa-sun");
        toggleIcon.classList.add("fa-moon");
        toggleText.innerText = "Light Mode";
        document.body.style.background = "hsl(0, 0%, 98%)";
        document.body.style.color = "hsl(200, 15%, 8%)";
        document.querySelector("input").style.background = "hsl(0, 0%, 98%)";
         document.querySelector("select").style.background = "hsl(0, 0%, 98%)"

    }
    else if (toggleIcon.classList.contains("fa-moon")) {
        toggleIcon.classList.remove("fa-moon");
        toggleIcon.classList.add("fa-sun");
        toggleText.innerText = "Dark Mode";
        document.body.style.background = "hsl(207, 26%, 17%)";
         document.body.style.color = "hsl(0, 0%, 98%)"
        // header.style.color = "hsl(0,0,100%)"
        document.querySelector("input").style.background = "hsl(0, 0%, 52%)";
         document.querySelector("select").style.background = "hsl(0, 0%, 52%)"
    }
}



async function fetchCountry(url) {
    const respData = await fetch(url)
    const countryData = await respData.json();
    setCountries(countryData)
}
fetchCountry(countApi);
const textInput = document.getElementById("text-input");
const searchApi = `https://restcountries.com/v2/name/${textInput.value}`;



function setCountries(countryData) {
    let countries = countryData.map(countryItem => {
        // console.log(countryItem.flag);
        return `
            <article class="single_country">
              <div class="single_country_info>
              <div class="country__flag>
                <img
                    class = "flag"
                    src = "${countryItem.flag}"
                    alt = "${countryItem.name} flag"
                />
                </div>
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

// // SEARCH COUNTRIES
// const search = function () {
//     fetch(searchApi).then(data => data.json()).then(data => console.log(data));
// };
// textInput.addEventListener("input",search)

// console.log(search)


const allCountries = document.querySelectorAll(".single_country");

allCountries.forEach( (country) => (
     console.log(country)
    )
)



fetchCountry()