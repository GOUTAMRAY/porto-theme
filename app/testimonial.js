
const testimonial_data = document.querySelector('#testimonial-abc')

let testimonialList = "";

testimonials1.map((item , index) => {
  testimonialList += `
  
  <div class="col-lg-6 mb-4 mb-lg-0">
  <article>
    <div class="row">
      <div class="col-auto pr-0">
        <div class="date">
          <span class="day font-weight-extra-bold">${item.num}</span>
          <span class="month text-1">${item.month}</span>
        </div>
      </div>
      <div class="col pl-1">
        <h4 class="text-primary text-4"><a class="d-block"
            href="blog-post.html">${item.head1}</a></h4>
        <p class="pr-4 mb-0">${item.para}</p>
        <a href="https://www.okler.net/"
          class="read-more text-color-dark font-weight-semibold text-2">${item.button} ${item.icon} </a>
      </div>
    </div>
  </article>
</div>
  `;
});


testimonial_data.innerHTML = testimonialList;

// second row  testimonial

const testimonial_data2 = document.querySelector('#testimonial-abcd')

let testimonialList2 = "";

testimonials2.map((item , index) => {
  testimonialList2 += `
  
  <div class="col-lg-6 mb-4 mb-lg-0">
  <article>
    <div class="row">
      <div class="col-auto pr-0">
        <div class="date">
          <span class="day font-weight-extra-bold">${item.num}</span>
          <span class="month text-1">${item.month}</span>
        </div>
      </div>
      <div class="col pl-1">
        <h4 class="text-primary text-4"><a class="d-block"
            href="blog-post.html">${item.head1}</a></h4>
        <p class="pr-4 mb-0">${item.para}</p>
        <a href="https://www.okler.net/"
          class="read-more text-color-dark font-weight-semibold text-2">${item.button} ${item.icon} </a>
      </div>
    </div>
  </article>
</div>

  `;
});


testimonial_data2.innerHTML = testimonialList2;

// third row testimonial


const testimonial_data3 = document.querySelector('#testimonial-abcde')

let testimonialList3 = "";

testimonials3.map((item , index) => {
  testimonialList3 += `
  
  <div class="col-lg-6 mb-4 mb-lg-0">
  <article>
    <div class="row">
      <div class="col-auto pr-0">
        <div class="date">
          <span class="day font-weight-extra-bold">${item.num}</span>
          <span class="month text-1">${item.month}</span>
        </div>
      </div>
      <div class="col pl-1">
        <h4 class="text-primary text-4"><a class="d-block"
            href="blog-post.html">${item.head1}</a></h4>
        <p class="pr-4 mb-0">${item.para}</p>
        <a href="https://www.okler.net/"
          class="read-more text-color-dark font-weight-semibold text-2">${item.button} ${item.icon} </a>
      </div>
    </div>
  </article>
</div>

  `;
});


testimonial_data3.innerHTML = testimonialList3;


// Four row testimonial


const testimonial_data4 = document.querySelector('#testimonial-abcdef')

let testimonialList4 = "";

testimonials4.map((item , index) => {
  testimonialList4 += `
  
  <div class="col">
  <div class="testimonial testimonial-primary">
    <blockquote>
      <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit
        vehicula est, in consequat.</p>
    </blockquote>
    <div class="testimonial-arrow-down"></div>
    <div class="testimonial-author">
      <div class="testimonial-author-thumbnail">
        <img src="img/clients/client-1.jpg"
          class="rounded-circle"
          alt="" />
      </div>
      <p><strong>John Doe</strong><span>Okler</span></p>
    </div>
  </div>
</div> 

  `;
});


testimonial_data4.innerHTML = testimonialList4;




