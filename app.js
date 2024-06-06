let changer = document.querySelector('#colorButton');
let display = document.querySelector('.color_hexavalue')

const generateRandom = () => {
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff', '#000000', '#ffffff'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

changer.addEventListener('click', () => {
    const chosenColor = generateRandom();
    document.body.style.backgroundColor = chosenColor;
    display.textContent = `The Hexadecimal value of this color is  ${chosenColor.toUpperCase()}`
    if(chosenColor === '#000000'){
        document.body.style.color = 'white'
    }
    else  if(chosenColor === '#ffffff'){
        document.body.style.color = 'black'
    }
});
