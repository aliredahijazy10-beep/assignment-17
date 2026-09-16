const get_data_from_server = (condition)=>{
    return new Promise((resolve,reject) =>{
        if (condition == true){
            resolve("Done");
        }
        reject("Error")
    })
}

const promise = get_data_from_server(false);

promise

    .then((data)=>{
        console.log(data);
    })
    .catch((error)=>{
        console.log(error);
    })
    .finally(()=>{
        console.log("promise called");
    })