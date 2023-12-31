const sounds = ["iphone", "phone"]

sounds.forEach((sound) => {
    const btn = document.createElement("button");

    btn.classList.add("btn")
    btn.innerText = sound;

    btn.addEventListener("click", () => {
        stopSong();
        document.getElementById(sound).play();
    })
    document.getElementById("buttons").appendChild(btn)
})

function stopSong() {
    sounds.map((sound) => {
        const song = document.getElementById(sound);
        song.pause();
        song.currentTime = 0;
    })
}