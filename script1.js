document.addEventListener("DOMContentLoaded", () => {
  const religions = document.querySelectorAll(".religion");

  religions.forEach((religion) => {
    religion.addEventListener("click", () => {
      const selectedReligion = religion.id;
      window.location.href = `FestivalSelection.html?religion=${selectedReligion}`;
    });
  });
});
