fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    const gridContainer = document.querySelector(".grid-container");
    data.forEach((item, index) => {
      const card = document.createElement("div");
      card.classList.add("card");
      card.style.backgroundColor = getRandomColor();
      card.innerHTML = `
        <h2>${index + 1}. ${item.name}</h2>
        <p><strong>${item.meaning}</strong></p>
        <p>${item.description}</p>
      `;
      gridContainer.appendChild(card);
    });
  })
  .catch((error) => console.error("Error loading JSON:", error));

function getRandomColor() {
  const colors = [
    "#f0f8ff",
    "#fff0f5",
    "#f5f5dc",
    "#f0fff0",
    "#fff8dc",
    "#f5f5f5",
    "#fde4cf",
    "#e1e5f2",
    "#eee4e1",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Function to update fonts
function updateFonts(headingFont, descriptionFont) {
  document.documentElement.style.setProperty("--heading-font", headingFont);
  document.documentElement.style.setProperty(
    "--description-font",
    descriptionFont
  );
}

const headingFontSelect = document.getElementById("heading-font");
const descriptionFontSelect = document.getElementById("description-font");

headingFontSelect.addEventListener("change", (event) => {
  updateFonts(
    event.target.value,
    getComputedStyle(document.documentElement).getPropertyValue(
      "--description-font"
    )
  );
});

descriptionFontSelect.addEventListener("change", (event) => {
  updateFonts(
    getComputedStyle(document.documentElement).getPropertyValue(
      "--heading-font"
    ),
    event.target.value
  );
});
