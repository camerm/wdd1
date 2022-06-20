const requestURL = 'json/data.json';
const cards = document.querySelector('.cards');

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const comp = jsonObject['companies'];
    comp.forEach(displayCompa);
})


  function displayCompa(company) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let phone = document.createElement('p');
    let address = document.createElement('p');
    let webpage = document.createElement('p');
    let portrait = document.createElement('img');
  
    // Change the textContent property of the h2 element to contain the prophet's full name
    h2.textContent =`${company.name}`;
    address.textContent =`${company.address}`;
    phone.textContent = `Phone: ${company.phone}`;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    portrait.setAttribute('src', company.imageurl);
    portrait.setAttribute('alt', 'Portait of ' + company.name);
    portrait.setAttribute('loading', 'lazy');
    webpage.innerHTML = `<a href="${company.webpage}">${company.website}</a>`;
  
    // Add/append the section(card) with the h2 element
    card.appendChild(h2);
    card.appendChild(phone);
    card.appendChild(address);
    card.appendChild(webpage);
    card.appendChild(portrait);

    console.log(card)
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('.cards').appendChild(card);
  }

 // -----------------------------------------------------------------------------------------------------.
  
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".cards");
 
 // The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.
 
gridbutton.addEventListener("click", () => {
     // example using arrow function
    display.classList.add("grid");
    display.classList.remove("list");
});
 
listbutton.addEventListener("click", showList); // example using defined function
 
function showList() {
    display.classList.add("list");
    display.classList.remove("grid");
}
