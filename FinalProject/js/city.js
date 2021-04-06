const requestURL = "https://janjeyrald.github.io/FinalProject/JSON/city.json";

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })

.then(function (jsonObject) {

const city = jsonObject['city'];
    

for (let i=0; i < city.length; i++) {
  
    let h2 = document.createElement('h2');
    let fig = document.createElement('figure');
    let figCap = document.createElement('figcaption');
    let pic = document.createElement('picture');
    let image = document.createElement('img');
    
    h2.textContent = city[i].name;
    h2.setAttribute('class', 'headingTwo');
    figCap.textContent = city[i].description;   
    image.setAttribute('src', `images/${city[i].placeholder}`); 
    image.setAttribute('data-src', `images/${city[i].photo}`);
    image.setAttribute('class', 'townImages');
    image.setAttribute('alt', city[i].name+ "("+city[i].photo + ")");
    
    

        pic.appendChild(image);
        document.querySelector('div.cityImg').appendChild(pic);
        fig.appendChild(h2);
        fig.appendChild(pic);
        fig.appendChild(figCap);
        
        document.querySelector('div.cityImg').appendChild(fig);
        
    
  
}
});