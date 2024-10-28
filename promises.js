//CallBack Hell 
//Promises - when we have required any data from anywhere, it's have three states pending, reject, fullfilled.
//creation of promises

/*let promise = new Promise((resolve,reject) => {
    console.log("First Promise");
    resolve("This is my Promise");
});
promise.then(console.log("My console promise")); //here console rewrite the above resolve*/


/*let promise = new Promise((resolve,reject) => {
    console.log("First Promise");
    reject({user: "Sant", Pass: "0123"});
})
promise.then((data) => {
    console.log(data);
    return data;
}).then((response) => {
    console.log(response.user);
}).catch((error) => {
    console.log("error");
})*/

function roll(num, delay) {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            console.log("Roll no. is " + num);
            resolve();
        },delay)
    })
}

//Using async function because 

async function rroll() {
    await roll(122, 1000);
    await roll(123, 2000);
    await roll(124, 3000);
}
rroll();

/*roll(121, 1000).then(() => {
    roll(122, 1000).then(() => {
        roll(123, 1000).then(() => {
            console.log("Viva Completed");
        })
    })
})*/