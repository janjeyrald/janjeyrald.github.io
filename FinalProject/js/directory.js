// set the JSON source URL
const requestURL =
  "https://janjeyrald.github.io/FinalProject/JSON/businesses.json";
// use fetch to obtain info from JSON URL
fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    // temporary checking for valid response and data parsing
    const business = jsonObject["business"];

    //Apply loop in the array
    for (let i = 0; i < business.length; i++) {
      // Declare value for each variable needed
      let listView = document.createElement("div");
      let gridView = document.createElement("div");
      let vLeft = document.createElement("div");
      let vRight = document.createElement("div");
      let vLeftTwo = document.createElement("div");
      let vRightTwo = document.createElement("div");
      let h2 = document.createElement("h2");
      let cInfo = document.createElement("p");
      let page = document.createElement("p");
      let bP = document.createElement("img");
      let visit = document.createElement("a");
      let h2Two = document.createElement("h2");
      let cInfoTwo = document.createElement("p");
      let pageTwo = document.createElement("p");
      let bPTwo = document.createElement("img");
      let visitTwo = document.createElement("a");
      //Set output string, style and attribute of each cards
      listView.setAttribute("class", "view_item");
      
      vLeft.setAttribute("class", "vi_left");
      vRight.setAttribute("class", "vi_right");
      h2.textContent = business[i].name;
      h2.setAttribute("class", "title");
      cInfo.textContent =
        "Contact Info:" + " " + business[i].contactInformation;
      page.textContent = "Facebook Page:" + " " + business[i].fbPage;
      bP.setAttribute("src", `images/${business[i].photo}`);
      bP.setAttribute("class", `bPhoto`);
      bP.setAttribute("alt", business[i].name + " " + business[i].name);
      visit.textContent = "Visit";
      visit.setAttribute("target", "_blank");
      visit.setAttribute("class", "btn");
      visit.setAttribute("href", business[i].fbPage);

     
      //Append text information and fill everything from the loop

      vLeft.append(bP);
      document.querySelector("div.list-view").appendChild(vLeft);
      vRight.append(h2);
      vRight.appendChild(cInfo);
      vRight.appendChild(page);
      vRight.appendChild(visit);
      document.querySelector("div.list-view").appendChild(vRight);
      listView.append(vLeft);
      listView.append(vRight);
      document.querySelector("div.list-view").appendChild(listView);

        //Set output string, style and attribute of each cards
      gridView.setAttribute("class", "view_item");
      vLeftTwo.setAttribute("class", "vi_left");
      vRightTwo.setAttribute("class", "vi_right");
      h2Two.textContent = business[i].name;
      h2Two.setAttribute("class", "title");
      cInfoTwo.textContent =
        "Contact Info:" + " " + business[i].contactInformation;
      pageTwo.textContent = "Facebook Page:" + " " + business[i].fbPage;
      bPTwo.setAttribute("src", `images/${business[i].photo}`);
      bPTwo.setAttribute("class", `bPhoto`);
      bPTwo.setAttribute("alt", business[i].name + " " + business[i].name);
      visitTwo.textContent = "Visit";
      visitTwo.setAttribute("target", "_blank");
      visitTwo.setAttribute("class", "btn");
      visitTwo.setAttribute("href", business[i].fbPage);

      //Append text information and fill everything from the loop
      vLeftTwo.append(bPTwo);
      document.querySelector("div.grid-view").appendChild(vLeftTwo);
      vRightTwo.append(h2Two);
      vRightTwo.appendChild(cInfoTwo);
      vRightTwo.appendChild(pageTwo);
      vRightTwo.appendChild(visitTwo);
      document.querySelector("div.grid-view").appendChild(vRightTwo);
      gridView.append(vLeftTwo);
      gridView.append(vRightTwo);
      document.querySelector("div.grid-view").appendChild(gridView);
      
    }
  });
