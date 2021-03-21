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
const items = document.querySelectorAll(".item");

// wrapper.addEventListener("click", (e) => {
//   e.stopPropagation();
//   const targetElement = e.target;

//   if (!targetElement.classList.contains("item")) return;

//   targetElement.classList.toggle("open");
//   items.forEach((elem) => {
//     if (elem !== targetElement) elem.classList.remove("open");
//   });
// });

//리스너가 줄어드나 조건문이 많아진다. 조건문 최적화 하는 방법을 생각해보자.
//두개의 리스너를 사용하는 방법을 사용하는 게 메모리 관리 측면에서 용이하다. 
document.body.addEventListener("click", (e) => {
  const targetClassList = e.target.classList;

  if (targetClassList.contains("context")) return;

  if (targetClassList.contains("item")) {
    targetClassList.toggle("open");
    items.forEach((el) => {
      if (el !== e.target) el.classList.remove("open");
    });
    return;
  }

  items.forEach((el) => {
    el.classList.remove("open");
  });
});
