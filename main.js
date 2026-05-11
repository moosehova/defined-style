// Function to inject shared UI components
document.addEventListener("DOMContentLoaded", function() {
    
    // 1. INJECT NAVIGATION
    const navHTML = `
    <nav>
        <div class="container nav-content">
            <div class="nav-logo">
                <a href="index.html"><img src="assets/logo-main.png" alt="Defined Style"></a>
            </div>
            <div class="nav-links">
                <a href="index.html">Home</a>
                <a href="shop.html">Shop</a>
                <a href="gallery.html">Gallery</a>
                <a href="contact.html">Contact</a>
            </div>
        </div>
    </nav>`;

    // 2. INJECT FOOTER
    const footerHTML = `
    <footer>
        <div class="container">
            <img src="assets/logo-main.png" alt="DSC" style="height: 30px; opacity: 0.2; margin-bottom: 20px;"><br>
            <p>© 2026 DEFINED STYLE CLOTHING | POWERED BY PURPLE WORTH STUDIOS</p>
        </div>
    </footer>`;

    // 3. INJECT WHATSAPP BUTTON
    const whatsappHTML = `
    <a href="https://wa.me/260974373245" class="whatsapp-float" target="_blank">
        <i class="fab fa-whatsapp"></i>
    </a>`;

    // Insert them into the body
    document.body.insertAdjacentHTML('afterbegin', navHTML);
    document.body.insertAdjacentHTML('beforeend', footerHTML);
    document.body.insertAdjacentHTML('beforeend', whatsappHTML);

    // Highlight active link
    const currentPage = window.location.pathname.split("/").pop() || "index.html";
    document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});