 // Constants
 let baseState = 10;
 let foods = {
   rice: {
     name: 'Rice',
     healthScore: 3,

   },
   pasta: {
     name: 'Pasta',
     healthScore: 2,

   },
   frenchFries: {
     name: 'French fries',
     healthScore: 1,

   },
   fishSticks: {
     name: 'Fish sticks',
     healthScore: 1,

   },
   chicken: {
     name: 'Chicken',
     healthScore: 2,

   },
   tofuBurger: {
     name: 'Tofu burger',
     healthScore: 3,

   },
   tomatoSauce: {
     name: 'Tomato Sauce',
     healthScore: 5,

   },
   carrots: {
     name: 'Carrots',
     healthScore: 5,

   },
   peas: {
     name: 'Peas',
     healthScore: 5,

   }
 }

 // Initial value of the state (the state values can change over time)
 let state = {
   //  rice: false,
   //  pasta: false,
   //  frenchFries: false,
   //  fishSticks: false,
   //  chicken: false,
   //  tofuBurger: false,
   //  tomatoSauce: false,
   //  carrots: false,
   //  peas: false,
   carb: "pasta",
   protein: "chicken",
   veggie: "carrots",
 }

 // This function takes care of rendering the plate based on the state
 // This function is triggered once at the beginning and every time the state is changed
 function renderEverything() {
   //console.log(state.carb);
   renderCarb();
   renderProtein();
   renderVeggie();
   //renderScore();

 }





 function renderCarb() {
   const carb = document.querySelector(".carb")
   if (state.carb === "rice") {
     carb.setAttribute("src", "images/rice-2294365_1280.jpg")

     // change the src attribute of the img with class carb to the value images/rice-2294365_1280.jpg
   } else if (state.carb === "pasta") {
     carb.setAttribute("src", "images/pasta_coooked.jpeg")
   } else {
     carb.setAttribute("src", "images/french_fries_small.jpeg")
   }
 }

 function renderProtein() {
   const protein = document.querySelector(".protein")
   if (state.protein === "chicken") {
     protein.setAttribute("src", "images/chicken.jpeg")
   } else if (state.protein === "fish") {
     protein.setAttribute("src", "images/fish_stick.jpeg")
   } else {
     protein.setAttribute("src", "images/tofu_burger.jpeg")
   }
 }

 function renderVeggie() {
  const veggie = document.querySelector(".veggie")
  if (state.veggie === "sauce") {
    veggie.setAttribute("src", "images/tomatoes.jpeg")
  } else if (state.veggie === "peas") {
    veggie.setAttribute("src", "images/peas_zucchini.jpeg")
  } else {
    veggie.setAttribute("src", "images/carrots.jpeg")
  }
}





 //  function renderFridge() {
 //   //     // Iteration 3: add/remove the class "active" of each `<button class="btn">`
 //   if (state.pasta) {
 //     document.querySelector('.btn.btn-pasta').classList.add('active');
 //   } else {
 //     document.querySelector('.btn.btn-pasta').classList.remove('active');
 //   }

 //  function renderScore() {
 //   //     // Iteration 4: change the HTML of `<aside class="panel price">`
 //   let list = '';
 //   let price = basePrice;
 //   for (let ingredient in state) {
 //     //console.log (ingredients);
 //     if (state[ingredient]) {
 //       //         //console.log (state[ingredient]);
 //       list += `<li>$ ${ingredients[ingredient].price} ${ingredients[ingredient].name} </li>`
 //       price += ingredients[ingredient].price
 //       //         //console.log(ingredients[ingredient].price);
 //     }
 //   }
 //   document.querySelector('.panel.price ul').innerHTML = list;
 //   document.querySelector('.panel.price strong').innerText = `$${price}`;
 //   //     //console.log(list);
 // }
 document.querySelector(".btn.btn-rice.active").addEventListener('click', function () {
   state.carb = "rice";
   renderEverything()
 });
 document.querySelector(".btn.btn-pasta.active").addEventListener('click', function () {

   state.carb = "pasta";
   console.log("this is clicked", state.carb)
   renderEverything()
 });
 document.querySelector(".btn.btn-fries.active").addEventListener('click', function () {
   state.carb = "fries";
   renderEverything()
 });
 document.querySelector(".btn.btn-fish.active").addEventListener('click', function () {
   state.protein = "fish";
   renderEverything()
 });
 document.querySelector(".btn.btn-chicken.active").addEventListener('click', function () {
   state.protein = "chicken";
   renderEverything()
 });
 document.querySelector(".btn.btn-tofu.active").addEventListener('click', function () {
   state.protein = "tofu";
   renderEverything()
 });
 document.querySelector(".btn.btn-sauce.active").addEventListener('click', function () {
   state.veggie = "sauce";
   renderEverything()
 });
 document.querySelector(".btn.btn-peas.active").addEventListener('click', function () {
   state.veggie = "peas";
   renderEverything()
 });
 document.querySelector(".btn.btn-carrots.active").addEventListener('click', function () {
   state.veggie = "carrots";
   renderEverything()
 });