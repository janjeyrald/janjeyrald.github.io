// Declare the URL of JSON file

const townURL = "https://byui-cit230.github.io/weather/data/towndata.json"

// Get the data from the JSON
fetch(townURL)
.then(function (response) {
    return response.json();
})

.then(function (jsonObject) {

const towns = jsonObject['towns'];

// Select only Preston, Fishhaven and Soda Springs and ignore the other towns
const result = towns.filter(towns => towns.name == 'Preston' || towns.name == 'Fish Haven' || towns.name == 'Soda Springs');

// console.log(result);

for(let i=0; i<result.length; i++){

    if (result[i].name === "Preston" && document.querySelector('div.contentbox1')){
       
            let card = document.createElement('section');
            const h2 = document.createElement('h2');
            let eventOne = document.createElement('p');
            let eventTwo = document.createElement('p');
            let eventThree = document.createElement('p');
            let eventFour = document.createElement('p');
            let div = document.createElement('div')
   
// Create and concatenate strings and set attributes.
    
    h2.textContent = "Town Events";
    eventOne.textContent = result[i].events[0];
    eventTwo.textContent = result[i].events[1];
    eventThree.textContent = result[i].events[2];
    eventFour.textContent = result[i].events[3];
    eventOne.setAttribute = ('class', 'eventSched');
    eventTwo.setAttribute = ('class', 'eventSched');
    eventThree.setAttribute = ('class', 'eventSched');
    eventFour.setAttribute = ('class', 'eventSched');
    div.setAttribute('class', 'textDetails');


    
    card.appendChild(div);
    div.appendChild(h2);
    div.appendChild(eventOne);
    div.appendChild(eventTwo);
    div.appendChild(eventThree);
    div.appendChild(eventFour);
        
    document.querySelector('div.contentbox1').appendChild(card);
    break;
        
}
else if(result[i].name === "Soda Springs" && document.querySelector('div.contentbox2')){

    let card = document.createElement('section');
    const h2 = document.createElement('h2');
    let eventOne = document.createElement('p');
    let eventTwo = document.createElement('p');
    let eventThree = document.createElement('p');
    let eventFour = document.createElement('p');
    let div = document.createElement('div')

// Create and concatenate strings and set attributes.

h2.textContent = "Town Events";
eventOne.textContent = result[i].events[0];
eventTwo.textContent = result[i].events[1];
eventThree.textContent = result[i].events[2];
eventFour.textContent = result[i].events[3];
eventOne.setAttribute = ('class', 'eventSched');
eventTwo.setAttribute = ('class', 'eventSched');
eventThree.setAttribute = ('class', 'eventSched');
eventFour.setAttribute = ('class', 'eventSched');
div.setAttribute('class', 'textDetails');



card.appendChild(div);
div.appendChild(h2);
div.appendChild(eventOne);
div.appendChild(eventTwo);
div.appendChild(eventThree);
div.appendChild(eventFour);

document.querySelector('div.contentbox2').appendChild(card);
break;
}
else if(result[i].name === "Fish Haven" && document.querySelector('div.contentbox3')){

    let card = document.createElement('section');
    const h2 = document.createElement('h2');
    let eventOne = document.createElement('p');
    let eventTwo = document.createElement('p');
    let eventThree = document.createElement('p');
    let eventFour = document.createElement('p');
    let div = document.createElement('div')

// Create and concatenate strings and set attributes.

h2.textContent = "Town Events";
eventOne.textContent = result[i].events[0];
eventTwo.textContent = result[i].events[1];
eventThree.textContent = result[i].events[2];
eventFour.textContent = result[i].events[3];
eventOne.setAttribute = ('class', 'eventSched');
eventTwo.setAttribute = ('class', 'eventSched');
eventThree.setAttribute = ('class', 'eventSched');
eventFour.setAttribute = ('class', 'eventSched');
div.setAttribute('class', 'textDetails');



card.appendChild(div);
div.appendChild(h2);
div.appendChild(eventOne);
div.appendChild(eventTwo);
div.appendChild(eventThree);
div.appendChild(eventFour);

document.querySelector('div.contentbox3').appendChild(card);
break;
}
}
})