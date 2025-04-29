const addBtn = document.getElementById("add-btn");
const titleInput = document.getElementById("title");
const priceInput = document.getElementById("price");
const imgInput = document.getElementById("imgurl");
const descriptionInput = document.getElementById("description");
const locationInput = document.getElementById("location");

addBtn.addEventListener("click", () => {
  const data = {
    title: titleInput.value,
    price: priceInput.value,
    imgUrl: imgInput.value,
    description: descriptionInput.value,
    location: locationInput.value,
  };

  console.log(data);
});
