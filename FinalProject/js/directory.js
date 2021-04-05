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
        //Set output string, style and attribute of each cards
            h2.textContent = business[i].name;
            cInfo.textContent = "Contact Info:" +  " " + business[i].contactInformation;  
            page.textContent = "Place of Birth:" + " " + business[i].fbPage;
            image.setAttribute('src', `images/${business[i].photo}`);
            bPhoto.setAttribute("alt", business[i].name + " " + business[i].lastname + " " + "-" + " " + business[i].order);
            bPhoto.style.boxShadow = "2px 2px 2px #F3F3F4";
            bPhoto.style.width="200px";
        //Append text information and fill everything from the loop
            card.append(h2);
            card.appendChild(bInfo);
            card.appendChild(page);
            card.append(bP);

            document.querySelector('div.bDirectory').appendChild(card);
        }
    });