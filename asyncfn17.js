// Callback Chaining

function rollNumber(num,time,nextroll) {
    setTimeout(
        () => {
        console.log("Roll no. is", num);
        if (nextroll) nextroll();
    },time)
}

rollNumber(12112, 1000, () => {
    rollNumber(12113, 2000, () => {
        rollNumber(12114, 3000, () => {
            rollNumber(12115, 4000, () => {
                rollNumber(12115, 5000);
            });
        });
    });
});