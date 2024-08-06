document.addEventListener('DOMContentLoaded', () => {
    const hoverTextElements = document.querySelectorAll('.hover-text');
    const popupImageContainer = document.getElementById('popup-image-container');
    const popupImage = document.getElementById('popup-image');

    hoverTextElements.forEach(item => {
        item.addEventListener('mouseover', event => {
            const imgSrc = item.getAttribute('data-img');
            popupImage.setAttribute('src', imgSrc);
            const rect = item.getBoundingClientRect();
            popupImageContainer.style.top = `${rect.bottom + window.scrollY}px`;
            popupImageContainer.style.left = `${rect.left + window.scrollX}px`;
            popupImageContainer.style.display = 'block';
        });

        item.addEventListener('mouseout', event => {
            popupImageContainer.style.display = 'none';
        });
    });
});
