// set the JSON source URL
const requestURL = "https://byui-cit230.github.io/canvas-referenced/latter-day-prophets.json";
// use fetch to obtain info from JSON URL
fetch(requestURL)
    .then(function (response){
        return response.json();
    })
    .then(function (jsonObject){
    // temporary checking for valid response and data parsing
        const prophets = jsonObject['prophets'];
    
        //Apply loop in the array
        for (let i = 0; i < prophets.length; i++){

        // Declare value for each variable needed
     
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let bDay = document.createElement('p');
            let bPlace = document.createElement('p');
            let prophetPhoto = document.createElement('img'); 
        //Set output string, style and attribute of each cards
            h2.textContent = prophets[i].name + " " + prophets[i].lastname;
            bDay.textContent = "Date of Birth:" +  " " + prophets[i].birthdate;  
            bPlace.textContent = "Place of Birth:" + " " + prophets[i].birthplace;
            prophetPhoto.setAttribute("src", prophets[i].imageurl);
            prophetPhoto.setAttribute("alt", prophets[i].name + " " + prophets[i].lastname + " " + "-" + " " + prophets[i].order);
            prophetPhoto.style.boxShadow = "0 0 20px #fff";
            prophetPhoto.style.width="200px;"
        //Append text information and fill everything from the loop
            card.append(h2);
            card.appendChild(bDay);
            card.appendChild(bPlace);
            cards.append(prophetPhoto);

            document.querySelector('div.cards').appendChild(card);
        }
    });