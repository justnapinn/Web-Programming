function flNameFun(){
    const fname = document.getElementById("fnameinp").value;
    const lname = document.getElementById("lnameinp").value;
    const fullName = fname + ", " + lname;
  
    document.getElementById("fullName").value = fullName;
}
function weeklyEarnFun(){

}

function calculate() {
    flNameFun();
    weeklyEarnFun();
  }