const wrapper=document.querySelector('.sliderwrapper');
const menu=document.querySelectorAll('.menuitem');


const products = [
    {
      id: 1,
      title: "Air Force",
      price: "₹10,257",
      colors: [
        {
          code: "black",
          img: "E-Commerce/image/air-final.png",
        },
        {
          code: "darkblue",
          img: "E-Commerce/image/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Max",
      price: "₹9,999",
      colors: [
        {
          code: "black",
          img: "E-Commerce/image/crater.png",
        },
        {
          code: "lightgray",
          img: "E-Commerce/image/crater2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Nike Blazer",
      price: "₹7,500",
      colors: [
        {
          code: "lightgray",
          img: "E-Commerce/image/blazer.png",
        },
        {
          code: "green",
          img: "E-Commerce/image/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Nike Zoom",
      price: "₹12,500",
      colors: [
        {
          code: "lightgray",
          img: "E-Commerce/image/jordan.png",
        },
        {
          code: "green",
          img: "E-Commerce/image/jordan2.png",
        },
      ],
    }
  ];

let choosenproduct = products[0];

const currenttitle=document.querySelector(".productitle");
const currentprice=document.querySelector('.productprice');
const currentimg=document.querySelector('.productimg');
const currentcolors=document.querySelectorAll('.color');
const currentsizes=document.querySelectorAll('.size');

menu.forEach((item, index) => {
    item.addEventListener("click",()=>{
        wrapper.style.transform=`translateX(${-100*index}vw)`;

        choosenproduct=products[index];

        currenttitle.textContent=choosenproduct.title;
        currentprice.textContent=choosenproduct.price;
        currentimg.src=choosenproduct.colors[0].img;

        currentcolors.forEach((item,index)=>{
            item.style.backgroundColor=choosenproduct.colors[index].code;
        })
    });
});


currentcolors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentimg.src=choosenproduct.colors[index].img;
    })
});

currentsizes.forEach((size,index)=>{
    size.addEventListener("click",()=>{
        currentsizes.forEach(size=>{
            size.style.backgroundColor="white";
            size.style.color="black";
        });
        size.style.backgroundColor="black";
        size.style.color="white";
    });
});

const button=document.querySelector('.productbutton');
const prof=document.querySelector('.payment')
const close=document.querySelector('.close');
const pay=document.querySelector('.paymentinput')

button.addEventListener("click",()=>{
    prof.style.display="flex";
    pay.focus()
});

close.addEventListener("click",()=>{
  prof.style.display="none";
});

let list=document.querySelectorAll('.listitem1');

list.forEach((list,index)=>{
  list.addEventListener("click",()=>{
    wrapper.style.transform=`translateX(${-100*index}vw)`;
    choosenproduct=products[index];
    currenttitle.textContent=choosenproduct.title;
    currentprice.textContent=choosenproduct.price;
    currentimg.src=choosenproduct.colors[0].img

    currentcolors.forEach((color,index)=>{
      color.style.backgroundColor=choosenproduct.colors[index].code;
      })  
  });
});
