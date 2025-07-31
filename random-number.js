<script>
function showRandom() {
  const rand = Math.floor(Math.random() * 49) + 1;
  document.getElementById("randNum").innerText = "Random Pick: " + rand;
}
</script>
