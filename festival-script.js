document.addEventListener("DOMContentLoaded", () => {
  const urlParams = new URLSearchParams(window.location.search);
  const religion = urlParams.get("religion");
  const religionNameEl = document.getElementById("religion-name");
  const festivalGrid = document.getElementById("festival-grid");

  const festivals = {
    hinduism: ["Diwali", "Holi", "Navratri"],
    islam: ["Eid al-Fitr", "Eid al-Adha", "Ramadan"],
    christianity: ["Christmas", "Easter", "Good Friday"],
    sikhism: ["Baisakhi", "Gurpurab", "Lohri"],
    jainism: ["Mahavir Jayanti", "Paryushan", "Diwali"],
    buddhism: ["Buddha Purnima", "Losar", "Magha Puja"],
    zoroastrianism: ["Nowruz", "Khordad Sal", "Mehregan"],
    judaism: ["Hanukkah", "Passover", "Rosh Hashanah"],
  };

  religionNameEl.innerText = capitalizeFirstLetter(religion);
  festivals[religion].forEach((festival) => {
    const festivalDiv = document.createElement("div");
    festivalDiv.classList.add("festival");
    festivalDiv.innerText = festival;
    festivalGrid.appendChild(festivalDiv);
  });

  document.getElementById("backButton").addEventListener("click", () => {
    window.history.back();
  });

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
});
