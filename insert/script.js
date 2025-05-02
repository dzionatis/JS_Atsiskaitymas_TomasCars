const addBtn = document.getElementById("add-btn");
const titleInput = document.getElementById("title");
const priceInput = document.getElementById("price");
const imgInput = document.getElementById("imgurl");
const descriptionInput = document.getElementById("description");
const locationInput = document.getElementById("location");
const message = document.getElementById("message");

const insertCar = async (data) => {
  const response = await fetch(
    "https://6810691f27f2fdac241140f8.mockapi.io/cars",
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    }
  );

  const cars = await response.json();

  return cars;
};

addBtn.addEventListener("click", async () => {
  const data = {
    title: titleInput.value,
    price: +priceInput.value,
    imgUrl: imgInput.value,
    description: descriptionInput.value,
    location: locationInput.value,
  };

  if (isNaN(data.price)) {
    message.classList.add("red");
    message.textContent = "Please insert price in numbers";
    return;
  }

  if (
    !data.title ||
    !data.price ||
    !data.imgUrl ||
    !data.description ||
    !data.location
  ) {
    message.textContent = "Please fill all the fields";
    message.classList.add("red");
    return;
  }

  const car = await insertCar(data);

  if (car) {
    message.textContent = "Car added successfully";
    message.classList.add("green");

    setTimeout(() => {
      window.location.replace("../index.html");
    }, 3000);
  }

  console.log("car", car);
});
