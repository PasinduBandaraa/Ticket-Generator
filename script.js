fetch("ticket.svg")
  .then(response => response.text())
  .then(svgContent => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.innerHTML = svgContent;
    document.getElementById("ticket-container").appendChild(svg);

    const nameField = document.getElementById("name-field");
    const generateButton = document.getElementById("generate-button");
    generateButton.addEventListener("click", () => {
      const name = nameField.value;
      const nameTextElement = svg.querySelector("text.name");
      nameTextElement.textContent = name;
    });

    const downloadButton = document.getElementById("download-button");
    downloadButton.addEventListener("click", svgToPNGDataURL);
  });

function svgToPNGDataURL() {
  function svgToPNGDataURL() {
    const svgData = new XMLSerializer().serializeToString(svg);
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const img = document.createElement("img");
    img.setAttribute("src", "data:image/svg+xml;base64," + btoa(svgData));
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      context.drawImage(img, 0, 0);
      const pngDataURL = canvas.toDataURL("image/png");
      // Use the pngDataURL to download the image
    };
  }
  
}

// Load the LinkedIn JavaScript SDK
const shareButton = document.getElementById("share-linkedin-button");
shareButton.addEventListener("click", () => {
  // Use the LinkedIn API to create a share post with the PNG image
});

