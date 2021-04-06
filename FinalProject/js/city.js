const requestURL = "https://janjeyrald.github.io/FinalProject/JSON/city.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

.then(function (jsonObject) {

const city = jsonObject['city'];
    

for (let i=0; i < city.length; i++) {
    
    let card = document.createElement('section');
    let p = document.createElement('p');
    let h2 = document.createElement('h2');
    let pic = document.createElement('picture');
    let image = document.createElement('img');
    
    card.setAttribute('class', 'citySec');
    h2.textContent = city[i].name;
    h2.setAttribute('class', 'headingTwo');
    p.textContent = city[i].description;   
    image.setAttribute('src', `images/${city[i].placeholder}`); 
    image.setAttribute('data-src', city[i].photo);
    image.setAttribute('alt', city[i].name);
    image.setAttribute('class', 'cityImages');
    
        pic.appendChild(image);
        document.querySelector('div.cityImg').appendChild(pic);
        card.appendChild(h2);
        card.appendChild(p);
        card.appendChild(pic);
        
        document.querySelector('div.cityImg').appendChild(card);
        
}
});