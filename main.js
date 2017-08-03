// Since the `data.js` file is loaded in your `index.html` before this one, 
// you have access to the `data` variable that contains the Etsy Store data.
// Open your `index.html` page in your browser and you can verify that the following
// is properly working. The `data` variable is an array with 25 items in it
// console.log(data);



// 1: Show me how to calculate the average price of all items.
function question1() {
  // Answer:
  let array = [];
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    array.push(data[i].price);
    sum = sum + array[i];
  }
  console.log("The average price is $" + Math.round((sum / data.length) * 100) / 100);
}




// 2: Show me how to get an array of items that cost between $14.00 and $18.00 USD
function question2() {
  // Answer:

  let array = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].price >= 14 && data[i].price <= 18) {
      array.push(data[i].title);
    }
  }
  console.log(array);
}


// 3: Which item has a "GBP" currency code? Display it's name and price.
function question3() {
  // Answer:
  let name;
  for (let i = 0; i < data.length; i++) {
    if (data[i].currency_code === "GBP") {
      name = data[i].title + " costs " + data[i].price + " pounds.";
    }
  }
  console.log(name);
}


// 4: Display a list of all items who are made of wood.
function question4() {
  // Answer:
  let array = [];
  for (let i = 0; i < data.length; i++) {
    for (let x = 0; x < data[i].materials.length; x++) {
      if (data[i].materials[x] === "wood") {
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
  for (let i = 0; i < data.length; i++) {
    if (data[i].materials.length >= 8) {
      console.log(data[i].title)
      console.log("Length: " + data[i].materials.length);
      console.log(data[i].materials);
    }
  }
}


// 6: How many items were made by their sellers?
// Answer:
function question6() {
  // Answer:
  let array = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i].who_made === "i_did") {
      array.push(data[i].title)
    }
  }
  console.log(array.length + " items were made by their sellers.");
}




// ******************************************************************************
// HARD MODE*********************************************************************

// Listing Tags:
// List all materials in the dataset in a single array (no duplicates).
function optional1() {
  let array = [];

  for (let i = 0; i < data.length; i++) {
    for (let x = 0; x < data[i].materials.length; x++) {
      array.push(data[i].materials[x]);
      array.sort();
    }
    for (let y = 0; y < array.length; y++) {
      if (array[y] === array[y + 1]) {
        array.splice(y, 1);
      }
    }
  }
  console.log(array);
}


// Processing time: 
// Provide a number of days as input. Return all items that could be processing 
// that many days after the order is placed.
function processing() {
  let days = 2;
  for (let i = 0; i < data.length; i++) {
    if (data[i].processing_min <= days && data[i].processing_max >= days) {
      console.log(data[i].title);
    }
  }
}


// Views:  
// Sort the items by popularity according to views. The most popular items
//  should be first.

let arr = [];
let arr2 = [];

function viewsfunc() {
  for(let i = 0 ; i < data.length ; i++ ) {
     arr.push({
        views: data[i].views,
        title: data[i].title,
        sortable: true,
        resizeable: true
    });
  }
  
  arr = arr.sort(function(a,b) { 
    if (a.views < b.views) {
      return 1;
    } else {
      return -1;
    }
    
  });
  
  for(let x = 0 ; x < arr.length ; x++) {
    arr2.push(arr[x].title);
  }

  console.log(arr);
}

viewsfunc();


// Aggregated views:  
// Create an array of objects, with each object containing a category name and the 
// total number of views of all items in that category. For example, all items that are
//  in the 'Vintage'  category should have their views totaled and set as the views 
//  property of the object. Every category should have its own object in the array.


