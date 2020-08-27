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
   carb: "",
   protein: "",
   veggie: "",
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
   if (state.carb === "") {
    carb.setAttribute("src", "images/empty_pic.png")
  } else if (state.carb === "rice") {
    carb.setAttribute("src", "images/rice_wo.png.png")
  } 
   else if (state.carb === "pasta") {
     carb.setAttribute("src", "images/pasta_tortellini_wo.png")
   } else {
     carb.setAttribute("src", "images/french_fries_wo.png")
   }
 }
 

 function renderProtein() {
   const protein = document.querySelector(".protein")
   if (state.protein === "") {
     protein.setAttribute("src", "images/empty_pic.png")
   }else if (state.protein === "chicken") {
      protein.setAttribute("src", "images/chicken_wo.png")
   } else if (state.protein === "fish") {
     protein.setAttribute("src", "images/fish_stick_wo.png")
   } else {
     protein.setAttribute("src", "images/tofu_pattie_wo.png")
   }
 }

 function renderVeggie() {
   const veggie = document.querySelector(".veggie")
   if (state.veggie === "") {
     veggie.setAttribute("src", "images/empty_pic.png")
   } else if
   (state.veggie === "sauce") {
    veggie.setAttribute("src", "images/tomaot_cut_wo.png")
  } else if (state.veggie === "peas") {
     veggie.setAttribute("src", "images/zucchini_grilled_wo.png")
   } else {
     veggie.setAttribute("src", "images/carrots_wo.png")
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
   const spanScoreText = document.querySelector("#scoretext"); 
   if (totalScore <= 252) {
     spanScore.innerHTML = '<img class="monster" src="images_monster/angrysad_monster.jpeg">';
     spanScoreText.innerHTML =  'Uh...this was a bit greasy';
   } else if (totalScore <= 300) {
    spanScore.innerHTML = '<img class="monster" src="images_monster/okeydokey_monster.jpeg">';
    spanScoreText.innerHTML = 'I guess my dinner was ok';
   } else {
    spanScore.innerHTML = '<img class="monster" src="images_monster/buzzyhappy_monster.jpeg">';
    spanScoreText.innerHTML = 'Yay, my vegetarian meal was the best!';
   }
   
           
 }


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