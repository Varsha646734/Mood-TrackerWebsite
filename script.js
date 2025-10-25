const moodButtons = document.querySelectorAll(".mood");
const moodList = document.getElementById("mood-list");

// Load saved moods
const savedMoods = JSON.parse(localStorage.getItem("moods")) || [];
savedMoods.forEach(m => addMoodToList(m));

moodButtons.forEach(button => {
  button.addEventListener("click", () => {
    const mood = button.getAttribute("data-mood");
    const date = new Date().toLocaleDateString();
    const moodEntry = `${date} - ${mood}`;
    addMoodToList(moodEntry);

    savedMoods.push(moodEntry);
    localStorage.setItem("moods", JSON.stringify(savedMoods));
  });
});

function addMoodToList(moodEntry) {
  const li = document.createElement("li");
  li.textContent = moodEntry;
  moodList.appendChild(li);
}
