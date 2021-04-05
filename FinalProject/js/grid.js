// set the JSON source URL
const requestURL = "https://janjeyrald.github.io/FinalProject/JSON/businesses.json"
// use fetch to obtain info from JSON URL
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // temporary checking for valid response and data parsing
        const business = jsonObject['business'];
    
        //Apply loop in the array
        for (let i = 0; i < business.length; i++){

        // Declare value for each variable needed
     
            let card = document.createElement('section');
            let h2 = document.createElement('h2');
            let cInfo = document.createElement('p');
            let page = document.createElement('p');
            let bP = document.createElement('img');
            let visit = document.createElement('a');
        //Set output string, style and attribute of each cards
            card.setAttribute('class', "view_item")
            h2.textContent = business[i].name;
            h2.setAttribute('class', "title");
            cInfo.textContent = "Contact Info:" +  " " + business[i].contactInformation;  
            page.textContent = "Facebook Page:" + " " + business[i].fbPage;
            bP.setAttribute('src', `images/${business[i].photo}`);
            bP.setAttribute("alt", business[i].name + " " + business[i].lastname + " " + "-" + " " + business[i].order);
            bP.style.boxShadow = "2px 2px 2px #F3F3F4";
            bP.style.width="200px";
            visit.textContent = "Visit";
            visit.setAttribute('target', '_blank')
            visit.setAttribute('class', 'btn')
            visit.setAttribute('href', business[i].fbPage)
        //Append text information and fill everything from the loop
            card.append(h2);
            card.append(bP);
            card.appendChild(cInfo);
            card.appendChild(page);
            card.appendChild(visit);
            
            document.querySelector('div.gridDirectory').appendChild(card);
        }
    });

