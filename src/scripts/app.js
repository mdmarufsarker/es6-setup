// js dom
const btn = document.getElementById("btn");
const userName = document.getElementById("name");
const p = document.getElementById("thanks");

btn.addEventListener("click", () => {
  let name = prompt("Enter your name: ");
  if(name === ''){
    name = prompt("At 1st Enter your name: ");
  }else{
    p.style.display = "block";
    userName.innerText = name;
    setTimeout(() => {
      console.log("😄");
      p.style.display = "none";
    }, 5000);
  }
  
});
