const getProducts = async () => {
  const productsRequest = await fetch("http://127.0.0.1:3000/");
  return await productsRequest.json();
};

document.addEventListener("DOMContentLoaded", async () => {
  const products = await getProducts();
  const appDiv = document.getElementById("app");
  appDiv.innerHTML += `<h1>Products</h1>`;
  products.forEach((product) => {
    appDiv.innerHTML += `<h3>${product}</h3>`;
  });
});
