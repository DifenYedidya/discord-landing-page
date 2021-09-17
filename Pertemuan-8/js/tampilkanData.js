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

//validating data using regex

function formValidation() {

    var uName = document.formValidate.name;
    var uRole = document.formValidate.role;
    var uAvailability = document.formValidate.Availability;
    var uUsia = document.formValidate.usia;
    var uLokasi = document.formValidate.lokasi;
    var uYears = document.formValidate.years; 
    var uEmail = document.formValidate.email;

    if(allLetter(uName)) {
        if(allLetter(uRole)) { 
            if(allLetter(uAvailability)) {
                if(allnumeric(uUsia)) {
                    if(allLetter(uLokasi)) {
                        if(allnumeric(uYears)) {
                            if(ValidateEmail(uEmail)) {
                                clearInputValue();
                            } 
                        }
                    }
                }
            } 
        }
    }
         
    return false;
}

//validate all Letter only
function allLetter(alphabet) { 
    var letters = /^[a-zA-Z][a-zA-Z\s]*$/;
    if(alphabet.value.match(letters)) {
        return true;
    } else {
        alert('This field must have alphabet characters only');
        alphabet.focus();
        return false;
    }
}

//validate all number only
function allnumeric(num) { 
    var numbers = /^[0-9]+$/;
    if(num.value.match(numbers)) {
        return true;
    } else {
        alert('This field must have numeric characters only');
        num.focus();
        return false;
    }
}

// validate email
function ValidateEmail(uemail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(uemail.value.match(mailformat)) {
        return true;
    } else {
        alert("You have entered an invalid email address!");
        uemail.focus();
        return false;
    }
}

//clearing input value without refreshing page
function clearInputValue(){
    nama.value = '';
    role.value = '';
    availability.value = ''; 
    usia.value = '';
    lokasi.value = ''; 
    years.value = ''; 
    email.value = '';
}