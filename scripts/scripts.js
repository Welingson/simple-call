document.addEventListener("DOMContentLoaded", () => {
  const peer = new Peer();
  peer.on("open", (id) => {
    document.getElementById("your-id").innerText = id;
  });
});
