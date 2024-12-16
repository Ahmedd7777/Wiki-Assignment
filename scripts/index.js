console.log("JavaScript file is loaded!");
alert("JavaScript is working!");

const sampleData = {
    Maxwell: 7,
    Tenley: 6,
    Mona: 4,
};

if (!localStorage.getItem("voteCounts")) {
    localStorage.setItem("voteCounts", JSON.stringify(sampleData)); // Save sample data on first load
}

const voteCounts = JSON.parse(localStorage.getItem("voteCounts")) || sampleData;

function updateVoteResults() {
    document.getElementById("vote-maxwell").textContent = voteCounts.Maxwell;
    document.getElementById("vote-tenley").textContent = voteCounts.Tenley;
    document.getElementById("vote-mona").textContent = voteCounts.Mona;
}

function saveVotes() {
    localStorage.setItem("voteCounts", JSON.stringify(voteCounts));
}

function showConfirmationMessage(cat) {
    const confirmationMessage = document.getElementById("confirmation-message");
    confirmationMessage.textContent = `Thank you for voting for ${cat}!`;
    confirmationMessage.style.display = "block";

    setTimeout(() => {
        confirmationMessage.style.display = "none";
    }, 3000);
}

document.getElementById("vote-form").addEventListener("submit", function (e) {
    e.preventDefault();

    const favoriteCat = document.getElementById("favoriteCat").value;

    voteCounts[favoriteCat]++;
    updateVoteResults();
    saveVotes();

    showConfirmationMessage(favoriteCat);
});

updateVoteResults();
