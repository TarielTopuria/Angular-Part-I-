function processArray(data, filterCallback, mapCallback) {
  return data.filter(filterCallback).map(mapCallback);
}

const users = [
  { name: "Nika", age: 25, isActive: true },
  { name: "Ana", age: 17, isActive: true },
  { name: "Tato", age: 28, isActive: false },
  { name: "Lika", age: 30, isActive: true },
  { name: "Gio", age: 20, isActive: true },
  { name: "Misho", age: 15, isActive: false },
];

function isAdultAndActive(user) {
  return user.isActive && user.age > 18;
}

function formatUserName(user) {
  return `მომხმარებელი: ${user.name}`;
}

const result = processArray(users, isAdultAndActive, formatUserName);

console.log(result);
