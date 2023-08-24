const products = [
    {
      imgname: '69.png',
      imgalt: '69.png',
      productname: 'haha funny number 69',
      productdescription: '696969 nice lol',
      price: '$6.90',
      shoppyid: '9IFB1lT'
    }, 
    {
      imgname: 'balkanuncle.png',
      imgalt: 'balkan uncle',
      productname: 'Balkan Uncles mega pack',
      productdescription: 'several premium balkan uncles to purchase',
      price: '$1.00',
      shoppyid: 'pm92vgz'
    }, 
    {
      imgname: 'rawetrip.jpg',
      imgalt: 'rawetrip',
      productname: 'Rawetrip csgo config pack',
      productdescription: 'Rage/Legit cfgs, Luas',
      price: '$1.00',
      shoppyid: 'PP4pTMl'
    }, 
    {
      imgname: 'bosnia.png',
      imgalt: 'bosnia flag',
      productname: 'Bosnia and Herzegovina',
      productdescription: 'the entire county of bosnia i guess',
      price: '$2.00',
      shoppyid: '6LPUJ3g'
    }
  ];

  function createProductCards() {
    const container = document.getElementById('product-container');

    products.forEach(product => {
      const card = document.createElement('div');
      card.className = 'bg-white p-4 rounded-lg shadow-md';
      card.innerHTML = `
        <div class="h-48 overflow-hidden">
          <img src="img/${product.imgname}" alt="${product.imgalt}" class="w-full h-full object-cover">
        </div>
        <div class="mt-4">
          <h3 class="text-lg font-semibold">${product.productname}</h3>
          <p class="text-gray-500 mt-2">${product.productdescription}</p>
          <div class="mt-4 flex justify-between items-center">
            <span class="text-gray-700">${product.price}</span>
            <button class="px-4 py-2 bg-blue-500 text-white rounded" data-shoppy-product="${product.shoppyid}">Buy Now</button>
          </div>
        </div>
      `;

      container.appendChild(card);
    });
  }
  document.addEventListener('DOMContentLoaded', createProductCards);