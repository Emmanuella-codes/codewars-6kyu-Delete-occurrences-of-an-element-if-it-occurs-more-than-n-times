// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Delete occurrences of an element if it occurs more than n times</h1>`;

const deleteNth = (arr, n) => {
  let count = {}
  return arr.filter((num) => {
    count[num] = (count[num] || 0) + 1
    return count[num] <= n
  })
}
console.log(deleteNth([20,37,20,21], 1)) // [20,37,21]
console.log(deleteNth([1,1,3,3,7,2,2,2,2], 3)) // [1, 1, 3, 3, 7, 2, 2, 2]

