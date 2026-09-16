console.log("Line 1");

setTimeout(()=>{
    console.log("Line 2");
},2000);

console.log("Line 3");

//Explanation: line 1 and line 2 will be logged first because they'll not wait the 2 sec to be finished.