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
