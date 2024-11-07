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
    const jokeDisplay = document.getElementById("jokeDisplay");
    let jokeText = data.joke || `${data.setup} - ${data.delivery}`;
    jokeDisplay.innerHTML = `<h2>${jokeText}</h2>`;

    // Update character count
    document.getElementById("charCount").textContent = jokeText.length;
};

const clearJoke = () => {
    document.getElementById("jokeDisplay").innerHTML = "";
    document.getElementById("charCount").textContent = "0";
};
