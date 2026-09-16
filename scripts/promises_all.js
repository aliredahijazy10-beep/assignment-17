const getPromiseOne = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Promise One Done")
        },1000)
    })
}

const getPromiseTwo = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Promise Two Done")
        },2000)
    })
}

const getPromiseThree = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            reject("Promise three Error")
        },3000)
    })
}

const getPromisesAll = ()=>{
    Promise.all([getPromiseOne(),getPromiseTwo(),getPromiseThree()])
        .then(([promise_data_1,promise_data_2,promise_data_3])=>{
            console.log(promise_data_1);
            console.log(promise_data_2);
            console.log(promise_data_3);
        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=>{
            console.log("Get promise all called")
            console.log("-------Get Promise All Ended---------")
        })
}

getPromisesAll();

const getPromisesAllSetteled = ()=>{
    Promise.allSettled(([getPromiseOne(),getPromiseTwo(),getPromiseThree()]))
        .then(([promise_data_1,promise_data_2,promise_data_3])=>{
            console.log(promise_data_1);
            console.log(promise_data_2);
            console.log(promise_data_3);
        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=>{
            console.log("Get promiseallsettled called")
            console.log("-------Get Promise All Settled Ended---------")
        })
}

getPromisesAllSetteled();

const getPromisesRace = ()=>{
    Promise.race([getPromiseOne(),getPromiseTwo(),getPromiseThree()])
        .then((data)=>{
            console.log(data);
        })
        .catch((error)=>{
            console.log(error)
        })
        .finally(()=>{
            console.log("Get promiserace called")
            console.log("-------Get Promise Race Ended---------")
        })
}

getPromisesRace();