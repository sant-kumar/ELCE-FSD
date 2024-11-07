const getData = async () => {
    try {
        const response = await fetch("https://v2.jokeapi.dev/joke/Any");
        const data = await response.json();
        display(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        };
        const display = (data) => {
            const parentDiv = document.getElementById("get");
            parentDiv.innerHTML = `
                <h2>${data.joke}</h2>
            `;
        };