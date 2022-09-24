let elListTickets = document.querySelector(".tickets-list");
let fragmentItem = document.createDocumentFragment();
let searchIcon = document.querySelector(".tickets-info-search-img");
let searchingSection = document.querySelector(".tickets-info-search");

function renderItem(users){
  users.forEach(element => {
    let newItemtickets = document.createElement("li");
    newItemtickets.setAttribute("class", "tickets-item d-flex align-items-center");
    newItemtickets.innerHTML = `
      <div class="tickets-item-details d-flex align-items-center">
        <img src="${element.ava}" alt="${element.name}" class="tickets-item-details-img">
        <div class="tickets-item-details-desc">
          <h4 class="tickets-item-details-desc-title">${element.company}</h4>
          <p class="tickets-item-details-desc-text">${element.date_of_onliine}</p>
        </div>
      </div>
      <div class="tickets-item-customerName">
        <h4 class="tickets-item-customerName-title">${element.name}</h4>
        <p class="tickets-item-customerName-text">${element.date_of_register}</p>
      </div>
      <div class="tickets-item-date">
        <h4 class="tickets-item-date-title">${element.date_of_register}</h4>
        <p class="tickets-item-date-text">${element.time}</p>
      </div>
      <div class="tickets-item-priority d-flex align-items-center justify-content-between">
        <button class="btn btn-priority">${element.priority}</button>
        <img src="./images/Vector.svg" alt="Vector icon img" class="tickets-item-priority-img">
      </div>
    `


    fragmentItem.appendChild(newItemtickets);
  });
  elListTickets.appendChild(fragmentItem);
}
renderItem(data);

searchIcon.addEventListener("click", () =>{
  let searchInput = document.createElement("input");
  searchInput.classList = "tickets-info-search-input";
  searchInput.placeholder = "Search users...";
  searchingSection.appendChild(searchInput);


  searchInput.addEventListener("input", () =>{
    let valueInput = searchInput.value.trim().toLowerCase()
    function renderSearchItem(searching){
      let searchedArray = [];
      elListTickets.innerHTML = "";
      searching.forEach(users => {
        if(users.name.toLowerCase().includes(valueInput)){
          searchedArray.push(users)
        }
      });
      renderItem(searchedArray)
    }
    renderSearchItem(data)
  })
})