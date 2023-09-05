let arr = ["show1", "show2", "show3", "show4", "show5"];
let i = 0;
let j = 0;
let show = () => {
    // alert("Hi");
    i++;
    if (i == arr.length) {
        i = 0;
    } else if (i < 0) {
        i = arr.length - 1;
    } else {
        show_photo.src = "img/" + arr[i] + ".jpg";
        show_photo.classList.toggle("ani_class");


    }
}
let toggleAni = () => {
    show_photo.classList.remove("ani_class");
}
let loadShow = () => {
    setInterval(show, 1000);
    setInterval(toggleAni, 500);
}

let plus = (e) => {
    let parent = e.parentNode;
    let childarr = parent.children;
    // alert(parent);
    // alert(childarr);
    // alert(childarr[1]);
    if (childarr[1].value == '') {
        childarr[1].value = 1;
    } else {
        childarr[1].value = parseInt(childarr[1].value) + 1;
    }
}

let minus = (e) => {
    let parent = e.parentNode;
    let childarr = parent.children;
    // alert(parent);
    // alert(childarr);
    // alert(childarr[1]);
    if (childarr[1].value == '') {
        alert(" You haven't chosen even one! ");
    } else if (childarr[1].value == 1) {
        childarr[1].value = "";
    } else {
        childarr[1].value = parseInt(childarr[1].value) - 1;
    }
}