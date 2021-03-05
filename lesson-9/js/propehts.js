// set the JSON source URL
const requestURL = 'https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json';
// use fetch to obtain a promise for
fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject){
        //console.table(jsonObject); // temporary checking for valid response and data parsing
        const prophets = jsonObject['prophets'];
        // select output location
        const cards = document.querySelector('.cards');
        //Apply loop in the array
        for (let i = 0; i < prophets.length; i++)
        prophets.forEach(prophets =>{
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let h2 = document.createElement('h2');
            let line1 = document.createElement('p');
            let line2 = document.createElement('p');
            let image = document.createElement('img');
            //use template literals
            h2.innerHTML = '${prophet.name} ${prophet.lastname}';
            
            card.append(h2);
            cards.append(card);

        });
    });