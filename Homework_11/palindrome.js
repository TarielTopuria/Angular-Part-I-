function isPalindrome(word) {
  if (!word) return false;
  const normalized = word.toLowerCase();

  for (let i = 0; i < normalized.length / 2; i++) {
    if (normalized[i] !== normalized[normalized.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("level"));
console.log(isPalindrome("Madam"));
console.log(isPalindrome("hello"));
