var player1 = "";
var com = "";
function playerOne(saya) {
  // baliki ke nilai awal
  document.getElementById("statusPlayer").className = "status";
  document.getElementById("statusPlayer").innerText = "VS";
  
  document.getElementById("comBatu").className = "";
  document.getElementById("comGunting").className = " ";
  document.getElementById("comKertas").className = "";

  if (saya === "batu") {
    player1 = "batu";
    document.getElementById("playerBatu").className = "selectImg";
    document.getElementById("playerGunting").className = " ";
    document.getElementById("playerKertas").className = " ";
  } else if (saya === "gunting") {
    player1 = "gunting";
    document.getElementById("playerBatu").className = " ";
    document.getElementById("playerGunting").className = "selectImg";
    document.getElementById("playerKertas").className = " ";
  } else {
    player1 = "kertas";
    document.getElementById("playerBatu").className = " ";
    document.getElementById("playerGunting").className = " ";
    document.getElementById("playerKertas").className = "selectImg";
  }

  pilihLawan();

}

function statusPemenang(x, y, A, B) {
  var status = "";
  switch (y) {
    case "batu":
      if (x == "batu") {
        status = "seri";
      } else if (x == "gunting") {
        status = B + " menang";
      } else if (x == "kertas") {
        status = A + " menang";
      } else {
        status = "";
      }
      break;
    case "gunting":
      if (x == "batu") {
        status = A + " menang";
      } else if (x == "gunting") {
        status = "seri";
      } else if (x == "kertas") {
        status = B + " menang";
      } else {
        status = "";
      }
      // code block
      break;
    case "kertas":
      if (x == "batu") {
        status = B + " menang";
      } else if (x == "gunting") {
        status = A + " menang";
      } else if (x == "kertas") {
        status = "seri";
      } else {
        status = "";
      }
      break;
    default:
    // code block
  }
  return status;
}
function comPlayer(saya) {
  if (saya === "batu") {
    com = "batu";
    document.getElementById("comBatu").className = "selectImg";
    document.getElementById("comGunting").className = " ";
    document.getElementById("comKertas").className = " ";
  } else if (saya === "gunting") {
    com = "gunting";
    document.getElementById("comBatu").className = " ";
    document.getElementById("comGunting").className = "selectImg";
    document.getElementById("comKertas").className = " ";
  } else {
    com = "kertas";
    document.getElementById("comBatu").className = " ";
    document.getElementById("comGunting").className = " ";
    document.getElementById("comKertas").className = "selectImg";
  }
}

function refreshAll() {
  document.getElementById("playerBatu").className = "";
  document.getElementById("playerGunting").className = "";
  document.getElementById("playerKertas").className = "";
  document.getElementById("comBatu").className = "";
  document.getElementById("comGunting").className = " ";
  document.getElementById("comKertas").className = "";

  document.getElementById("statusPlayer").className = "status";
  document.getElementById("statusPlayer").innerText = "VS";
  com = "";
  player1 = "";
}
function pilihLawan() {
  var pilihan = new Array("batu", "gunting", "kertas");
  
  document.getElementById("statusPlayer").className = "status";
  document.getElementById("statusPlayer").innerText = "VS";

  for (let i = 0; i < 20; i++) {
    setTimeout(function () {
      // Add tasks to do
      var randomNum = Math.floor(Math.random() * pilihan.length);
      comPlayer(pilihan[randomNum]);
      com = pilihan[randomNum];

      if (i == 19) {
        var siapaPemenang = statusPemenang(player1, com, "Player 1", "COM").toUpperCase();
        //alert(siapaPemenang)
        document.getElementById("statusPlayer").className = "hasilPemenang";
        document.getElementById("statusPlayer").innerText = siapaPemenang;
      }
    }, 100 * i);
  }
}
