const requestURL = "https://janjeyrald.github.io/FinalProject/JSON/city.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

.then(function (jsonObject) {

const city = jsonObject['city'];
    

for (let i=0; i < city.length; i++) {
  
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let des = document.createElement('p');
    let image = document.createElement('img');
    
    h2.textContent = city[i].name;
    des.textContent = city[i].description;    
    image.setAttribute('src', `images/${city[i].photo}`);
    image.setAttribute('class', 'townImages');
    image.setAttribute('alt', city[i].name+ "("+city[i].description + ")");
    h2.setAttribute('class', 'headingTwo');
    card.setAttribute('class', 'cityImgSec' );
    
        card.appendChild(h2);
        card.appendChild(description);
        card.appendChild(image);
      
     document.querySelector('div.cityImg').appendChild(card);
}
});