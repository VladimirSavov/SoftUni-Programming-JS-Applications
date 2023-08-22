showView('#add-movie');

function hideAll() {
    document.querySelector('.view-section').forEach(v => v.style.display = 'none');
}

function showView(id) {

    document.querySelector(id).style.display = 'block';
}
