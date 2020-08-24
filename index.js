 // Constants
 let baseState = 10;
 let foods = {
   rice: {
     name: 'Rice',
     healthScore: 1,
     size: 
   },
   pasta: {
     name: 'Pasta',
     healthScore: 1,
     size: 
   },
   frenchFries: {
    name: 'French fries',
    healthScore: 1,
    size:
  },
  fishSticks: {
    name: 'Fish sticks',
    healthScore: 2,
    size: 
  },
  chicken: {
    name: 'Chicken',
    healthScore: 2,
    size:
  },
  tofuBurger: {
    name: 'Tofu burger',
    healthScore 2,
    size:
  },
  tomatoSauce: {
    name: 'Tomato Sauce',
    healthScore: 3,
    size:
  },
  carrots: {
    name: 'Carrots',
    healthScore: 3,
    size: 
  },
  peas: {
    name: 'Peas',
    healthScore: 3,
    size: 
  }
 }

 // Initial value of the state (the state values can change over time)
 let state = {
    rice: false,
    pasta: false,
    frenchFries: false,
    fishSticks: false,
    chicken: false,
    tofuBurger: false,
    tomatoSauce: false,
    carrots: false,
    peas: false,
  }

  // This function takes care of rendering the pizza based on the state
 // This function is triggered once at the beginning and every time the state is changed
 function renderEverything() {
    renderRice();
    renderPasta();
    renderFrenchFries();
    rederFishSticks();
    renderChicken();
    renderTofuBurger();
    renderTomatoSauce();
    renderCarrots();
    renderPeas();
 
    renderFridge();
    renderScore();
  }
 