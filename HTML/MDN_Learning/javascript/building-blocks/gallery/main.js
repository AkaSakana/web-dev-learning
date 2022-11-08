const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

/* 添加图片循环 */

const imgs = [
  "pic1.jpg",
  "pic2.jpg", 
  "pic3.jpg", 
  "pic4.jpg", 
  "pic5.jpg"];

for (i = 0; i < imgs.length; i++) {
  const newImg = document.createElement("img");
  newImg.setAttribute("src", "./images/" + imgs[i]);

  // newImg.addEventListener("click", () => {
  //   const currentImgSrc = newImg.getAttribute("src");
  //   displayedImage.setAttribute("src", currentImgSrc);
  // })

  thumbBar.appendChild(newImg);

  // another way: delegate to thumbBar
  thumbBar.addEventListener("click", (e) => {
    // const currentImgSrc = e.target.getAttribute("src");
    displayedImage.setAttribute("src", e.target.src);
  })
}

/* 编写 变暗/变量 按钮功能 */
btn.addEventListener("click", () => {
  if (btn.getAttribute("class") === "dark") {
    btn.setAttribute("class", "light");
    overlay.style.backgroundColor = "rgba(0,0,0,.5)";
  } else {
    btn.setAttribute("class", "dark");
    overlay.style.backgroundColor = "rgba(0,0,0,0)";
  }
})