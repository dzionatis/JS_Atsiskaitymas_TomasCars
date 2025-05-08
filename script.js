const carsWrapper = document.getElementById("cars-wrapper");

const fetchCars = async () => {
  const response = await fetch(
    "https://6810691f27f2fdac241140f8.mockapi.io/cars"
  );

  const data = await response.json();
  return data;
};

const buildCards = (data) => {
  data.forEach((d) => {
    const card = document.createElement("a");

    card.href = `./car/index.html?id=${d.id}`;

    card.classList.add("card");

    const title = document.createElement("h2");
    title.textContent = d.title;

    const img = document.createElement("img");
    img.src = d.imgUrl;

    const price = document.createElement("h3");
    price.textContent = d.price + "€";

    card.append(img);
    card.append(title);
    card.append(price);

    carsWrapper.append(card);
  });
};

const buildScreen = async () => {
  const cars = await fetchCars();
  buildCards(cars);
};

buildScreen();
