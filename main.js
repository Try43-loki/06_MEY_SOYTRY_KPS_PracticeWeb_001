// form
const form = document.querySelector("form");
const btn = document.querySelector("#btnSubmit");
const search = document.querySelector("#search");
const selection = document.querySelector("#selection");
const img = document.querySelector("#img");
const title = document.querySelector("#titleQuote");
const paragraph = document.querySelector("#paragraph");
const notification = document.querySelector("#notification");
let selectValue;
let isSelected = true;

// select option
selection.addEventListener("change", (e) => {
  e.preventDefault();
  selectValue = selection.value;
  switch (selectValue) {
    case "ID":
      clear();
      search.setAttribute("placeholder", "Enter ID");
      search.setAttribute("type", "number");
      search.removeAttribute("disabled");
      search.classList.remove("cursor-not-allowed");
      btn.classList.remove("cursor-not-allowed");
      btn.removeAttribute("disabled");

      isSelected = true;
      break;
    case "Title":
      clear();
      search.setAttribute("placeholder", "Enter Title");
      search.setAttribute("type", "text");
      search.removeAttribute("disabled");
      search.classList.remove("cursor-not-allowed");
      btn.classList.remove("cursor-not-allowed");
      isSelected = false;
      btn.removeAttribute("disabled");
      break;
    default:
      alert("Wrong choice");
  }
});

// form submit
form.addEventListener("submit", (e) => {
  e.preventDefault();
  // check value 
  let searchValue;
  if(isSelected) {
    searchValue = Number(search.value);
  } else {
    searchValue = search.value;
  }

  if (searchValue === 1 || searchValue == "Positive Thinkings") {
    
    img.classList.remove("hidden");
    title.innerHTML = "Positive Thinkings";
    paragraph.innerHTML = `Say something positive, and you'll see something positive. - Jim Thompson`;
    img.src = "img/positive.jpg";
    notification.innerHTML = "";

  } else if (searchValue === 2 || searchValue == "Keep doing") {
    
    img.classList.remove("hidden");
    img.src = "img/keeping.jpg";
    title.innerHTML = "keep doing";
    paragraph.innerHTML = `What's done is done. What's gone is gone. One of life's lessons is always moving on. It’s okay to look back to see how far you’ve come but keep moving forward.
                          ― Roy T. Bennett.`;
    notification.innerHTML = "";
  
  } else if (searchValue === 3 || searchValue == "Dream") {
  
    img.classList.remove("hidden");
    img.src = "img/dream.jpg";
    title.innerHTML = "Dream";
    paragraph.innerHTML = `A dream doesn't become reality through magic; it takes sweat, determination and hard work. - Colin Powell`;
    notification.innerHTML = "";

  } else {

    notification.innerHTML = "No result found";
    img.classList.add("hidden");
    title.innerHTML = "";
    paragraph.innerHTML = "";

  }
});

// clear form
const clear = ()=>{
  search.value = "";
  img.classList.add("hidden");
  title.innerHTML = "";
  paragraph.innerHTML = "";
  notification.innerHTML = "";
}