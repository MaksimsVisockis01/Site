console.log("Java is working");

const point = document.getElementById('point');
let produkti = [];

window.addEventListener('load', () => {
    produkti = JSON.parse(localStorage.getItem("produkti") || "[]");
    console.log(produkti)
    render();
});

document.getElementById('jaunsProdukts').addEventListener('click', () => {
    point.style.display = 'block';

})


