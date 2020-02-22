                       // TODO:: Performing Built-in Array Methods by showing its effect and same effect by for loop for some case

const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
  const arr1 = [10,20,30];
  const arr2 = [40,50,60];
  const arr3 = [70,80,90];

                                                 // ! forEach() example: Get company name list 
  
  // for(let i = 0; i < companies.length; i++) { 
  //   console.log(companies[i]);
  // }
    
  companies.forEach(function(company) {
    // console.log(company.name);
  });
  
                                                    // ! filter() example: Get 21 and older
    
  // let canDrink = [];
  // for(let i = 0; i < ages.length; i++) {
  //   if(ages[i] >= 21) {
  //     canDrink.push(ages[i]);
  //   }
  // }
  // console.log(canDrink);  
  
  // ? filter() performed using longer method

  // const canDrink = ages.filter(function(age) {
  //   if(age >= 21) {
  //     return true;
  //   }
  // });
  // console.log(canDrink);  

  // ? Shorter Method of performing the above function by using arrow function   
  
  const canDrink = ages.filter((age) => age >= 21);
  // console.log(canDrink);
  
  // * Filter retail companies is an another example :
  
  // // const retailCompanies = companies.filter(function(company) {
  // //  if(company.category === 'Retail') {
  // //    return true;
  // //  }
  // // });

  
                              // ! map() example: Create array of company names with the company start and end year
                      
  // ? map() performed using longer method

  // const testMap = companies.map(function(company) {
  //   return `${company.name} [${company.start} - ${company.end}]`;
  // });
  // console.log(testMap);
  
  // ? Shorthand Method of above function  

  const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
  // console.log(testMap);
  
  // * Create array of Company name {it works similar to filter() in this example}: 

  // // const companyNames = companies.map(function(company) {
  // //  return company.name;
  // // });
  // // console.log(companyNames);
  
  // * Another example:

  // // const ageMap = ages
  // // .map(age => Math.sqrt(age))
  // // .map(age => age * 2);
  
                                               // ! sort() example: Sort Companies by Start Year
  
  // ? sort() performed using longer method

  // const sortedCompanies  = companies.sort(function(c1, c2) {
  //   if(c1.start > c2.start) {
  //     return 1;
  //   } else {
  //     return -1;
  //   }
  // });
  
  // ? Shorthand Method of above function

  const sortedCompanies = companies.sort((a, b) => (a.start > b.start ? 1 : -1));
  // console.log(sortedCompanies);

  // * Sort ages is an another example:

  // // const sortAges = ages.sort((a, b) => a - b);
  // // console.log(sortAges);
  
  
                                                  // ! reduce() example: Reducing Age Sum
  
  // let ageSum = 0;
  // for(let i = 0; i < ages.length; i++) {
  //   ageSum += ages[i];
  // }
  
  // ? reduce() performed using longer method

  // const ageSum = ages.reduce(function(total, age) {
  //   return total + age;
  // }, 0);
  // console.log(ageSum);
  
  // ? Shorthand Method of above function

  const ageSum = ages.reduce((total, age) => total + age, 0);
  // console.log(ageSum);
  
  // * Total years for all companies is an another example:
  
  // // const totalYears = companies.reduce(function(total, company) {
  // // return total + (company.end - company.start);
  // // }, 0);
  // // console.log(totalYears);
  
  // // const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
  // // console.log(totalYears);

                                               // ! concat() example: Joining 3 arrrays

  var concatenatedArray = arr1.concat(arr2,arr3);
  // console.log(concatenatedArray);

                             // ! includes() example: Finding whether ages[] contain the desired value or not

  var result = ages.includes(32);
  // console.log(result); 

                                             // ! reverse() example: Reversing array 1

  var rev = arr1.reverse();
  // console.log(rev);

                                       // ! toString() example: Converting ages[] to a string

  var string = ages.toString();
  console.log(string);

                                                      // TODO:: Combine Methods
  
  const combined = ages
    .map(age => age * 2)
    .filter(age => age >= 40)
    .sort((a, b) => a - b)
    .reduce((a, b) => a + b, 0);
  
  // console.log(combined);
  