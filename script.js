const allowedUsers = [
    { name: "KOMMISHETTY BHAVYA SREE", dob: "2008-02-04" },
    { name: "THATHIREDDY SATWIKA REDDY", dob: "2007-10-24" }
];

const personalizedMessages = {
    "KOMMISHETTY BHAVYA SREE": `AKKOOOOOOOOOOOOO 💖,

Happy Women's Day!!!!!!!! EHEHEHE

Ammaive kani chesevi ammai panulu kadhh, aina emundhi le ammaivega 😂...
BEEE STRONGGGGGGGGGGGGGGG
BEEE HAPPYYYYYYYYYYYYYYYY

LUBBBBBB UUUUUUUU AKKOOOOOOO✨🥰💝💖. Happy Women's Day! ✨

With all my love,
Your smoll brother`,

    "THATHIREDDY SATWIKA REDDY": `PONDU PONDU PONDUU 💖,

Happy Women's Day!!!

THEEEEEEEEEEEEEEEEEEEEE STRONGESTTTTTTTTTTTTTTTT GIRLLLLLLLLLLLIESSTTTTTTTTTTTT GIRLLLLLLLLLLLLLLLLLLLLLLL I'VE EVEEEERRRRRRRR KNOWWWWNNNNNNNNNNNNN.
BEEE STRONGGGGGGGGGGGGGGG
BEEE HAPPYYYYYYYYYYYYYYYY

Lubbbbbbbbbbbb you endlessly. Happy Women's Day! ✨

With all my love,
Your WASTE FELLOW`
};

const loginForm = document.getElementById('login-form');
const mainScreen = document.getElementById('main-screen');
const messageScreen = document.getElementById('message-screen');
const finalScreen = document.getElementById('final-screen');
const messageText = document.getElementById('message-text');
const heartsContainer = document.getElementById('hearts-container');
const modal = document.getElementById('modal');
const closeModal = document.getElementById('close-modal');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const dob = document.getElementById('dob').value;

    const user = allowedUsers.find(u => u.name.toLowerCase() === name.toLowerCase() && u.dob === dob);

    if (user) {
        showMessage(user.name);
    } else {
        showModal();
    }
});

closeModal.addEventListener('click', function() {
    modal.classList.add('hidden');
});

function showModal() {
    modal.classList.remove('hidden');
}

function showMessage(name) {
    mainScreen.classList.add('hidden');
    setTimeout(() => {
        messageScreen.classList.remove('hidden');
    }, 500);

    const message = personalizedMessages[name];

    setTimeout(() => typeWriter(message, 0), 1000);
}

function typeWriter(text, i) {
    if (i < text.length) {
        messageText.textContent += text.charAt(i);
        setTimeout(() => typeWriter(text, i + 1), 60);
    } else {
        setTimeout(showFinal, 2500);
    }
}

function showFinal() {
    messageScreen.classList.add('hidden');
    setTimeout(() => {
        finalScreen.classList.remove('hidden');
    }, 500);

    // Add floating hearts
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'heart';
            heart.textContent = '💖';
            heart.style.left = Math.random() * 100 + '%';
            heart.style.animationDelay = Math.random() * 2 + 's';
            heart.style.fontSize = (Math.random() * 10 + 20) + 'px';
            heartsContainer.appendChild(heart);

            setTimeout(() => heart.remove(), 4000);
        }, i * 150);
    }
}
