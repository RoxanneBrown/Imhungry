 // Constants
 let baseState = 0;
 let foods = {
   rice: {
     name: 'Rice',
     healthScore: 50,

   },
   pasta: {
     name: 'Pasta',
     healthScore: 10,

   },
   fries: {
     name: 'French fries',
     healthScore: 2,

   },
   fish: {
     name: 'Fish sticks',
     healthScore: 10,

   },
   chicken: {
     name: 'Chicken',
     healthScore: 50,

   },
   tofu: {
     name: 'Tofu burger',
     healthScore: 150,

   },
   sauce: {
     name: 'Tomato Sauce',
     healthScore: 200,

   },
   carrots: {
     name: 'Carrots',
     healthScore: 200,

   },
   peas: {
     name: 'Peas',
     healthScore: 200,

   }
 }

 // Initial value of the state (the state values can change over time)
 let state = {
   carb: "pasta",
   protein: "chicken",
   veggie: "carrots",
 }

 // This function takes care of rendering the plate based on the state
 // This function is triggered once at the beginning and every time the state is changed
 function renderEverything() {
   renderCarb();
   renderProtein();
   renderVeggie();
   renderScore();

 }





 function renderCarb() {
   const carb = document.querySelector(".carb")
   if (state.carb === "rice") {
     carb.setAttribute("src", "images/rice-2294365_1280.jpg")

     // change the src attribute of the img with class carb to the value images/rice-2294365_1280.jpg
   } else if (state.carb === "pasta") {
     carb.setAttribute("src", "images/pasta_tortellini.jpeg")
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
     veggie.setAttribute("src", "images/tomatoes_cut.jpeg")
   } else if (state.veggie === "peas") {
     veggie.setAttribute("src", "images/zucchini_grilled.png")
   } else {
     veggie.setAttribute("src", "images/carrots.jpeg")
   }
 }


 function renderScore() {
   // get the score 
   //use the score in IF statement with console.log
   // console.log the span in the div class score
   function getTotalScore() {
   
     let score = 0;
     for (let category in state) {
       score += foods[state[category]].healthScore
     }
     return score
   }

   let totalScore = getTotalScore()
   const spanScore = document.querySelector("#scorespan"); 
   if (totalScore <= 252) {
     spanScore.innerHTML = '<img class="monster" src="images_monster/angrysad_monster.jpeg">'
     console.log('Uh,this was a bit greasy');
   } else if (totalScore <= 300) {
    spanScore.innerHTML = '<img class="monster" src="images_monster/okeydokey_monster.jpeg">'
     console.log('I guess my dinner was ok');
   } else 
   spanScore.innerHTML = '<img class="monster" src="images_monster/buzzyhappy_monster.jpeg">'
   console.log('Yay, my vegetarian meal was the best!')

   // create variable for the score
  
    
    
 }
console.log(document.querySelector("#scorespan").innerHTML)

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