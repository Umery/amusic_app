// function message() {
//   const submit = document.getElementById("submit");
//   submit.addEventListener("click", (e) => {
//     const formData = new FormData(document.getElementById("form"));
//     const XHR = new XMLHttpRequest();
//     XHR.open("GET", " ", true);
//     XHR.responseType = "json";
//     XHR.send(formData);
//     XHR.onload = () => {
//       if (XHR.status != 200) {
//         alert(`Error ${XHR.status}: ${XHR.statusText}`);
//         return null;
//       }
//       const item = XHR.response.message;
//       const list = document.getElementById("list");
//       const formText = document.getElementById("messages");
//       // const HTML = `
//       // <div class="message-time">
//       //   ${item.created_at}
//       // </div>
//       // <div class="message-record">
//       //   ${item.user.name}：${item.text}
//       // </div>`;
//       list.insertAdjacentHTML("afterend", HTML);
//       formText.value = "";
//     };
//     e.preventDefault();
//   });
//  }
//  window.addEventListener("load", message);