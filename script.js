const tombolSapa = document.getElementById('sapaButton');
tombolSapa.addEventListener('click',function(){
  alert('Halo! Terima kasih sudah mengunjungi M Shop 😄');
});
document.getElementById("modeToggle").addEventListener("click", () => {
  document.body.classList.toggle("gelap");
});
