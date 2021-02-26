const messages = [
    "Antony",
    "Oscar",
    "Pedro",
    "Paulina",
    "Ana",
    "Laura",
    "Diego"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(`Hola ${message}`);
};

module.exports = { randomMsg };