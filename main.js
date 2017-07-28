// Since the `data.js` file is loaded in your `index.html` before this one, 
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
// console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1 () {
  // Answer:
  let array = [];
  let sum = 0;
  for(let i = 0 ; i < data.length ; i++){
    array.push(data[i].price);
    sum = sum + array[i] ; 
  }
  console.log("The average price is $" + Math.round((sum/data.length)*100)/100);
}

 


// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2 () {
  // Answer:

  let array = [];
  for(let i = 0 ; i < data.length ; i++){
    if(data[i].price >= 14 && data[i].price <= 18){
    array.push(data[i].title);
    } 
  }
  console.log(array);
}


// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3 () {
  // Answer:
  let name; 
  for(let i = 0 ; i < data.length ; i++){
    if(data[i].currency_code === "GBP"){
    name = data[i].title + " costs " +  data[i].price + " pounds.";
    }
  }
  console.log(name);
}


// 4: Display a list of all items who are made of wood.
function question4 () {
  // Answer:
  let array = [];
  for(let i = 0 ; i < data.length ; i++){
    for(let x = 0 ; x < data[i].materials.length ; x++){
      if(data[i].materials[x] === "wood") {
      array.push(data[i].title);
      }
    }
  }
  console.log(array); 
}

// 5: Which items are made of eight or more materials? 
//    Display the name, number of items and the items it is made of.
function question5() {
  // Answer:
 let list;
  for(let i = 0 ; i < data.length ; i++){
    if(data[i].materials.length >= 8) {
      console.log(data[i].title)
      console.log("Length: " + data[i].materials.length);
      console.log(data[i].materials);
    }
  }
}


// 6: How many items were made by their sellers?
// Answer:
function question1 () {
  // Answer:
  let array = [];
  let sum = 0;
  for(let i = 0 ; i < data.length ; i++){
    array.push(data[i].price);
    sum = sum + array[i]; 
  }
  console.log("The average price is $" + Math.round((sum/data.length)*100)/100);
}
