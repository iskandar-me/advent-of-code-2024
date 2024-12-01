const { log } = require("console");
const fs = require("fs");
const input = fs.readFileSync("../input.txt", "utf-8");

const list1 = [];
const list2 = [];

input.split("\n").forEach((row) => {
   const [first, second] = row.trim().split(/\s+/);
   if (first && second) {
      list1.push(+first);
      list2.push(+second);
   }
});

// Create frequency  for list2 elements
const frequencyOfList2Elements = {};
list2.forEach((num) => {
   frequencyOfList2Elements[num] = (frequencyOfList2Elements[num] || 0) + 1;
});

// Calculate similarity scores
const similarityScores = list1.map(
   (num) => num * (frequencyOfList2Elements[num] || 0)
);

// Calculate total similarity score
const totalSimilarityScore = similarityScores.reduce(
   (acc, cur) => acc + cur,
   0
);
console.log(totalSimilarityScore); //
//23655822

fs.writeFileSync("./output.txt", totalSimilarityScore.toString());
