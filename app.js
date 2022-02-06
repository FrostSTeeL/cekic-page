var stats = document.querySelector("#stt");

let server = 0;
let accounts = 0;

fetch("https://cekic-bot.herokuapp.com/")
  .then((response) => {
    return response.json();
  })
  .then((responseJson) => {
    server = responseJson.ServerCount;
    accounts = responseJson.BannedCount;
    stats.innerHTML = `<h2>${server} sunucu ${accounts} hesaptan korunuyor.</h2>`;
  });
