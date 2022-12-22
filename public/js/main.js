const numberInput = document.getElementById("number");
const textInput = document.getElementById("msg");
const button = document.getElementById("button");
const response = document.querySelector(".response");

button.addEventListener("click", send, false);

function send() {
  // for non numeric characters
  const number = numberInput.value.replace(/\D/g, "");
  const text = textInput.value;

  fetch("/", {
    method: "post",
    headers: {
      "Content-type": "Application/json",
    },
    body: JSON.stringify({ number: number, text: text }),
  })
    .then(function (res) {
      console.log(res);
    })
    .catch(function (err) {
      console.log(err);
    });
}
