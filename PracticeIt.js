let people = [{id: 1,name: 'toby',age: 21},{id: 2,name: 'jon',age: 22}]

// write a function that takes a array of objects [{name:string, age:number}]
// and returns an new array of strings ['name is age', 'name is age'] 
// (use the actual name and age from object)

const about = (peeps) => {
  return peeps.map((param) => {
    return `${param.name} is ${param.age}`
  })

};
let peepString = about(people)
console.log (peepString)






// write a function that takes an array of objects [{name:string, age:number}]
// and takes a single object and returns a new array of with the object added
const addPeep = (peeps,peep) => {
  let newPeople = {...peeps,peep}
  return newPeople
};


const newPeople = addPeep(people, {id:3, name:'new', age: 32})
console.log ('new people' , newPeople)


// write a function that takes an array of objects [{name:string, age:number}]
// and an id and adds on to the age of that persons and returns a new array
const updatePeep = (peeps,id) => {
  let updatePeepsYo = peeps.map((p) => {
    if(p.id === id){
      return {...p,age: p.age + 1}
  }
  return p
})
return updatePeepsYo
  
};

const isToby19 = updatePeep(people,1)
console.log(isToby19)

// write a function that takes an array of objects [{name:string, age:number}]
// and an id and remove that person from array
const deletePeep = (things,id) => {
  return things.filter(thing => {
    return thing.id != id
  })
  
  
};

const f1 = deletePeep(people)
const f2 = deletePeep([{id:1}])
console.log('f1',f1)
console.log('f2',f2)





