
// SURAT CINTA
function openLetter() {
  const letter = document.getElementById("letter");

  letter.style.display = "block";

  letter.scrollIntoView({
    behavior: "smooth",
    block: "center"
  });

  createHearts(20);
}

// HITUNG LAMA PACARAN
function updateTimer() {
  const start = new Date(2023, 3, 28, 0, 0, 0);
  const now = new Date();

  let diff = Math.max(0, now - start);

  const days = Math.floor(diff / 86400000);
  const hours = Math.floor(diff / 3600000) % 24;
  const minutes = Math.floor(diff / 60000) % 60;
  const seconds = Math.floor(diff / 1000) % 60;

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

updateTimer();
setInterval(updateTimer, 1000);

// GOMBALAN LUCU
const jokes = [
  "Kamu tahu nggak kenapa aku suka matematika? Karena aku dan kamu kalau dijumlah jadi satu kesatuan. 😂❤️",

  "Kamu itu seperti Google, semua yang aku cari ada di kamu. 🤭",

  "Aku nggak butuh alarm, cukup ingat kamu, senyumku langsung bangun. 😘",

  "Kamu tahu bedanya kamu sama bintang? Kalau bintang ada di langit, kalau kamu ada di hatiku. 🌟",

  "Kalau kamu jadi tugas sekolah, aku nggak akan pernah mau libur. WKWKWK! 🤣",

  "Aku bukan fotografer, tapi aku bisa membayangkan masa depan kita bersama. 💗",

  "Kamu itu bukan obat, tapi setiap lihat kamu, semua rasa capekku hilang. 🥺"
];

function newJoke() {
  const random = Math.floor(Math.random() * jokes.length);

  document.getElementById("joke").textContent =
    jokes[random];

  createHearts(8);
}

// KEJUTAN
function surprise() {
  document.getElementById("surpriseText").innerHTML =
    "💗 ALOURA DINDA, KAMU ADALAH FAVORITKU! 💗<br><br>" +
    "Maaf kalau aku sering nyebelin.<br>" +
    "Tapi jangan pernah bosan sama aku yaaa! 🥹<br><br>" +
    "Maukah kamu terus membuat cerita indah bersamaku? 💍❤️";

  createHearts(35);
}

// ANIMASI HATI
function createHearts(amount) {
  for (let i = 0; i < amount; i++) {
    const heart = document.createElement("div");

    heart.className = "heart";
    heart.innerHTML = ["❤️", "💕", "💗", "💖", "🌷"][
      Math.floor(Math.random() * 5)
    ];

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize =
      (15 + Math.random() * 25) + "px";

    heart.style.animationDuration =
      (3 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => heart.remove(), 8000);
  }
}

// HATI TERBANG OTOMATIS
setInterval(() => createHearts(1), 700);
