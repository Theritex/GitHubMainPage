document.addEventListener('DOMContentLoaded', function() {
    const toggleSidebarButton = document.getElementById('toggle-sidebar');
    const sidebar = document.getElementById('sidebar');
    toggleSidebarButton.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });
});
