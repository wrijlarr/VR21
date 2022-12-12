const client_id = "PgvWQdaUdD0cEdSUeZyLm57GQ0QrqyRXGNiqNg4bpsM"; // Create an account unsplash tp hey client ID;
const searchStr = "cars";



fetch(
  `https://api.unsplash.com/search/photos?query=cars&per_page=20&client_id=${client_id}`
)
  .then((response) => response.json())
  .then((data) => {
    const container = document.querySelector(".container");

    for (let i = 0; i < data.results.length - 1; i++) {
    const img = document.createElement("img");
    img.setAttribute("src", data.results[i].urls.thumb);

      container.append(img);
    }
  });