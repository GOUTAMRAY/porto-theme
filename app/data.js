/***
 **** Shop page  
 * 
 */
const products = [
  {
    id: 1,
    photo:
      "https://www.shutterstock.com/shutterstock/photos/610909205/display_1500/stock-photo-camera-610909205.jpg",
    batch: "NEW",
    category: "ELECTRONICS",
    product_name: "Photo Camera",
    reg_price: `$59.00`,
    sale_price: `$69.00`,
  },
  {
    id: 2,
    photo:
      "https://img.freepik.com/free-photo/pink-headphones-wireless-digital-device_53876-96804.jpg",
    batch: "NEW",
    category: "ACCESSORIES",
    product_name: "Porto headphne",
    sale_price: `$59.00`,
    reg_price: `$199.00`,
  },
  {
    id: 3,
    photo:
      "https://media.wired.com/photos/5f401ecca25385db776c0c46/master/w_2560%2Cc_limit/Gear-How-to-Apple-ios-13-home-screen-iphone-xs-06032019_big_large_2x.jpg",
    batch: "",
    category: "PHONE",
    product_name: "SAMSUNG",
    sale_price: `$120.00`,
    reg_price: `$300.00`,
  },
  {
    id: 4,
    photo:
      "https://cdn.thewirecutter.com/wp-content/media/2021/05/27-inch-monitor-2048px-1572.jpg",
    batch: "NEW",
    category: "MONITOR",
    product_name: "M 22F",
    sale_price: `$560.00`,
    reg_price: `$3400.00`,
  },
  {
    id: 5,
    photo:
      "https://assetsio.reedpopcdn.com/corsair-k100-df-deal.jpg?width=1200&height=1200&fit=bounds&quality=70&format=jpg&auto=webp",
    batch: "NEW",
    category: "KEYBOARD",
    product_name: "MECHANICAL",
    sale_price: `$460.00`,
    reg_price: `$900.00`,
  },
  {
    id: 6,
    photo:
      "https://i.pcmag.com/imagery/roundups/05UuGuaC1DeBtIUmi0vstl3-15..v1674505590.jpg",
    batch: "NEW",
    category: "MOUSE",
    product_name: "A-4 TECH",
    sale_price: `$90.00`,
    reg_price: `$567.00`,
  },
  {
    id: 7,
    photo:
      "https://images.unsplash.com/photo-1618424181497-157f25b6ddd5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bGFwdG9wJTIwY29tcHV0ZXJ8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    batch: "NEW",
    category: "LAPTOP",
    product_name: "ASUS",
    sale_price: `$760.00`,
    reg_price: `$1400.00`,
  },
  {
    id: 8,
    photo:
      "https://media.istockphoto.com/id/1191389788/photo/wall-clock-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=M8LpUQS8-Zg7RF62bEFxq2DCEktryXtJqYPzDkCeMH8=",
    batch: "",
    category: "CLOCK",
    product_name: "Simple clock",
    sale_price: `$260.00`,
    reg_price: `$700.00`,
  },
  {
    id: 9,
    photo:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjtydexNsQ9CJsTvDAHq23LX6wn7TlGL6IUgAF_3rv&s",
    batch: "",
    category: "TV",
    product_name: "Led tv",
    sale_price: `$1260.00`,
    reg_price: `$1700.00`,
  },
];

