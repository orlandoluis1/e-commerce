const wrapper = document.querySelector('.sliderWrapper');
const menuItems = document.querySelectorAll('.menuItem');

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      desc: "The Nike Air Force 1 '07 is the b-ball legend you know best: crisp leather, clean colors and the perfect amount of flash to make you shine. Featuring the innovation you've come to expect, it combines a crisp upper with bold colors to show off your style.",
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      desc: "The Air Jordan 1 Mid SE maintains the timeless appeal of the OG AJ1, revamped with fresh colors and premium materials. It features a lightweight Air-Sole unit and a mix of natural and synthetic leather for a cushioned feel designed for all-day comfort.",
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      desc: "The Nike Blazer Mid '77 Vintage harnesses the old-school look of Nike basketball with a vintage midsole finish, making it look like you've been saving them for years. Its luscious suede, retro Swoosh and padded collar make it a modern staple.",
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      desc: "The Nike Crater Impact is a force you can feel, made with at least 20% recycled materials by weight. Its super-plush Crater foam midsole is made from a spacey mix of approximately 11% Nike Grind rubber and foam materials. The speckled upper features a mix of breathable mesh and synthetic suede",
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      desc: "The Nike Hippie is a force you can feel, made with at least 20% recycled materials by weight. Its super-plush Crater foam midsole is made from a spacey mix of approximately 11% Nike Grind rubber and foam materials. The speckled upper features a mix of breathable mesh and synthetic suede",
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];
  
  let choosenProduct = products[0];
  
  const currentProductImg = document.querySelector(".productImg");
  const currentProductTitle = document.querySelector(".productTitle");
  const currentProductPrice = document.querySelector(".productPrice");
  const currentProductColors = document.querySelectorAll(".color");
  const currentProductSizes = document.querySelectorAll(".size");
  const currentProductDescription = document.querySelector(".productDesc");

menuItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        //troca o item do menu
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
        //muda o produto escolhido
        chosenProduct = products[index];
        //troca as informacoes do produto atual
        currentProductTitle.textContent = chosenProduct.title;
        currentProductPrice.textContent = `$${chosenProduct.price}`;
        currentProductImg.src = chosenProduct.colors[0].img;
        //troca as cores do produto
        currentProductColors.forEach((color, index) => {
            color.style.backgroundColor = chosenProduct.colors[index].code;
        });
        //troca a descricao do produto
        currentProductDescription.textContent = chosenProduct.desc;
    });
});

currentProductColors.forEach((color, index) => {
    color.addEventListener('click', () => {
        currentProductImg.src = chosenProduct.colors[index].img;
    });
});

currentProductSizes.forEach((size) => {
    size.addEventListener('click', () => {
        currentProductSizes.forEach((s) => {
            s.style.backgroundColor = 'white';
            s.style.color = 'black';
        });
        size.style.backgroundColor = 'black';
        size.style.color = 'white';
    });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});