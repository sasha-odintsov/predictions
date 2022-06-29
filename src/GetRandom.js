function getRandom(element) {
    return element[Math.floor(Math.random() * element.length)];
}

export default getRandom;