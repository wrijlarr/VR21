const arrayOfObjects = [
  { name: "Fox", link: "foxnews.com" },

  { name: "Fandango", link: "fandango.com" },

  { name: "CNN", link: "cnn.com" },

  { name: "Google", link: "google.com" },

  { name: "YouTube", link: "youtube.com" },

  { name: "Instagram", link: "instagram.com" },

  { name: "Amazon", link: "amazon.com" },

  { name: "RideFox", link: "ridefox.com" },

  { name: "Udemy", link: "udemy.com" },

  { name: "Telegram", link: "telegram.org" },

  { name: "Discord", link: "discord.com" },

  { name: "Slack", link: "slack.com" },
];

const SUGGESTIONS_ID = "suggestions";

const searchInput = document.getElementById("search");
const processChange = debounce(() => handleKeyUp);
searchInput.addEventListener("keyup", processChange);

function handleKeyUp(e) {
  const userInput = searchInput.value.toLowerCase();
  clearSuggestions();

  if (userInput) {
    // words that contain the text the user has typed
    // alt use .contains instead of startswith
    const suggestions = arrayOfObjects.filter((result) =>
      result.name.toLowerCase().startsWith(userInput)
    );
    showSuggestions(suggestions);
  }
}

function showSuggestions(suggestions) {
  const ul = document.getElementById(SUGGESTIONS_ID);

  if (suggestions.length === 0) {
    ul.innerHTML = `<li>No matichng results</li>`;
  } else {
    // Show new suggestions
    suggestions.forEach((result) => {
      const li = document.createElement("li");
      li.innerHTML = `
            <a href=":=${result.link}">${result.name}</a>
        `;
      ul.append(li);
    });
  }
}
function clearSuggestions() {
  const ul = document.getElementById(SUGGESTIONS_ID);
  while (ul.firstElementChild) {
    ul.firstElementChild.remove();
  }
}

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args); //calls the funciton with the args
    }, timeout);
  };
}
