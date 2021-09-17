//get textcontent from profile
var getNama = document.getElementById("name").textContent;
var getRole = document.getElementById("role").textContent;
var getAvailability = document.getElementById("availability").textContent;
var getUsia = document.getElementById("usia").textContent;
var getLokasi = document.getElementById("lokasi").textContent;
var getYears = document.getElementById("pengalaman").textContent;
var getEmail = document.getElementById("email").textContent;

//get input 
var nama = document.getElementById("fname");
var role = document.getElementById("frole");
var availability = document.getElementById("favailability");
var usia = document.getElementById("fusia");
var lokasi = document.getElementById("flokasi");
var years = document.getElementById("fyears");
var email = document.getElementById("femail");

//get data
function getData(){
    nama.value = getNama;
    role.value = getRole;
    availability.value = getAvailability; 
    usia.value = getUsia;
    lokasi.value = getLokasi; 
    years.value = getYears; 
    email.value = getEmail;
}

//submit data
function saveData(){
    document.getElementById("name").innerHTML = nama.value;
    document.getElementById("role").innerHTML = role.value;
    document.getElementById("availability").innerHTML = availability.value;
    document.getElementById("usia").innerHTML = usia.value;
    document.getElementById("lokasi").innerHTML = lokasi.value;
    document.getElementById("pengalaman").innerHTML = years.value;
    document.getElementById("email").innerHTML = email.value;
}