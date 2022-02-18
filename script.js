// const document.querySelectorAll('.faq-toggle') {
//         'faq-toggle'.forEach((v) => {
//             addEventListener('click');
//             ('.faq active' & 'faq-toggle'.toggle())
//         })
//     }
// Late night. First rough attempt.

const toggles = document.querySelectorAll('.faq-toggle')

toggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
        toggle.parentNode.classList.toggle('active')
    })
})

// inital instructions

// Bring in toggle buttons (querySelectorAll)
// loop through nodelist (forEach)
// Add click event
// Toggle the active class on the parent node (.parentNode & classList.toggle()}


// Initially forgot to add function name and then use function name at the start of each line to describe what will be going through the written process. v was funciton being referenced. Needed to add empty event after click to go into the toggle of parentNode.classList which was surrounded by toggles. Clearly tired when working on this particular project. Will do better on the next solo challenge.