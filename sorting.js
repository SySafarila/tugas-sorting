let fruits = ["Semangka", "Apel", "Mangga", "Pisang", "Anggur", "Sirsak"];

// Tanpa sorting
let fruitsMap = fruits.map((data) => {
  return `<li>${data}</li>`;
});
document.getElementById("fruits").innerHTML = fruitsMap.join("\n");

// Dengan sorting
const fruitsSorting = () => {
  let sort = fruits.sort();
  let result = sort.map((fruit) => {
    return `<li>${fruit}</li>`;
  });

  return (document.getElementById("fruitsSorting").innerHTML =
    result.join("\n"));
};
