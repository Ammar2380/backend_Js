// we use async prgramming to manage programme which taking more time to other

// assync await >> promise chain >> callback hell

function API(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("data1")
            resolve("success")
        }, 4000);
    })
}

async function getweatherdata() {
    await API(); // 
    await API(); // after 1 one
    await API(); // 
}