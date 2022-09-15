const helloWorld = () => {
  console.log("Hello World");
};

helloWorld();

document.querySelectorAll(".list__item__header").forEach((item) => {
 item.addEventListener("click",()=>
 { if (item.nextElementSibling.style.display==="none") {
      item.nextElementSibling.style.display = "block"
 } else {
  item.nextElementSibling.style.display="none"
}
    console.log("list item is clicked");
  });
});


document.querySelectorAll('.list__item__artist').forEach(item => {
  let html = item.innerHTML;
  html = html.replace(/\D/g,'');
  item.innerHTML = html;
})


// document.getElementById(".list__item__artist").innerHTML = "date of birth" {

// }