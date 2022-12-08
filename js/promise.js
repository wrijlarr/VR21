fetch("https://jsonplaceholder.typicode.com/posts&API_KEY=myAPIKEY")
    .then((response) => response.json())
    .then((json)) => {
        const container = document.querySelector(".container")

        // debugger;

        for (let i = 0; i < json.length - 1; i++) {
            const p = document.createElement
        }
    }