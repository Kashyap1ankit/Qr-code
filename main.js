"use strict";

const inputSection = document.querySelector(".link-input");
const generateBtn = document.querySelector(".generate-btn");
const generateText = document.querySelector(".generate-text");

const generateQr = async function () {
  const link = document.querySelector(".link-input").value;
  //   const response = await fetch(
  //     `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${link}`
  //   );

  //   const data = await response.blob();

  //   console.log(data);

  //   const imageUrl = URL.createObjectURL(data);
  //   const imageElement = document.querySelector(".image");
  //   imageElement.src = imageUrl;
  generateText.textContent = "Generating......";

  setTimeout(function () {
    generateText.textContent = "Generate";
    document.querySelector(
      ".image"
    ).src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${link}`;

    inputSection.value = "";
  }, 2000);
};

document.documentElement.addEventListener("keydown", function (e) {
  if (e.key === "Enter") generateQr();
});

generateBtn.addEventListener("click", generateQr);