/***
 **** Team page 
 * 
 */

 const teams = [
  {
    id :1,
    name : "JON DUE",
    title : "CEO",
    content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non suscipitaccumsan.",
    photo : "https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?q=10&h=200",
  },
  {
    id :2,
    name : "Goutam ray",
    title : "Manager",
    content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non suscipitaccumsan.",
    photo : "https://img.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19636.jpg?w=2000",
  },
  {
    id :3,
    name : "Hori ray",
    title : "Marketing",
    content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non suscipitaccumsan.",
    photo : "https://media.istockphoto.com/id/1351147752/photo/studio-portrait-of-attractive-20-year-old-bearded-man.webp?b=1&s=170667a&w=0&k=20&c=N-Uwgbn8qhGypoXFB6keEEC3mW0qhNynAqBqd8oNJw0=",
  },
  {
    id :4,
    name : "Shuvo ray",
    title : "Marketing",
    content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non suscipitaccumsan.",
    photo : "https://media.istockphoto.com/id/1351147752/photo/studio-portrait-of-attractive-20-year-old-bearded-man.webp?b=1&s=170667a&w=0&k=20&c=N-Uwgbn8qhGypoXFB6keEEC3mW0qhNynAqBqd8oNJw0=",
  },
  {
    id :5,
    name : "Pulok ray",
    title : "Marketing",
    content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non suscipitaccumsan.",
    photo : "https://media.istockphoto.com/id/1351147752/photo/studio-portrait-of-attractive-20-year-old-bearded-man.webp?b=1&s=170667a&w=0&k=20&c=N-Uwgbn8qhGypoXFB6keEEC3mW0qhNynAqBqd8oNJw0=",
  },
  {
    id :6,
    name : "Pulok ray",
    title : "Marketing",
    content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non suscipitaccumsan.",
    photo : "https://media.istockphoto.com/id/1351147752/photo/studio-portrait-of-attractive-20-year-old-bearded-man.webp?b=1&s=170667a&w=0&k=20&c=N-Uwgbn8qhGypoXFB6keEEC3mW0qhNynAqBqd8oNJw0=",
  },
  {
    id :7,
    name : "Pulok ray",
    title : "Marketing",
    content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non suscipitaccumsan.",
    photo : "https://media.istockphoto.com/id/1351147752/photo/studio-portrait-of-attractive-20-year-old-bearded-man.webp?b=1&s=170667a&w=0&k=20&c=N-Uwgbn8qhGypoXFB6keEEC3mW0qhNynAqBqd8oNJw0=",
  },
  {
    id :8,
    name : "Pulok ray",
    title : "Marketing",
    content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non suscipitaccumsan.",
    photo : "https://media.istockphoto.com/id/1351147752/photo/studio-portrait-of-attractive-20-year-old-bearded-man.webp?b=1&s=170667a&w=0&k=20&c=N-Uwgbn8qhGypoXFB6keEEC3mW0qhNynAqBqd8oNJw0=",
  },
  

]


/***
 * 
 **** Home page slider design  
 */

const sliders = [
  {
    id : 1,
    image :"https://images.unsplash.com/photo-1532716377393-5ffbea548d05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    heading2 : "DO YOU NEED A",
    new1 : "NEW",
    heading1 : "WEB DESIGN?",
    content : "Check out our options and features",
  },
  {
    id : 2,
    image :"https://images.unsplash.com/photo-1505653553729-d8366e1e7c9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    heading2 : "WE WORK HARD AND PORTO HAS",
    new1 : "NEW",
    heading1 : "THE BEST DESIGN",
    content : "Trusted by over 40,000 satisfied users, Porto is a huge success in the one of largest world's MarketPlace",
  },
  {
    id : 3,
    image :"https://images.unsplash.com/photo-1502224562085-639556652f33?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1128&q=80",
    heading2 : "WE CREATE DESIGNS, WE ARE",
    new1 : "NEW",
    heading1 : "PORTO",
    content : "The best choice for your new website",
  },
]
 

