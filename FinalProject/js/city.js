const requestURL = "https://janjeyrald.github.io/FinalProject/JSON/city.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

.then(function (jsonObject) {

const towns = jsonObject['towns'];
    

for (let i=0; i < towns.length; i++) {
  
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let motto = document.createElement('h3');
    let year = document.createElement('p');
    let population = document.createElement('p');
    let rain = document.createElement('p');
    let image = document.createElement('img');
    let textDiv = document.createElement('div')
    
    if ((towns[i].name == 'Preston')|| (towns[i].name == 'Fish Haven') || (towns[i].name == 'Soda Springs')) {
    
    h2.textContent = towns[i].name;
    motto.textContent = towns[i].motto;    
    year.textContent = "Year Founded:" + " " + towns[i].yearFounded;
    population.textContent = "Population:" + " " + towns[i].currentPopulation;
    rain.textContent = "Annual Rainfall:" + " " +  towns[i].averageRainfall;
    image.setAttribute('src', `images/${towns[i].photo}`);
    image.setAttribute('class', 'townImages');
    image.setAttribute('alt', towns[i].name+ "("+towns[i].motto + ")");
    h2.setAttribute('class', 'headingTwo');
    card.setAttribute('class', 'homepageSection' );
    textDiv.setAttribute('class', 'homepageInfo');

        card.appendChild(textDiv);
        textDiv.appendChild(h2);
        textDiv.appendChild(motto);
        textDiv.appendChild(year);
        textDiv.appendChild(population);
        textDiv.appendChild(rain);
        card.appendChild(image);}
      
     document.querySelector('div.idahoTowns').appendChild(card);
}
});