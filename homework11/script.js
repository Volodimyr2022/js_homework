const products = [
    {
      name: "Iphone 12",
      brand: "Apple",
      price: 3200000,
      properties: ["Best camera", "Fast memory", "Apple A12 Processor"],
    },
    {
      name: "Galaxy S20 Ultra",
      brand: "Samsung",
      price: 2900000,
      properties: ["120 hz screen", "Water resistance"],
    },
    {
      name: "MI 9",
      brand: "Xiaomi",
      price: 1300000,
      properties: ["Best price", "Pay less - get more!"],
    },
  ];

// const createCardProduct = (productsList) => {

//     const container = document.createElement('div');

//     productsList.forEach((product) => {  

//     const cardProductContainer = document.createElement('div');
//     const titleElement = document.createElement('h2');
//     const subtitleElement = document.createElement('h3');
//     const priceElement = document.createElement('p');
//     const textContainer = document.createElement('ul');

//     titleElement.innerText = product.name;
//     subtitleElement.innerText = product.brand;
//     priceElement.innerText = product.price;

//     product.properties.forEach((prop) => {
//         const paragraphElement =  document.createElement('li');
//         paragraphElement.innerText = prop;

//         textContainer.append(paragraphElement)       
//     });

//     cardProductContainer.append(titleElement, subtitleElement, priceElement, textContainer); 
    
//     container.append(cardProductContainer);
// });
//   document.body.append(container)
// };

// const res = createCardProduct(products);



const createCardProduct = (arrayProducts) => {
    
    const container = document.createElement('div')

    container.innerHTML = `
    ${arrayProducts
      .map((oneProduct) => {
       return `
        <h2>${oneProduct.name}</h2>
        <h3>${oneProduct.brand}</h3>
        <p>${oneProduct.price}</p>
        <ul>
            ${oneProduct.properties
                .map((propItem) => {
                  return `
                <li>
                ${propItem}
                </li>
                `
              })
                .join('')}
        </ul>
    `})
    .join('')}
` 
document.body.append(container)    
};

const res = createCardProduct(products);
