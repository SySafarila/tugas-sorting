let fruits = ["Semangka", "Apel", "Mangga", "Pisang", "Anggur", "Sirsak"];

// Tanpa sorting
let fruitsMap = fruits.map((data) => {
  return `<li>${data}</li>`;
});
document.getElementById("fruits").innerHTML = fruitsMap.join("\n"); // Menampilkan data

// Dengan sorting
const fruitsSorting = () => {
  let sort = fruits.sort(); // Sorting (Mengurutkan) data

  // Memisahkan buah-buah
  let result = sort.map((fruit) => {
    return `<li>${fruit}</li>`;
  });

  // Menampilkan data
  return (document.getElementById("fruitsSorting").innerHTML =
    result.join("\n"));
};

// Dengan sorting terbalik
const fruitsSortingReverse = () => {
  let sort = fruits.sort().reverse(); // Sorting (Mengurutkan) data secara ascending

  // Memisahkan buah-buah
  let result = sort.map((fruit) => {
    return `<li>${fruit}</li>`;
  });

  // Menampilkan data
  return (document.getElementById("fruitsSortingReverse").innerHTML =
    result.join("\n"));
};

// bubbleSort
let bubbleSort = (inputArr) => {
  let len = inputArr.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < len; i++) {
      if (inputArr[i] > inputArr[i + 1]) {
        let tmp = inputArr[i];
        inputArr[i] = inputArr[i + 1];
        inputArr[i + 1] = tmp;
        swapped = true;
      }
    }
  } while (swapped);

  let result = inputArr.map((fruit) => {
    return `<li>${fruit}</li>`;
  });

  // Menampilkan data
  return (document.getElementById("bubbleSort").innerHTML = result.join("\n"));
};

const sortingWithBubbleSort = () => {
  bubbleSort(fruits);
};
