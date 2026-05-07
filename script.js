function showStory(id){
    document.querySelectorAll('.story').forEach(s => s.style.display = 'none');
    document.getElementById(id).style.display = 'block';
}
function showPage(pageId){
    document.querySelectorAll('.page').forEach(p => p.style.display = 'none');
    document.getElementById(pageId).style.display = 'block';
}
function searchStories() {
    let input = document.getElementById("searchInput").value.toLowerCase();

    let cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        let title = card.innerText.toLowerCase();

        if (title.includes(input)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}
function likeStory(heart) {

    let count = heart.nextElementSibling;

    let currentLikes = Number(count.innerText);

    if (!heart.classList.contains("liked")) {

        heart.innerText = "❤️";

        heart.classList.add("liked");

        currentLikes++;

    } else {

        heart.innerText = "♡";

        heart.classList.remove("liked");

        currentLikes--;

    }

    count.innerText = currentLikes;
}