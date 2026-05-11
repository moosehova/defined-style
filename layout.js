document.addEventListener("DOMContentLoaded", () => {
    const load = (id, file) => {
        fetch(file)
            .then(res => res.text())
            .then(data => {
                const container = document.getElementById(id);
                if (container) container.innerHTML = data;
            })
            .catch(err => console.error(`Failed to load ${file}:`, err));
    };
    load('nav-sync', 'nav.html');
    load('footer-sync', 'footer.html');
});
