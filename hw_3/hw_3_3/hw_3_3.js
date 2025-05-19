let i = 0;
while (i < 20) {
  if (document.readyState === "loading") {
    document.write(`<h1>Okten is cool ${i}</h1>`);
  } else {
    const container = document.createElement("div");
    container.innerHTML = `<h1>Okten is cool</h1>`;
    document.body.appendChild(container);
  }
  i++;
}
