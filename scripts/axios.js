const url = "https://jsonplaceholder.typicode.com/todos";

const promise = axios.get(url)

promise
    .then((result)=>{
        console.log(result.data)
    })
    .catch((error)=>{
        console.log(error)
    })
    .finally(()=>{
        console.log("Axios called")
    })