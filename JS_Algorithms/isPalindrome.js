function isPalindrome(str) {
  let cleaned = str.toLowerCase();

  cleaned = cleaned.replace(/[^a-z0-9]/g, "");

  let reversed = cleaned.split("").reverse().join("");

  return cleaned === reversed;
}

console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome("race a car"));
console.log(isPalindrome("level"));
