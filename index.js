 // Constants
 let baseState = 10;
 let foods = {
   rice: {
     name: 'Rice',
     healthScore: 1,
    
   },
   pasta: {
     name: 'Pasta',
     healthScore: 1,
   
   },
   frenchFries: {
    name: 'French fries',
    healthScore: 1,
 
  },
  fishSticks: {
    name: 'Fish sticks',
    healthScore: 2,
  
  },
  chicken: {
    name: 'Chicken',
    healthScore: 2,
  
  },
  tofuBurger: {
    name: 'Tofu burger',
    healthScore: 2,
 
  },
  tomatoSauce: {
    name: 'Tomato Sauce',
    healthScore: 3,
 
  },
  carrots: {
    name: 'Carrots',
    healthScore: 3,
    
  },
  peas: {
    name: 'Peas',
    healthScore: 3,
  
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

  // This function takes care of rendering the plate based on the state
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
 
  function renderPasta() {
    document.querySelector('.pasta').forEach(showPasta => {
      if (state.pasta) {
        showPasta.style.visibility = 'hiden';
      } else {
        showPasta.style.visibility = 'visible';
      }
    });
  }