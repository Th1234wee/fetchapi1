const menu = [
    {
        name : "Home",
        url  : "https://web.facebook.com/?_rdc=1&_rdr"
    },
    {
        name : "About",
        url : "https://www.youtube.com",
    },
    {
        name : "Sport"
    },
    {
        name : "News"
    },
    {
        name : "Contact"
    }
]
var text = "";
for(let i in menu){
    text += `
        <li><a href="${menu[i]["url"]}">${menu[i]["name"]}</a></li>
    `;
}
document.getElementById("nav").innerHTML = text;

const product = [
    {
        image: "Image/2.jpg",
        title: "The Best Shoes",
        desc : "Best Shoes for men and women with best lifestyle and comfortable"
    },
    {
        image: "Image/3.jpg",
        title: "The Best Shoes for trip",
        desc : "Best Shoes for men and women with best lifestyle and comfortable"
    },
    {
        image: "Image/4.jpg",
        title: "The Best Shoes for sport",
        desc : "Best Shoes for men and women with best lifestyle and comfortable"
    },
    {
        image: "Image/5.jpg",
        title: "The Best Shoes for date",
        desc : "Best Shoes for men and women with best lifestyle and comfortable"
    }
];
var pro = '';
for(let item in product){
    pro += `
        <div class="col-3 h-100">
            <div class="box">
            <img src="${product[item]["image"]}" alt="" />
            <div class="desc">
                <div class="title">
                    <h4>${product[item]["title"]}</h4>
                </div>
                <div class="text">
                    <p>
                        ${product[item]["desc"]}
                    </p>
                </div>
                <button class="btn btn-success ms-5">Detail</button>
                <button class="btn btn-primary">Add To Cart</button>
            </div>
            </div>
        </div>
    `;
}
document.getElementsByClassName("row")[0].innerHTML = pro;