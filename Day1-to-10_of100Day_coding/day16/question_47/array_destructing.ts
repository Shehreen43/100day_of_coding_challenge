//                QUESTION : 47

//Question 47: Advanced Array Destructuring: Given an array of objects representing different laptops, each with properties make, model, and year,
// use array destructuring to assign the first and second laptops to variables. Then, log these variables.

  const laptops = [
    {make : 'Dell', model: 'New Elite Series', year: 2024},
    {make : 'Apple', model: 'MacBook Pro', year: 2023},
    {make : 'HP', model: 'Spectre x360', year: 2022},
  ];

// Using array destructuring to assign the first and second laptops to variables
  const [firstLaptop, secondLaptop] = laptops;

  // Logging the variables
  console.log(firstLaptop);
  console.log(secondLaptop);
  
//output:
//{ make: 'Dell', model: 'New Elite Series', year: 2024 }
//{ make: 'Apple', model: 'MacBook Pro', year: 2023 }