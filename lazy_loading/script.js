const allImages = document.querySelectorAll('img[data-src]')

const imageObserver = (entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        entry.target.src = entry.target.dataset.src;
        entry.target.addEventListener('load', () => {
            entry.target.classList.remove('lazy-load')
        })
        observer.unobserve(entry.target)
    })
}

const lazyLoadObserver = new IntersectionObserver(imageObserver, { threshold: .9 })

allImages.forEach(img => {
    lazyLoadObserver.observe(img)
})