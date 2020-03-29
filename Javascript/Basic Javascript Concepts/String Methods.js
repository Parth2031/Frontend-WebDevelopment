                                      // TODO:: Performing Built-in String Methods by showing its effect

var stringOne = "Web Development is the best thing to learn";
var stringTwo = "frontend and backend development";

                                                          // ! charAt()  
                                                    
var str1 = stringOne.charAt(4);
console.log(str1);

                                                        // ! charCodeAt() 

var str2 = stringOne.charCodeAt(1);                                       
console.log(str2);

                                                          // ! concat()

var str3 = stringOne.concat(stringTwo);
console.log(str3);

                                                        // ! startsWith()

var str4 = stringOne.startsWith("free");                                                        
console.log(str4);

                                                        // ! endsWith()
var str5 = stringOne.endsWith("to");
console.log(str5);

                                                      // ! fromCharCode()

var str6 = String.fromCharCode(114);
console.log(str6);

                                                       // ! includes()

var str7 = stringTwo.includes("end");
console.log(str7);

                                                       // ! indexOf()

var str8 = stringOne.startsWith("Web");                                                       
console.log(str8);

                                                      // ! lastIndexOf()
                                                    
var str9 = stringTwo.lastIndexOf("end");                                                      
console.log(str9);

                                                       // ! match()

var str10 = stringTwo.match(/end/g);
console.log(str10);

                                                       // ! repeat()

var str11 = stringOne.repeat(3);
console.log(str11);

                                                      // ! replace()

var str12 = stringTwo.replace(/end/g, "END");
console.log(str12);

                                                      // ! search()

var str13 = stringTwo.search("end");
console.log(str13);

                                                      // ! slice()

var str14 = stringTwo.slice(2, 4);
console.log(str14);

                                                      // ! split()

var str15 = stringOne.split(" ");
console.log(str15);

                                                     // ! substr()

var str16 = stringTwo.substr(2, 4);
console.log(str16);

                                                    // ! substring()

var str17 = stringTwo.substring(2, 4);
console.log(str17);

                                                   // ! toLowerCase()

var str18 = stringOne.toLowerCase();
console.log(str18);

                                                   // ! toUpperCase()

var str19 = stringOne.toUpperCase();
console.log(str19);

                                                      // ! trim()

var stringThree = "     Subscribe now!      ";
var str20 = stringThree.trim();
console.log(str20);