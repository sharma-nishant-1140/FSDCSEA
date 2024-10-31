let container = document.getElementsByClassName("container");
let color = prompt("Enter color : ");
container[0].innerHTML = `<div style=color:${color}>FLEX</div>`;
let span = document.createElement("span");
span.innerText = "HELLO WORLD";
container[0].appendChild(span);

let get_container = document.getElementsByClassName("get_container");

function get()
{
    let image = document.createElement('img');
    image.src = "../images/amazon.png";
    let size = prompt("Enter image size : ");
    size += "px";
    image.setAttribute("width", `${size}`);
    console.log(image);
    get_container[0].appendChild(document.createElement('br'));
    get_container[0].appendChild(image);
}

let button2 = document.getElementById("btn2");

loopdata = () => {for(let i=1;i<=10;i++){document.write(i);}}

const promise1 = new Promise(
    (resolve,reject) => {
        let age = number(prompt("Enter your age : "));
        if(age < 18)
        {
            console.log("YOU ARE UNDER-AGED !");
        }
        else
        {
            console.log("YOU CAN ENTER !");
        }
    }
);

promise1.then((message) => console.log(message)).catch(error => {console.log(error)}).finally(message => {console.log("ALL RESOURCES ARE CLOSED")});

const promise2 = new Promise(
    (resolve,reject) => {
        resolve({name:"Nishkarsh", branch:"CSE"});
    }
);

promise2.then((data) => console.log(data)).catch(error => {console.log(error)});

let response = fetch("https://dummyjson.com/products");
response.then(data => {
    console.log(data);
    data.json().then(res => {
        let list = document.createElement('div');
        for(let i=0;i<5;i++)
        {
            let data = res.products[i].id + " "  + res.products[i].title;
        }
        container[0].innerHTML = data;
    });
});