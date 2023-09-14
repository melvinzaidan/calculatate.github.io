var heightInput = document.querySelector(".height-input-field");
var weightInput = document.querySelector(".weight-input-field");
var calculateButton = document.querySelector(".calculate");
var BMI, height, weight;

function myFunction() {
    height = heightInput.value;
    weight = weightInput.value;

    BMI = weight/(height**2);



    alert("bmi anda adalah = "+  BMI);
}//berat bagi tinggi kali 2



var panjangInput = document.querySelector(".panjang");
var lebarInput = document.querySelector(".lebar");
var calculateeButton = document.querySelector(".calculate");
var BMI, panjang, lebar;

function luas() {
    panjang = panjangInput.value;
    lebar = lebarInput.value;

    BMI = lebar*panjang;



    alert("luas anda adalah = "+  BMI);
}//lebar kali panjang


var alasInput = document.querySelector(".alas");
var tinggiiiInput = document.querySelector(".tinggiii");
var calculateButton = document.querySelector(".calculateee");
var BMI, alas, tinggiii;

function luassegi() {
    alas = alasInput.value;
    tinggiii = tinggiiiInput.value;

    BMI = tinggiii*alas/2;



    alert("luassegi anda adalah = "+  BMI);
}//alas kali tinggi bagi 2
