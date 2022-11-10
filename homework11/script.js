// const products = [
//     {
//       name: "Iphone 12",
//       brand: "Apple",
//       price: 3200000,
//       properties: ["Best camera", "Fast memory", "Apple A12 Processor"],
//     },
//     {
//       name: "Galaxy S20 Ultra",
//       brand: "Samsung",
//       price: 2900000,
//       properties: ["120 hz screen", "Water resistance"],
//     },
//     {
//       name: "MI 9",
//       brand: "Xiaomi",
//       price: 1300000,
//       properties: ["Best price", "Pay less - get more!"],
//     },
//   ];

const createCardProduct = (name, brand, price, properties) => {
    const cardProductContainer = document.createElement('div');
    const titleElement = document.createElement('h2');
    const subtitleElement = document.createElement('h3');
    const priceElement = document.createElement('p');
    const textContainer = document.createElement('div');

    titleElement.innerText = name;
    subtitleElement.innerText = brand;
    priceElement.innerText = price;

    properties.forEach((paragraph) => {
        const paragraphElement =  document.createElement('p');
        paragraphElement.innerText = paragraph;

        textContainer.append(paragraphElement)       
    });

    cardProductContainer.append(titleElement, subtitleElement, priceElement, textContainer); 
    return cardProductContainer;
};

const res = createCardProduct('Iphone 12', 'Apple', 3200000, ['Best camera', 'Fast memory', 'Apple A12 Processor']);
console.log(res)


