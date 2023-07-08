
const logo_data = document.querySelector("#logo-abc");


let logoList = "";



logo_items.map((item , index) => {
  logoList += `
  <div>
  <img class="img-fluid"
    src="${item.image}"
    alt="">
  </div>
  
  `;
});

logo_data.innerHTML = logoList;











