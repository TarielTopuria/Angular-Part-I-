// ნაწილი 1: ცვლადები და მონაცემთა ტიპები

// const ცვლადები
const username = "TatoTopuria"; // string
const hasSubscription = true; // boolean
const age = 28; // number
const isAdult = age >= 18; // boolean

// let ცვლადი
let score = 500; // number

// ინფორმაციის დაბეჭდვა
console.log(`მომხმარებელი: ${username}`);
console.log(`აქვს გამოწერა: ${hasSubscription}`);
console.log(`ასაკი: ${age}`);
console.log(`სრულწლოვანი: ${isAdult}`);
console.log(`ქულა: ${score}`);

// ნაწილი 2: ოპერატორები და ტიპების გარდაქმნა

// ქულების შეცვლა
score += 150;
console.log(`ახალი ქულა დამატების შემდეგ: ${score}`);

score -= "20";
// აქ JavaScript ავტომატურად გადააქცევს '20' სტრინგს რიცხვად
console.log(`ქულა გამოკლების შემდეგ: ${score}`);

// საბოლოო ქულა და მისი ტიპი
console.log(`საბოლოო ქულა: ${score}, ტიპი: ${typeof score}`);

// შედარება
console.log(`score > 600 ? => ${score > 600}`);
console.log(`score == '630' ? => ${score == "630"}`);
console.log(`score === '630' ? => ${score === "630"}`);

// == ამოწმებს მხოლოდ მნიშვნელობას, ამიტომ '630' სტრინგი გადაიქცა ნამბერად.
// === ამოწმებს როგორც მნიშვნელობას, ასევე ტიპსაც, ამიტომ რიცხვი 630 არ არის სტრინგ '630'-ის ტოლი.

// ნაწილი 3: ლოგიკური ამოცანები
// მომხმარებელს უნდა ჰქონდეს გამოწერა და უნდა იყოს სრულწლოვანი
const canAccessContent = hasSubscription && isAdult;

console.log(`შეუძლია კონტენტზე წვდომა? => ${canAccessContent}`);

// საბოლოო შეტყობინება
console.log(`მომხმარებელი ${username} არის ${age} წლის და აქვს გამოწერა: ${hasSubscription}. 
მას შეუძლია კონტენტზე წვდომა: ${canAccessContent}.`);
