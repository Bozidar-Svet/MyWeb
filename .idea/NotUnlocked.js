function showLockedPopup() {
    const popup = document.getElementById("lockedPopup");
    if (popup) {
        popup.style.display = "flex";
    }
}

function hideLockedPopup() {
    const popup = document.getElementById("lockedPopup");
    if (popup) {
        popup.style.display = "none";
    }
}
