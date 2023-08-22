var user = document.getElementById("username");
console.log(user)
var pass = document.getElementById("password");
console.log(pass)
var submit = document.getElementById("submit");

login = () =>{
    var username = "Sok"; //set username
    var password = 1234; // set password

    if(user.value!= "" && pass.value !=""){
        if(user.value == username && pass.value == password){
            swal({
                title: "Login Success",
                text: "You have successfully login",
                icon: "success",
            }).then(result=>{ // condition true
                if(result){
                    window.location.href = "dashboard.html"
                }
            }).catch(err =>{
                if(err){
                    swal({
                        title: "Have Something Wrong ",
                        text: "Error occured",
                        icon: "error",
                    })
                }
            });
        }
        else{
            swal({
                title: "Have Something Wrong ",
                text: "Error occured",
                icon: "error",
            })
        }
    }
    clear();
}

clear = () =>{
    user.value = "";
    pass.value = "";
}