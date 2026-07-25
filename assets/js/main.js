const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-toggle]");
const menu = document.querySelector("[data-menu]");

function setMenu(open) {
    menuButton?.setAttribute("aria-expanded", String(open));
    menu?.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
}

menuButton?.addEventListener("click", () => {
    setMenu(menuButton.getAttribute("aria-expanded") !== "true");
});

menu?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
});

window.addEventListener("scroll", () => {
    header?.classList.toggle("is-scrolled", window.scrollY > 30);
}, { passive: true });

window.addEventListener("resize", () => {
    if (window.innerWidth > 860) setMenu(false);
});

const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const revealElements = document.querySelectorAll(".reveal:not(.is-visible)");

if (reducedMotion || !("IntersectionObserver" in window)) {
    revealElements.forEach((element) => element.classList.add("is-visible"));
} else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px" });

    revealElements.forEach((element) => revealObserver.observe(element));
}

const dialog = document.querySelector("[data-dialog]");
const dialogImage = document.querySelector("[data-dialog-image]");
const galleryItems = [...document.querySelectorAll("[data-gallery] .gallery-item")];
let currentImage = 0;

function showGalleryImage(index) {
    if (!dialog || !dialogImage || galleryItems.length === 0) return;

    currentImage = (index + galleryItems.length) % galleryItems.length;
    const item = galleryItems[currentImage];
    dialogImage.src = item.dataset.full;
    dialogImage.alt = item.dataset.alt || "Foto ampliada da Auzên";
}

function openGallery(index) {
    if (!dialog) return;
    showGalleryImage(index);
    dialog.showModal();
}

galleryItems.forEach((item, index) => {
    item.addEventListener("click", () => openGallery(index));
});

document.querySelector("[data-dialog-close]")?.addEventListener("click", () => dialog?.close());
document.querySelector("[data-dialog-prev]")?.addEventListener("click", () => showGalleryImage(currentImage - 1));
document.querySelector("[data-dialog-next]")?.addEventListener("click", () => showGalleryImage(currentImage + 1));

dialog?.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menuButton?.getAttribute("aria-expanded") === "true") {
        setMenu(false);
    }

    if (!dialog?.open) return;
    if (event.key === "ArrowLeft") showGalleryImage(currentImage - 1);
    if (event.key === "ArrowRight") showGalleryImage(currentImage + 1);
});

document.querySelectorAll("details").forEach((details) => {
    details.addEventListener("toggle", () => {
        if (!details.open) return;
        document.querySelectorAll("details[open]").forEach((openDetails) => {
            if (openDetails !== details) openDetails.open = false;
        });
    });
});

document.querySelectorAll("[data-cta]").forEach((link) => {
    link.addEventListener("click", () => {
        const detail = { placement: link.dataset.cta, destination: link.href };
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: "auzen_cta_click", ...detail });
        window.dispatchEvent(new CustomEvent("auzen:cta", { detail }));
    });
});

const year = document.querySelector("[data-year]");
if (year) year.textContent = new Date().getFullYear();
