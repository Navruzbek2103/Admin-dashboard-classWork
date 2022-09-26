let elListTickets = document.querySelector(".tickets-list");
let fragmentItem = document.createDocumentFragment();
let searchIcon = document.querySelector(".tickets-info-search-img");
let searchingSection = document.querySelector(".tickets-info-search");
let newsSection = document.querySelector(".tickets-info-news-img");
let elInput = document.querySelector(".tickets-info-search-input");
let elSpan = document.querySelector(".tickets-info-search-span");


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
  elInput.classList.toggle("tickets-info-search-input-toggle");

  elInput.addEventListener("input", () =>{
    let valueInput = elInput.value.trim().toLowerCase()

    function renderSearchItem(searching){
      let searchedArray = [];
      elListTickets.innerHTML = "";
      searching.forEach(users => {
        if(users.name.toLowerCase().includes(valueInput)){
          searchedArray.push(users)
        }
      });
      renderItem(searchedArray);
    }
    renderSearchItem(data)
  });
});
newsSection.addEventListener("click", () =>{
  elSpan.classList.toggle("tickets-info-search-span-toggle");
})

// sorting

let elSelectSorting = document.querySelector("#sort-select");
elSelectSorting.addEventListener("change", (event) =>{

  function sortingName (users){
    if(event.target.value === 'a-z'){
      elListTickets.innerHTML = "";
      let sorted = users.sort((a, b) => a.name.localeCompare(b.name));
      renderItem(sorted)
    }
    else if(event.target.value === 'z-a'){
      elListTickets.innerHTML = "";
      let sorted = users.sort((a, b) => b.name.localeCompare(a.name));
      renderItem(sorted)
    }
  }
  sortingName(data)
})

let elSelectFilter = document.querySelector("#filter-select");

elSelectFilter.addEventListener("change", (event) =>{

  function filteringPriority(users){
    if(event.target.value === "high"){
      elListTickets.innerHTML = "";
      let filtered = users.filter((priority) => priority.priority === "high")
      renderItem(filtered);
    }
    else if(event.target.value === "normal"){
      elListTickets.innerHTML = "";
      let filtered = users.filter((priority) => priority.priority === "normal")
      renderItem(filtered);
    }
    else if(event.target.value === "low"){
      elListTickets.innerHTML = "";
      let filtered = users.filter((priority) => priority.priority === "low")
      renderItem(filtered);
    }

  }
  filteringPriority(data)
})


// let filter = ["salom", "qale", "ishlar", "yaxshimi", "qale", "salom", "ishlar", "qale", "yaxshimi"]
// let filtered = filter.filter((element) => element !== "salom");
// console.log(filtered);