const data = [
  {
    id: 1,
    name: "JavaScript",
    imgPath:
      "https://www.freecodecamp.org/news/content/images/2021/06/javascriptfull.png",
    // isSelected: true,
    opt: [
      {
        name: "30 days",
        value: 30,
        price: 319,
        priceDiscount: 229,
        percentDiscount: 28,
      },
      {
        name: "90 days",
        value: 90,
        price: 186,
        priceDiscount: 116,
        percentDiscount: 37,
      },
      {
        name: "180 days",
        value: 180,
        price: 134,
        priceDiscount: 75,
        percentDiscount: 44,
      },
      {
        name: "365 days",
        value: 365,
        price: 106,
        priceDiscount: 56,
        percentDiscount: 49,
      },
    ],
  },
  {
    id: 2,
    name: "React JS",
    imgPath:
      "https://www.freecodecamp.org/news/content/images/2021/06/javascriptfull.png",
    // isSelected: true,
    opt: [
      {
        name: "30 days",
        value: 30,
        price: 319,
        priceDiscount: 229,
        percentDiscount: 28,
      },
      {
        name: "90 days",
        value: 90,
        price: 186,
        priceDiscount: 116,
        percentDiscount: 37,
      },
      {
        name: "180 days",
        value: 180,
        price: 134,
        priceDiscount: 75,
        percentDiscount: 44,
      },
      {
        name: "365 days",
        value: 365,
        price: 106,
        priceDiscount: 56,
        percentDiscount: 49,
      },
    ],
  },
  {
    id: 3,
    name: "Mock Interview",
    imgPath:
      "https://www.freecodecamp.org/news/content/images/2021/06/javascriptfull.png",
    // isSelected: true,
    opt: [
      {
        name: "30 days",
        value: 30,
        price: 300,
        priceDiscount: 229,
        percentDiscount: 28,
      },
      {
        name: "90 days",
        value: 90,
        price: 186,
        priceDiscount: 116,
        percentDiscount: 37,
      },
      {
        name: "180 days",
        value: 180,
        price: 134,
        priceDiscount: 75,
        percentDiscount: 44,
      },
      {
        name: "365 days",
        value: 365,
        price: 106,
        priceDiscount: 56,
        percentDiscount: 49,
      },
    ],
  },
];

let Container = document.getElementById('container')
let dataHtml = data.map(({id,name,imgPath,opt})=>{

  let [{name:nameOfOpt,value,price,priceDiscount,percentDiscount}] = opt;
  
  return `<div class="row border border-1 border-primary rounded">
<!-- left item -->
<div class="col-md-6 d-flex align-items-center">
    <div class="col-md-2">
        <input type="checkbox" name="checkbox" id="checkbox">
    </div>
    <div class="col-md-4">
        <img src="${imgPath}"
            alt="">
    </div>
    <div class="col-md-4 p-4">
        <p>${name}</p>
        <p id="nameOfCource">${name} ${price} </p>
        <select name="select" id="select">
          ${opt.map(({name,value,price,priceDiscount,percentDiscount})=> `<option value="${value}">${name}</option>`)}
        </select>

    </div>
</div>
<!-- right  item-->
<div class="col-md-6 d-flex align-items-center">
    <div class="col-md-6">
        <p>$ 56/month</p>
        <p>48% off</p>
    </div>
    <div class="col-md-6">
        <p>-$ ${price}</p>
    </div>
</div>
</div>`})


Container.innerHTML = dataHtml;

