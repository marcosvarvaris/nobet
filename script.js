document.getElementById("loginBtn").addEventListener("click", () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (email === "admin@test.com" && password === "123456") {
    window.location.href = "dashboard.html";
  } else {
    alert("Geçersiz kullanıcı bilgisi!");
  }
});
