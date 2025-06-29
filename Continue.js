

function showPopup() {
    const popup = document.getElementById('popup');
    const message = document.getElementById('popupMessage');
    popup.style.display = 'flex';
}


document.addEventListener('DOMContentLoaded', function () {
    const closeBtn = document.getElementById('closePopup');
    const popup = document.getElementById('popup');

    closeBtn.addEventListener('click', function () {
        popup.style.display = 'none';
    });


    popup.addEventListener('click', function (e) {
        if (e.target === popup) {
            popup.style.display = 'none';
        }
    });
});