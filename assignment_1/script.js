function enter(){
    let inp = Number(document.getElementById('inp').value);
    let div = document.getElementsByClassName('result');
    div[0].innerHTML = "";
    
    for(let i=0;i<inp;i++)
    {
        let image = document.createElement('img');
        image.id = 'b' + i;
        let check = document.createElement('input');
        check.id = 'c' + i;
        check.type = "checkbox";
        image.src = "./assignment1_images/Light_Bulb_PNG.png";
        image.setAttribute("width", "100px");
        check.onchange = function(){
            toggle(i);
        };
        div[0].appendChild(image);
        div[0].appendChild(check);
    }
}

function toggle(i)
{
    let bulb = document.getElementById('b' + i);
    let check = document.getElementById('c' + i);
    if(check.checked)
        bulb.src = "./assignment1_images/Yellow_Light_Bulb.png";
    else
        bulb.src = "./assignment1_images/Light_Bulb_PNG.png";
}