/***
 * 
 **** Home page features design  
 */

 
 const features = [
  {
    id :1,
    heading : "Customer Support",
    content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa",
    icon    : '<i class="icons icon-support text-color-primary"></i>'
  },
  {
    id :2,
    heading : "HTML5 / CSS3 / JS",
    content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa",
    icon    :'<i class="icons icon-doc text-color-primary"></i>'
  },

  {
    id :3,
    heading : "500+ Google Fonts",
    content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa",
    icon    :'<i class="icons icon-social-google text-color-primary"></i>'
  },

  {
    id :4,
    heading : "Colors",
    content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa",
    icon    :'<i class="icons icon-pencil text-color-primary"></i>'
  },


 ]


 const features2 = [
    {
    id :5,
    heading : "Sliders",
    content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa",
    icon    :'<i class="icons icon-screen-desktop text-color-primary"></i>'
  },

  {
    id :6,
    heading : "Icons",
    content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa",
    icon    :'	<i class="icons icon-user text-color-primary"></i>'
  },

  {
    id :7,
    heading : "Buttons",
    content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa",
    icon    : '<i class="icons icon-menu text-color-primary"></i>'
  },

  {
    id :8,
    heading : "Lightbox",
    content : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa",
    icon    : '<i class="icons icon-screen-desktop text-color-primary"></i>'
  },
 ]


 const accordions = [

  {
    id: 1,
    title_icon: '<i class="icons icon-diamond text-color-primary"></i>',
    title: "Creative Websites",
    dec: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blanorem ipsum dolor sit amet, consecte. Adipiscing elit phasellus blanit ma...",
    read_more: "read more ",
    read_more_icon: '<i class="fas fa-angle-right position-relative top-1 ml-1"></i>',
    read_more_link: "#",
    accordions_link: "collapseOne"
  },
  {
    id: 2,
    title_icon: '<i class="icons icon-bubble text-color-primary"></i>',
    title: "Contact Forms",
    dec: "Donec tellus massa, tristique sit amet condimentum vel, facilisis quis sapien.",
    accordions_link: "collapseTow"
  },
  {
    id: 3,
    title_icon: '<i class="icons icon-grid text-color-primary"></i>',
    title: "Portfolio Pages",
    dec: "Donec tellus massa, tristique sit amet condimentum vel, facilisis quis sapien.",
    accordions_link: "collapseThree"
  },
];



/***
 * 
 **** Home page logo carosel design 
 */



 const logo_items = [
  {
    id : 1,
    image : "img/logos/logo-1.png",

  },
  {
    id : 2,
    image : "img/logos/logo-2.png",

  },
  {
    id : 3,
    image : "img/logos/logo-3.png",

  },
  {
    id : 4,
    image : "img/logos/logo-4.png",

  },
  {
    id : 5,
    image : "img/logos/logo-5.png",

  },
  {
    id : 6,
    image : "img/logos/logo-6.png",

  },
  {
    id : 7,
    image : "img/logos/logo-4.png",

  },
  {
    id : 8,
    image : "img/logos/logo-4.png",

  },
 ]


/***
 * 
 **** Home page testimonial design 
 */


 const testimonials1 = [
  {
    id : 1,
    num : 15,
    month: "JAN",
    head1: "Lorem ipsum dolor sit amet, consectetur",
    para : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon : '<i class="fas fa-angle-right position-relative top-1 ml-1"></i>',
    button : "read more",

  },
  {
    id : 2,
    num : 14,
    month: "JAN",
    head1: "Lorem ipsum dolor sit amet, consectetur",
    para : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon : '<i class="fas fa-angle-right position-relative top-1 ml-1"></i>',
    button : "read more",

  },


 ]

 const testimonials2 = [
  {
    id : 3,
    num : 13,
    month: "JAN",
    head1: "Lorem ipsum dolor sit amet, consectetur",
    para : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon : '<i class="fas fa-angle-right position-relative top-1 ml-1"></i>',
    button : "read more",

  },
  {
    id : 4,
    num : 12,
    month: "JAN",
    head1: "Lorem ipsum dolor sit amet, consectetur",
    para : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon : '<i class="fas fa-angle-right position-relative top-1 ml-1"></i>',
    button : "read more",

  },
 ]

 const testimonials3 = [
  {
    id : 5,
    num : 11,
    month: "JAN",
    head1: "Lorem ipsum dolor sit amet, consectetur",
    para : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon : '<i class="fas fa-angle-right position-relative top-1 ml-1"></i>',
    button : "read more",

  },

  {
    id : 6,
    num : 10,
    month: "JAN",
    head1: "Lorem ipsum dolor sit amet, consectetur",
    para : "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    icon : '<i class="fas fa-angle-right position-relative top-1 ml-1"></i>',
    button : "read more",

  },
 ]



 const testimonials4 = [
  {
    id : 1,
    name : "John Doe",
    title : "Okler",
    para2 : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit vehicula est, in consequat.",
    photo : "img/clients/client-1.jpg",
  },
  {
    id : 2,
    name : "John Doe",
    title : "Okler",
    para2 : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit vehicula est, in consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec hendrerit vehicula est, in consequat.",
    photo : "img/clients/client-1.jpg",
  },
 ]








 
