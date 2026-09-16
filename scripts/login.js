const username = document.getElementById("username");
const password = document.getElementById("password");
const login_button = document.getElementById("login_button");
const paragraph = document.getElementById("paragraph");

const checkCredentials = (username,password)=>{
    if (username.length < 6){
        throw new Error("Username text must be at least 6 characters");
    }
    if (password.length < 10){
        throw new Error("Password text must be at least 10 characters");
    }
}

const login = ()=>{
    let username_text = username.value;
    let password_text = password.value;
    try{
        checkCredentials(username_text,password_text);
        paragraph.classList.add("color-2");
        paragraph.innerText = "Authenticated";
        username.value = "";
        password.value = "";
    }catch(error){
        paragraph.classList.add("color-1");
        paragraph.innerText = error.message;
    }finally{
        console.log("Login mission complete")
    }
}

login_button.addEventListener("click",login)