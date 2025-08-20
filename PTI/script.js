const glassBtns = document.querySelectorAll(".quadro-galeria .glassBtn");

const modalWrapper = document.querySelector(".modal-wrapper");
const modalCloseBtn = document.querySelector(".modal-close");

// Abrir modal ao clicar em qualquer glassBtn
glassBtns.forEach(btn => {
    btn.addEventListener('click', function () {
        modalWrapper.classList.remove("modal-wrapper-hide");
        modalWrapper.style.display = "flex";
        document.body.classList.add('modal-open');
    });
});

// Fechar ao clicar no fundo
modalWrapper.addEventListener('click', function (e) {
    if (e.target === this) {
        modalWrapper.classList.add("modal-wrapper-hide");
        modalWrapper.style.display = "none";
        document.body.classList.remove('modal-open');
    }
});

// Fechar ao clicar no X
modalCloseBtn.addEventListener('click', function () {
    modalWrapper.classList.add("modal-wrapper-hide");
    modalWrapper.style.display = "none";
    document.body.classList.remove('modal-open');
});

// ...restante do seu código...

// ——— aqui eu consigo mover o objeto ———

const thumb = document.getElementById('thumb');

document.addEventListener('DOMContentLoaded', function () {
    // dragElement(document.querySelector('.glassDiv'));
    document.querySelectorAll('#noticia-balao').forEach(dragElement);
});
function dragElement(elmnt) {
    let startX = 0, startY = 0;

    const onPointerDown = e => {
        e.preventDefault();
        const rect = elmnt.getBoundingClientRect();
        elmnt.style.position = 'absolute';
        elmnt.style.top = rect.top + 'px';
        elmnt.style.left = rect.left + 'px';
        elmnt.style.transform = 'none';

        startX = e.clientX;
        startY = e.clientY;
        document.addEventListener('pointermove', onPointerMove);
        document.addEventListener('pointerup', onPointerUp, { once: true });
    };

    const onPointerMove = e => {
        e.preventDefault();
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        startX = e.clientX;
        startY = e.clientY;
        elmnt.style.left = (elmnt.offsetLeft + dx) + 'px';
        elmnt.style.top = (elmnt.offsetTop + dy) + 'px';
    };

    const onPointerUp = () => {
        document.removeEventListener('pointermove', onPointerMove);
    };

    elmnt.addEventListener('pointerdown', onPointerDown);
}

const doc = document.documentElement;
let isDragging = false;
let startY, startScrollTop;

// function updateThumb() {
//     const scrollTop = window.scrollY;
//     const scrollHeight = doc.scrollHeight;
//     const clientHeight = window.innerHeight;

//     const thumbHeight = clientHeight * (clientHeight / scrollHeight);
//     const thumbTop = scrollTop / (scrollHeight - clientHeight) * (clientHeight - thumbHeight);

//     thumb.style.height = `${thumbHeight}px`;
//     thumb.style.top = `${thumbTop}px`;
// }

// Ao clicar e segurar no thumb
// thumb.addEventListener('mousedown', (e) => {
//     isDragging = true;
//     startY = e.clientY;
//     startScrollTop = window.scrollY;
//     e.preventDefault(); // impede seleção de texto
//     document.body.style.userSelect = 'none';
// });

// Ao mover o mouse
// document.addEventListener('mousemove', (e) => {
//     if (!isDragging) return;

//     const deltaY = e.clientY - startY;
//     const scrollHeight = doc.scrollHeight - window.innerHeight;
//     const trackHeight = window.innerHeight - thumb.offsetHeight;

//     const scrollDelta = deltaY * (scrollHeight / trackHeight);
//     window.scrollTo(0, startScrollTop + scrollDelta);
// });

// // Ao soltar o mouse
// document.addEventListener('mouseup', () => {
//     isDragging = false;
//     document.body.style.userSelect = '';
// });

// window.addEventListener('scroll', updateThumb);
// window.addEventListener('resize', updateThumb);
// document.addEventListener('DOMContentLoaded', updateThumb);

// ——— play e pause ———

document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('.playPauseBtn');
    if (!btn) return;
    const playIcon = btn.querySelector('.icon-play');
    const pauseIcon = btn.querySelector('.icon-pause');

    const video = document.getElementById('videoTelevisor');
    let isPlaying = false;

    btn.addEventListener('click', () => {
        isPlaying = !isPlaying;
        playIcon.style.display = isPlaying ? 'none' : '';
        pauseIcon.style.display = isPlaying ? '' : 'none';
        if (video) {
            if (isPlaying) video.play();
            else video.pause();
        }
    });
});
