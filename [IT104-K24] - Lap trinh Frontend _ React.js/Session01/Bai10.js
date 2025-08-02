function groupStrings(arr) {
  const map = new Map();

  arr.forEach(str => {
    const key = str.split('').sort().join('');
    if (!map.has(key)) {
      map.set(key, []);
    }
    map.get(key).push(str);
  });

  return Array.from(map.values());
}

// Ví dụ:
const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
const output = groupStrings(input);
console.log(output);
// Kết quả: [["eat","tea","ate"], ["tan","nat"], ["bat"]]
