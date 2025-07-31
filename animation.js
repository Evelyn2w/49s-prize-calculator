<script>
function fakeLoad() {
  const btn = document.getElementById("loadBtn");
  btn.disabled = true;
  btn.innerText = "Loading...";
  setTimeout(() => {
    btn.innerText = "Try Again";
    btn.disabled = false;
  }, 2000);
}
</script>
