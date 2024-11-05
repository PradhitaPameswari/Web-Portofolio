document.addEventListener("DOMContentLoaded", () => {
    // Efek animasi header saat halaman dimuat
    const headerTitle = document.getElementById("judul");
    headerTitle.style.opacity = 0;
    headerTitle.style.transform = "scale(0.8)";

    setTimeout(() => {
        headerTitle.style.transition = "opacity 1.2s ease, transform 1.2s ease";
        headerTitle.style.opacity = 1;
        headerTitle.style.transform = "scale(1)";
    }, 300);

    // Animasi hover untuk menu navigasi
    const menuItems = document.querySelectorAll("nav ul li a");
    menuItems.forEach((item) => {
        item.addEventListener("mouseover", () => {
            item.style.color = "#D4A373";
            item.style.letterSpacing = "1px";
            item.style.transition = "color 0.3s, letter-spacing 0.3s";
        });
        item.addEventListener("mouseout", () => {
            item.style.color = "#FFF1E4";
            item.style.letterSpacing = "0px";
        });
        item.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = item.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: "smooth"
            });
        });
    });

    // Efek glow pada skill items
    const skillItems = document.querySelectorAll(".skill-item");
    skillItems.forEach((item) => {
        item.style.transition = "box-shadow 0.3s ease";

        item.addEventListener("mouseenter", () => {
            item.style.boxShadow = "0 0 20px rgba(255, 255, 50, 0.8)";
        });
        item.addEventListener("mouseleave", () => {
            item.style.boxShadow = "none";
        });
    });

    // Animasi fade-in menggunakan Intersection Observer untuk setiap section
    const sections = document.querySelectorAll("section");
    const observerOptions = { threshold: 0.3 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = "translateY(0)";
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = "translateY(20px)";
        section.style.transition = "opacity 1s ease, transform 1s ease";
        observer.observe(section);
    });

    // Fungsi untuk validasi dan mengirim pesan
    function validateAndSend() {
        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const phone = document.getElementById("phone").value.trim();
        const description = document.getElementById("description").value.trim();

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phonePattern = /^[0-9]{10,15}$/;

        if (!emailPattern.test(email)) {
            alert("Email tidak valid. Harap masukkan email yang benar.");
            return;
        }

        if (!phonePattern.test(phone)) {
            alert("Nomor HP tidak valid. Harap masukkan nomor yang benar.");
            return;
        }

        if (!name || !email || !phone || !description) {
            alert("Harap isi semua field.");
            return;
        }

        const message = `Nama: ${name}, Email: ${email}, Nomor HP: ${phone}, Deskripsi: ${description}`;
        const whatsappURL = `https://wa.me/81213170357?text=${encodeURIComponent(message)}`;
        
        window.open(whatsappURL, "_blank");
    }
});