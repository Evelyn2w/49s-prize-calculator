<script>
function highlightWins() {
  const nums = document.querySelectorAll(".ball");
  nums.forEach(n => {
    if (parseInt(n.innerText) % 2 === 0) {
      n.style.background = "#00cc66";
    }
  });
}
</script>
