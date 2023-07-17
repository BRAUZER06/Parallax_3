document.querySelectorAll(".cursor").forEach((item) =>
  document.addEventListener("mousemove", (e) => {
    item.style.cssText = `--move-x: ${e.clientX}px; --move-y: ${e.clientY}px;`
  })
)
