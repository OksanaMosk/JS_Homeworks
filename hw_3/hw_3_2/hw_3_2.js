for (let i = 0; i < 10; i++) {
  if (document.readyState === "loading") {
    document.write(`<div>Okten is cool ${i}</div>`);
  } else {
    const container = document.createElement("div");
    container.innerHTML = `<div>Okten is cool ${i}</div>`;
    document.body.appendChild(container);
  }
}
