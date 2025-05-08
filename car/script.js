const url = new URL(window.location.href);
const id = url.searchParams.get("id");

const title = document.getElementById("title");
const description = document.getElementById("description");
const img = document.getElementById("img");
const deleteBtn = document.getElementById("delete-btn");
const message = document.getElementById("message");

const price = document.getElementById("price");
const carLocation = document.getElementById("location");

console.log(id);

const fetchCarById = async () => {
  const response = await fetch(
    `https://6810691f27f2fdac241140f8.mockapi.io/cars/${id}`
  );

  const data = await response.json();
  return data;
};

const deleteCarById = async () => {
  const response = await fetch(
    `https://6810691f27f2fdac241140f8.mockapi.io/cars/${id}`,
    {
      method: "DELETE",
    }
  );

  const data = await response.json();
  return data;
};

const insertDataToScreen = (car) => {
  console.log("Car data received:", car);
  title.textContent = car.title;
  description.textContent = car.description;
  img.src = car.imgUrl;
  price.textContent = "Kaina:" + car.price + "$";
  carLocation.textContent = "Miestas:" + car.location;
};

const buildScreen = async () => {
  const car = await fetchCarById();
  insertDataToScreen(car);
};

buildScreen();

deleteBtn.addEventListener("click", async () => {
  const car = await deleteCarById();
  if (car) {
    message.textContent = "Car was deleted successfully";

    setTimeout(() => {
      window.location.replace("../index.html");
    }, 2000);
  }
});
