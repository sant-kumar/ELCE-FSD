/*

const getData = () => {
    fetch("https://api.github.com/users/Aatif09")
        .then((res) => res.json())
        .then((data) => {
            display(data);
        })
        .catch((error) => console.error("Error fetching data:", error));
};


const display = (data) => {
    const parentDiv = document.getElementById("parent");
    parentDiv.innerHTML = `
        <h2>${data.name}</h2>
        <p><strong>Username:</strong> ${data.login}</p>
        <p><strong>Bio:</strong> ${data.bio}</p>
        <p><strong>Public Repos:</strong> ${data.public_repos}</p>
    `;
};*/

//converted code in async function

const getData = async () => {
    try {
        const response = await fetch("https://api.github.com/users/Aatif09");
        const data = await response.json();
        display(data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
        };


        const display = (data) => {
            const parentDiv = document.getElementById("parent");
            parentDiv.innerHTML = `
                <h2>${data.name}</h2>
                <p><strong>Username:</strong> ${data.login}</p>
                <p><strong>Bio:</strong> ${data.bio}</p>
                <p><strong>Public Repos:</strong> ${data.public_repos}</p>
            `;
        };