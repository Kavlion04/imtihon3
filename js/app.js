const button = document.querySelector("#button");
const popup = document.querySelector("#popup");

button.addEventListener("click", () => {
    popup.style.display = popup.style.display === "none" ? "block" : "none";
});





document.getElementById("more-info-btn").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("workspace-choice").style.display = "none";
    document.getElementById("more-info").style.display = "block";
  });
  
  document.getElementById("done-info-btn").addEventListener("click", function () {
    document.getElementById("more-info").style.display = "none";
    document.getElementById("workspace-choice").style.display = "block";
  });






  
  document.getElementById("more-info-btn2").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("workspace-choice2").style.display = "none";
    document.getElementById("more-info2").style.display = "block";
  });
  
  document.getElementById("done-info-btn2").addEventListener("click", function () {
    document.getElementById("more-info2").style.display = "none";
    document.getElementById("workspace-choice2").style.display = "block";
  });



  document.getElementById("more-info-btn3").addEventListener("click", function (e) {
    e.preventDefault();
    document.getElementById("workspace-choice3").style.display = "none";
    document.getElementById("more-info3").style.display = "block";
  });
  
  document.getElementById("done-info-btn3").addEventListener("click", function () {
    document.getElementById("more-info3").style.display = "none";
    document.getElementById("workspace-choice3").style.display = "block";
  });