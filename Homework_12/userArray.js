const userArr = [
  { id: 1, name: "George", age: 25, isActive: true },
  { id: 2, name: "Anna", age: 17, isActive: false },
  { id: 3, name: "Luka", age: 28, isActive: true },
  { id: 4, name: "Maria", age: 16, isActive: true },
  { id: 5, name: "Sandro", age: 35, isActive: false },
];

console.log(returnAdults(userArr));

function returnAdults(users) {
    if(typeof(users) != "object"){
        return ("Error: input array");
    }
    return (`Adults: ${users.filter(x => x.age >= 18).map(x => x.name)}`);
}
