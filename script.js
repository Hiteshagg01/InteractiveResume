
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
    setTimeout(() => {
        $('.indicator').fadeIn(1500).removeClass('hidden');
    }, 1000);
});


const observeingDiv = document.querySelectorAll('div.tile-card');
const targetNavLinks = document.querySelectorAll('a.nav-link');

window.onscroll = () => {
    observeingDiv.forEach(div => {
        var top = window.scrollY;
        var offset = div.offsetTop - 150;
        var height = div.offsetHeight;
        var id = div.getAttribute('id');

        if (top >= offset && top < offset + height) {
            targetNavLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`a[href="#${id}"]`).classList.add('active');
            });
        }
    });
}