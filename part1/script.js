const myNums = [1,2,3,4,5,6,7,8,9,10]
//const newNums =  myNums.filter((num) => num>4) 
const newNums =  myNums.filter((num) =>{
    return num>4
}) 
 
//console.log(newNums)


const books =[
    {title: 'Book one', genre:'fiction', publish:1981, edition:2004},
    {title: 'Book two', genre:'Non-fiction', publish:1992, edition:2006},
    {title: 'Book three', genre:'history', publish:1989, edition:2008},
    {title: 'Book four', genre:'comedy', publish:1970, edition:2010},
    {title: 'Book five', genre:'mythology', publish:1999, edition:2014},
    {title: 'Book six', genre:'drama', publish:1978, edition:2017},
    {title: 'Book seven', genre:'history', publish:1987, edition:2020},
    {title: 'Book eight', genre:'comedy', publish:1990, edition:2000},
    {title: 'Book nine', genre:'drama', publish:1983, edition:2001},

];
//const userBooks = books.filter((bk) => bk.genre === 'history')
let userBooks = books.filter((bk) => bk.genre === 'drama')
//  userBooks = books.filter((bk) => {
//      return bk.publish>=1990 
// })


//  userBooks = books.filter((bk) => {
//      return bk.publish>=1990 &&  bk.genre === 'comedy' ;
// })


 userBooks = books.filter((bk) => {
     return bk.genre==='comedy' &&  bk.publish === 1990 && bk.edition===2000;
})


console.log(userBooks)