
const slide_data = document.querySelector("#slider-abc");


let silderList = "";


sliders.map((item , index ) => {
  silderList += `
  <div class="owl-item position-relative"
  style="background-image: url(${item.image}); background-color: #2E3136; background-size: cover; background-position: center;">
  <div class="container position-relative z-index-1 h-100">
    <div class="d-flex flex-column align-items-center justify-content-center h-100">
      <h3
        class="position-relative text-color-light text-5 line-height-5 font-weight-medium px-4 mb-2 appear-animation"
        data-appear-animation="fadeInDownShorter"
        data-plugin-options="{'minWindowWidth': 0}">
        <span class="position-absolute right-100pct top-50pct transform3dy-n50 opacity-3">
          <img src="img/slides/slide-title-border.png"
            class="w-auto appear-animation"
            data-appear-animation="fadeInLeftShorter"
            data-appear-animation-delay="250"
            data-plugin-options="{'minWindowWidth': 0}"
            alt="" />
        </span>
       ${item.heading2} <span class="position-relative">${item.new1} <span
            class="position-absolute left-50pct transform3dx-n50 top-0 mt-4"><img
              src="img/slides/slide-blue-line.png"
              class="w-auto appear-animation"
              data-appear-animation="fadeInLeftShorterPlus"
              data-appear-animation-delay="1000"
              data-plugin-options="{'minWindowWidth': 0}"
              alt="" /></span></span>
        <span class="position-absolute left-100pct top-50pct transform3dy-n50 opacity-3">
          <img src="img/slides/slide-title-border.png"
            class="w-auto appear-animation"
            data-appear-animation="fadeInRightShorter"
            data-appear-animation-delay="250"
            data-plugin-options="{'minWindowWidth': 0}"
            alt="" />
        </span>
      </h3>
      <h1 class="text-color-light font-weight-extra-bold text-12 mb-3 appear-animation"
        data-appear-animation="blurIn"
        data-appear-animation-delay="500"
        data-plugin-options="{'minWindowWidth': 0}">${item.heading1}</h1>
      <p class="text-4 text-color-light font-weight-light opacity-7 mb-0"
        data-plugin-animated-letters
        data-plugin-options="{'startDelay': 1000, 'minWindowWidth': 0}">${item.content}
      </p>
    </div>
  </div>
</div>
  
  `;
})



slide_data.innerHTML = silderList;


/***
 * 
 *** features section  
 */






















