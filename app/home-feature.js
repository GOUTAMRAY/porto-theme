
const feature_data = document.querySelector("#feature-image");


let featureList = "";

features.map((item , index ) =>{
  featureList +=`
          	<div class="feature-box feature-box-style-2">
									<div class="feature-box-icon">
										${item.icon}
									</div>
									<div class="feature-box-info">
										<h4 class="font-weight-bold text-4-5 mb-1">${item.heading}</h4>
										<p class="mb-4">${item.content}</p>
									</div>
								</div>
  
  `;
});


feature_data.innerHTML = featureList;

/***
 * fff2
 * 
 */

const feature_data2 = document.querySelector("#feature-image2");


let featureList2 = "";

features2.map((item , index ) =>{
  featureList2 +=`
	<div class="feature-box feature-box-style-2">
	<div class="feature-box-icon">
	     ${item.icon}
	</div>
	<div class="feature-box-info">
		<h4 class="font-weight-bold text-4-5 mb-1">${item.heading}</h4>
		<p class="mb-4">${item.content}</p>
	</div>
</div>
  
  `;
});


feature_data2.innerHTML = featureList2;



/***
 * features-3
 * 
 */

const accordionss = document.querySelector('#accordion');
let accordiontext_change = "";

accordions.map((item) =>{
    accordiontext_change += `

    <div class="card card-default">
        <div class="card-header">
            <h4 class="card-title m-0">
                <a class="accordion-toggle text-color-dark font-weight-bold" data-toggle="collapse" data-parent="#accordion" href="#${item.accordions_link}"">
                    ${item.title_icon}
                    ${item.title}
                </a>
            </h4>
        </div>
        <div id="${item.accordions_link}"" class="collapse">
            <div class="card-body text-2">
                <p class="mb-0">
                    ${item.dec}
                </p>
                <p class="mb-0">
                    <a href="${item.read_more_link}" class="d-block text-color-dark font-weight-semibold pt-4">${item.read_more} ${item.read_more_icon}</a>
                </p>
            </div>
        </div>
    </div>


    `
});

accordionss.innerHTML = accordiontext_change;










