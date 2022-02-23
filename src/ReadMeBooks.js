// CRUD ACTION
// CREATE READ(DISPLAYING/GETTING) UPDATE DESTROY
// REACT(STATE) JS, we can't mutate state when doing this

// {name:string, competed:boolean, id: number(unique)}
// THIS SHOULD NOT BE CHANGED
const originalBooks = [
  { id: 1, Books: "Edgar Poe", completed: false },
  { id: 2, Books: "Charles Dixon", completed: false },
  { id: 4, Books: "Harry Potter", completed: true },
];



/////////////////////////       CREATE       ////////////////////////////////
const newBook = {id: 3,Books: "code",completed: false}

// this works for this case, This is bad for react state
// we do not want to mutate this state
// Bookss.push(newBook)

// clone Bookss and add newBook to clone
let newBooks = [...originalBooks, newBook]


// console.log('original Book', originalBooks)
// console.log ('new Book', newBooks)

// /////////////////          READ        ///////////////////////////
//only in react

/////////////////////         UPDATE      /////////////////////////(toggle complete)
// mutates originalBooks
// originalBooks[1].completed = !originalBooks[1].completed 

let updatedBooks = originalBooks.map((Books)=> {
    if(Books.id === 2){
        return {...Books,completed: !Books.completed}
    }
    return Books
})

const filterBooks = originalBooks.filter((book) => book.completed !== true)



/////////////////////         DELETE         ///////////////////////

const deleteBook = originalBooks.map(Books) => {
  if(Books.completed === true) {
  return {...Books,complete
  }
    return Books
}
console.log(deleteBook)
