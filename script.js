function toggleMode() {
    const html = document.documentElement;
    const img = document.querySelector('#profile img');

    html.classList.toggle('light');

    if(html.classList.contains('light')) {
        img.setAttribute('src', './assets/avatar_light.png');
        img.setAttribute('alt', 'Avatar (Cinnamoroll) do Desenvolvedor,fundo totalmente escuro, ouvindo uma música com fones de ouvido e relaxando.');
    } else {
        img.setAttribute('src', './assets/avatar.png');
        img.setAttribute('alt', 'Avatar (Cinnamoroll) do Desenvolvedor, fundo azul, sorrindo para você!');
    }
}