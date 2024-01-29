//    map

//const myNumber=[1,2,3,4,5,6,7,8,9,10]
//   const newNums= myNumber.map((num)=> num + 10)


//   const newNums= myNumber.map((num)=> {return  num + 10})

//   const newNums= myNumber.forEach((num)=> {
//     console.log(num+10)
//     return  num }) 

  

//  +++++++   chaining ++++++++++

//const newNums =myNumber
            //    .map((num) => num *10 )
            //     .map((num) => num+1 )
            //     .filter((num) => num>=40 )

  //console.log(newNums)




  // ++++++++++++  Reduce ++++++++++


  const myNums = [1,2,3]
//   const myTotal = myNums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval:${currval}`);
//     return acc + currval
//   },0)


//write in arrow function


const myTotal = myNums.reduce( (acc,curr) => acc+curr , 0)
  console.log(myTotal);


  const shoppingCart =[
    {
        itemName: "js course",
        price:3000
    },

    {
        itemName: "c++ course",
        price:1999
    },

    {
        itemName: "java course",
        price:3999
    },

    {
        itemName: "python course",
        price:4999
    },  
  ]

 const priceToPay= shoppingCart.reduce((acc,item) => acc+item.price, 0);
 console.log(priceToPay)
 