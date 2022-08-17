const container = document.querySelector('.container');
const navbar = document.querySelector('.navigation');
const toggle = document.querySelector('.toggle');


const navigation = (event) => {
  
    if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
        event.target.parentElement.innerHTML = '<i class="fas fa-bars"></i>';
    } else {
        navbar.classList.add('active');
        event.target.parentElement.innerHTML = '<i class="fas fa-times"></i>';
    }
    
}

toggle.addEventListener('click', navigation);


// OBSERVER FOR THE NAVIGATION MENU








// CREATING OBSERVERS

const targets = document.querySelectorAll('.image');

// const lazyLoading = (target) => {
//     const observeImage = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 const img = entry.target;
//                 const src = img.getAttribute('src');
              
//                 img.setAttribute('src', src);
//                 img.classList.add('fade');
//                 observer.disconnect();
//             }
//         })
//     }, { threshold: [0.7] });

//     observeImage.observe(target);
// }

// targets.forEach(lazyLoading);


targets.forEach( (target) => {
    const observeImage = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                const src = img.getAttribute('src');
              
                img.setAttribute('src', src);
                img.classList.add('fade');
                observer.disconnect();
            }
        })
    }, { threshold: [0.7] });

    observeImage.observe(target);
})