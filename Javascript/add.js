var submit = document.getElementById("submit");


var text = "";
submit.addEventListener("click",()=>{
    var user = document.getElementById("user").value;
    var pass = document.getElementById("pass").value;
    text += `
        <tr>
            <td>${user}</td>
            <td>${pass}</td>
        </tr>
    `;
    // console.log(user);
    // console.log(pass)
    document.getElementById("display").innerHTML = text;
    clear();
})
clear = () =>{
    user.value = "";
    pass.value = "";
}