// Write Javascript code here!

//# 비효율 코드
// const items = document.querySelectorAll(".item");

// items.forEach((item) => {
//   item.addEventListener("click", (e) => {
//     item.classList.toggle("open");

//     items.forEach((el) => {
//       if (el !== item) el.classList.remove("open");
//     });
//   });
// });

const wrapper = document.querySelector(".wrapper");
const items = document.querySelectorAll("item");

wrapper.addEventListener("click", (e) => {
  const targetElement = e.target;

  if (!targetElement.classList.contains("item")) return;

  targetElement.classList.toggle("open");
  items.forEach((elem) => {
    if (elem !== targetElement) elem.classList.remove("open");
  });
});
