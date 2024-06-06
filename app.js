let changer = document.querySelector('#colorButton');

const generateRandom = () => {
    const colors = ['red', 'green', 'blue', 'yellow', 'gray', 'brown', 'blue'];
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

changer.addEventListener('click', () => {
    const chosenColor = generateRandom();
    document.body.style.backgroundColor = chosenColor;
});
