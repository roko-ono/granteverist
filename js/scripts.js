// not sure if i'll put js here yet

function toggleContent(contentId, arrowId) {
    const content = document.getElementById(contentId);
    const arrow = document.getElementById(arrowId);

    content.classList.toggle('open');
    arrow.classList.toggle('open');
}