const allImages = document.querySelectorAll('img[data-src]')

const lazyLoad = (entries, observer) => {
    entries.forEach(entry => {
        if (!entry.isIntersection) return;
        observer.observe(entry)
        console.log(entry)
    });
}

const lazyLoadObserver = new IntersectionObserver(lazyLoad, { threshold: .9 })

allImages.forEach(entry => {
    lazyLoadObserver.observe(entry)
})