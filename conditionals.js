// COMPARISON
// BIGGER : >
// LESS : < 
// EQUAL : == 
// GREATER THAN OR EQUAL : >= 
// LESS THAN OR EQUAL : <= 
// NOT EQUAL : != 
// AND : && 
// OR : || }


console.log(5>10);

console.log(5<10);

console.log(5==10);

console.log(10==10);

console.log(5<=10);

console.log(5>=10);

console.log(10==10.1);

console.log(10!=10.1);


// it's check value and type.
console.log(10===10);  
console.log(10==='10'); 


// IF , ELSE CONDITIONS
const age = 12;
if(age>10){
    console.log("you can enter the fair")
}else{
    console.log("you can't");
}

//NESTED IF ELSE
let old = 19 ;
withAdult = true ;
if(age>15){
    console.log("you can enter the fair");
    if(withAdult){
        console.log("you can enter the scary house");
    }else{
        console.log("you can't enter rhe scary house");
    }
}else{
    console.log("you can't enter the fair")
}

// && , ||
const salary = 25000 ;
const isBcs = true;
const height =68;
if(salary>20000 && height>66){
    console.log("asho biye dibo");
}else{
    console.log("biye hobe na");
}

if((salary>25000)||height<72 && isBcs ){
    console.log("kobul");
}else{
    console.log(bekul);
}

// MULTI LEVEL CONDITION
const price=2500;
if(price>=5000){
    const discount =price*10/100;
    
    const payAmount =price-discount;
    console.log(payAmount);
}
else if(price==2500){
    const discount=price*5/100;
    
    const payAmount=price-discount;
    console.log(payAmount)
}
else{
    console.log(price);
}

// TERNARY OPERATOR
let money = 500;
money >=500 ? console.log("vote dibo"): console.log("ghumabo")
