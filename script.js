
const increaseObserver = new IntersectionObserver(entries => {
    entries.forEach(enrtry => {
        if (enrtry.isIntersecting) {
            enrtry.target.classList.add('increase');
            return;
        }
        // enrtry.target.classList.remove('increase');
    });
});

document.querySelectorAll('.progress').forEach(bar => {
    increaseObserver.observe(bar);
});

$(document).ready(() => {
    $('.headsup').fadeIn(1500).removeClass('hidden');
    $('.indicator').fadeIn(1500).removeClass('hidden');
});

const navigationBar = document.querySelector('nav');
const headsupObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navigationBar.classList.remove('fixed');
            return;
        }
        navigationBar.classList.add('fixed')
    });
});
headsupObserver.observe(document.querySelector('.top'));

window.addEventListener('resize', () => {
    if ($(window).width() < 992) {
        navigationBar.style.left = '0';
    } else {
        navigationBar.style.left = 'auto';
    }
});

const activeNavLink = document.querySelector('a[href="#profile"]');

const navigationSpy = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            document.querySelector(`a[href="#${entry.target.id}"]`).classList.add('active')
        } else {
            document.querySelector(`a[href="#${entry.target.id}"]`).classList.remove('active')
        }
    });
}, {
    root: null,
    rootMargin: '0px',
    threshold: '0.5'
}
);

navigationSpy.observe(document.getElementById('profile'));
navigationSpy.observe(document.getElementById('experience'));
navigationSpy.observe(document.getElementById('abilities'));
navigationSpy.observe(document.getElementById('projects'));
navigationSpy.observe(document.getElementById('contact'));