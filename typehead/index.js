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
searchInput.addEventListener("keyup", handleKeyUp);

function handleKeyUp (e) {
    const userInput = searchInput.value.toLowerCase();
    // words that contain the text the user has typed
    const suggestions = arrayOfObjects.filter((result) => 
    result.name.toLowerCase().includes(userInput)
    );
    showSuggestions(suggestions);
}

function showSuggestions(suggestions) {
        const ul = document.getElementById(SUGGESTIONS_ID);

        clearSuggestions();

        suggestions.forEach((result) => {
            const li = document.createElement("li");
            li.innerHTML= `
            <a href=":=${result.link}">${result.name}</a>
        `;
        ul.append(li);    
        });
    }
function clearSuggestions() {
        const ul = document.getElementById(SUGGESTIONS_ID);
        while(ul.firstElementChild) {
            ul.firstElementChild.remove();
        }
    }



