const getpromise  = ()=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Done");
        },3000)
    })
}

const getPromiseResult = async() =>{
    console.log("First Line");
    
    try{
        console.log(await getpromise());
    }catch(error){
        console.log(error)
    }

    console.log("Last Line");
}

getPromiseResult();