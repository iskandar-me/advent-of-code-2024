const fs = require("fs");
const input = fs.readFileSync("./input.txt", "utf-8");

const list1 = [];
const list2 = [];
input.split("\n").forEach((row) => {
   const [first, second] = row.trim().split(/\s+/);
   if (first && second) {
      list1.push(+first);
      list2.push(+second);
   }
});

let sortedList1 = list1.sort((a, b) => a - b);
let sortedList2 = list2.sort((a, b) => a - b);

// As every number has its pair, length of both arrays is equal to each other
const arrLength = sortedList1.length;

// Initialize array of distance bewteen each element of the both lists' pair
let distancesApart = [];
for (let i = 0; i < arrLength; i++) {
   distancesApart[i] = Math.abs(sortedList1[i] - sortedList2[i]);
}

const totalDistance = distancesApart.reduce(
   (accumulator, current) => accumulator + current,
   0
);
console.log(totalDistance); //2196996

fs.writeFileSync("./output.txt", totalDistance.toString());
