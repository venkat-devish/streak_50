const panels = document.querySelectorAll('.panel')
console.log(panels)

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActivePanels();
        panel.classList.add('active')
    })
})

function removeActivePanels() {
    panels.forEach(panel => {
        if (panel.classList.contains('active')) {
            panel.classList.remove('active')
            console.log(panels)
        }
    })
} 