var color = ["red","blue","black","aqua","yellow"];
var i = 0;
var text = "";
var button = document.getElementById("add");
button.onclick = () =>{
    text += `
        <div class="box" style=" background-color:${color[i++]}"></div>
    `;
    // i++;
    i = (i === color.length) ? 0 : i;
    document.getElementById("container").innerHTML = text;
}
