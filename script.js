function toggleMenu() {
    const menuContent = document.getElementById('menuContent');
    menuContent.style.display = menuContent.style.display === 'block' ? 'none' : 'block';
}




function toggleMenu() {
    const menuContent = document.getElementById('menuContent');
    if (menuContent.style.display === 'block') {
        menuContent.style.display = 'none';
        menuContent.style.animation = 'fadeOut 0.5s ease-in-out';
    } else {
        menuContent.style.display = 'block';
        menuContent.style.animation = 'fadeIn 0.5s ease-in-out';
    }
}