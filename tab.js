const contents = document.querySelectorAll(".cont");
const tabs = document.querySelectorAll(".tab");

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    contents.forEach((content) => {
      content.classList.remove("open");
    });
    const targetId = tab.getAttribute("data-target");
    const targetContent = document.getElementById(targetId);
    targetContent.classList.toggle("open");
  });
});




// const tabs = document.querySelectorAll(".tab");
// const conts = document.querySelectorAll(".cont");

// tabs.forEach((btn) => {
//     btn.addEventListener("click", () => {
//         let cont = document.querySelector("#" + btn.getAttribute("data-target"));

//         if (cont.classList.contains("open")) {
//             cont.classList.remove("open");
//         } else {
//             cont.classList.add("open");
//         }
//     });
// });



// for (let i = 0; i < tabs.length; i++) {
//     tabs[i].addEventListener("click", () => {
//       let cont = document.querySelector(
//         "#" + tabs[i].getAttribute("data-target")
//       );
  
//       if (cont.classList.contains("active")) {
//         cont.classList.remove("active");
//       } else {
//         cont.classList.add("active");
//       }
//     });
//   }



// const tabs = document.querySelectorAll(".tab");

// for (let i = 0; i < tabs; i++) {
//     tabs[i].addEventListener("click", () => {
//         tabs[i].parentElement.querySelector(".cont").classList.toggle("open");
//     })
// }
  