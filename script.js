function changeSkin() {
    const username = document.getElementById("usernameInput").value;
    const skinFrame = document.getElementById("skinFrame");
    const newSrc = `https://minerender.org/embed/skin/?skin=${username}&shadow=true`;
    skinFrame.src = newSrc;
}

function downloadSkin() {
    const username = document.getElementById("usernameInput").value;
    const skinFrame = document.getElementById("skinFrame");
    const newSrc = `https://minecraft.tools/download-skin/${username}`;
    skinFrame.src = newSrc;
}