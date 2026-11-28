// DOM Selection 

// deklarasi
const judul = document.getElementById("judul");

judul.innerHTML = "INI DIUBAH DENGAN JAVASCRIPT"; 
judul.style.backgroundColor = "pink";
judul.style.color = "white";
judul.style.fontFamily = "roboto";
judul.style.fontStyle = "italic";

// deklarasi by tag name 
const p = document.getElementsByTagName("p");

p[0].style.backgroundColor = "yellow";
p[1].style.backgroundColor = "blue";
p[2].style.backgroundColor = "green";
p[3].style.backgroundColor = "purple";

const a = document.grtElementsByTagName("a");

a[0].style.backgroundColor = "orange";
a[0].style.textAlign = "center";
a[0].innerHTML = "Link Instagram";





for ( i = 0; i < p.length ; i++){
    p[i].style.color = "white";
    p[i].innerHTML = "paragraf diubah ke" +[i];
    p[i].style.fontStyle = "italic";
    p[i].style.fontSize = "25px";
}

// deklarasi byy class name
const l1 = document.getElementsByClassName = ("l1") 
[0];

l1.style.backgroundColor = "lightgreen";
l1[0].innerHTML = "urutan ke - 1";

const l2 = document.getElementsByClassName ("l2")
[0];

l2.style.backgroundColor = "lightblue";

const l3 = document.getElementsByClassName ("l3")
[0];

l3.style.backgroundColor = "lightpink";

// deklarasi query selector 
const sectionA = document.querySelector("Section#a");

sectionA.requestPointerLock.backgroundColor ="lightblue";

const sectionB = document.querySelector("Section#b");

sectionB.style.backgroundColor ="lightyellow";