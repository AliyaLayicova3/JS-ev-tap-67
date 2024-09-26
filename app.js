let showBtn = document.querySelector(".btn-primary");
let container = document.querySelector(".con-div")
showBtn.addEventListener("click", ()=>{
    container.innerHTML = "";
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res=>res.json())
    .then(data=>
        data.forEach( user => {
            let div = document.createElement("div");
            div.classList.add("item");
            let img = document.createElement("img");
            img.src = "./users.png"
            let p1 = document.createElement("p");
            p1.innerText = user.name;
            let p2 = document.createElement("p");
            p2.innerText = user.username;
            let p3 = document.createElement("p");
            p3.innerText = user.email;
            let p4 = document.createElement("p");
            p4.innerText = user.address.city
            div.append(img,p1,p2,p3,p4);
            container.append(div);
        })
    );
hideBtn.style.display = "block";
showBtn.style.display = "none";
container.style.display = "flex";
})

hideBtn.addEventListener("click", ()=>{
    container.style.display = "none";
    hideBtn.style.display = "none";
    showBtn.style.display = "block";
})
