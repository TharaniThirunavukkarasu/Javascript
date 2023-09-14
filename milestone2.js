// Function to add banner contents to the local storage
function addBannerToLocalStorage(bannerHeader, bannerDescription) {
    const banner = {
      type: 'banner',
      bannerHeader,
      bannerDescription
    };
    const content = getContentsFromLocalStorage();
    content.push(banner);
    localStorage.setItem('content', JSON.stringify(content));
  }

  // Function to add card view to the local storage
  function addCardToLocalStorage(productImage, productName, productDescription, productPrice) {
    const card = {
      type: 'card',
      productImage,
      productName,
      productDescription,
      productPrice
    };
    const content = getContentsFromLocalStorage();
    content.push(card);
    localStorage.setItem('content', JSON.stringify(content));
  }
  function remove(){
    localStorage.removeItem('content', JSON.stringify(content));
  }

  // Function to retrieve contents from the local storage
  function getContentsFromLocalStorage() {
    const content = localStorage.getItem('content');
    return content ? JSON.parse(content) : [];
  }

  // Function to display contents from the local storage
  function displayContentsFromLocalStorage() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const contents = getContentsFromLocalStorage();
    for (const item of contents) {
      if (item.type === 'banner') {
        const bannerContainer = document.createElement('div');
        bannerContainer.className = 'banner';
        bannerContainer.innerHTML = `
          <h3>${item.bannerHeader}</h3>
          <p>${item.bannerDescription}</p>
        `;
        content.appendChild(bannerContainer);
      } else if (item.type === 'card') {
        const cardContainer = document.createElement('div');
        cardContainer.className = 'item';
        cardContainer.innerHTML = `
          <img src="${item.productImage}" alt="Product Image">
          <h3>${item.productName}</h3>
          <p>${item.productDescription}</p>
          <p>Price: $${item.productPrice}</p>
          <a class="more-info" href="product.html">More Info</a>
        `;
        content.appendChild(cardContainer);
      }
    }

    // Add event listener for "More Info" links
    const moreInfoLinks = document.getElementsByClassName('more-info');
    for (const link of moreInfoLinks) {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const productName = this.parentNode.querySelector('h3').textContent;
        localStorage.setItem('selectedProduct', productName);
        window.location.href = this.getAttribute('href');
      });
    }
  }

  // Add submit event listener to the banner form
  const bannerForm = document.getElementById('bannerForm');
  bannerForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const bannerHeader = document.getElementById('bannerHeader').value;
    const bannerDescription = document.getElementById('bannerDescription').value;
    addBannerToLocalStorage(bannerHeader, bannerDescription);
    displayContentsFromLocalStorage();
    this.reset();
  });

  // Add submit event listener to the card form
  const cardForm = document.getElementById('cardForm');
  cardForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const productImage = document.getElementById('productImage').value;
    const productName = document.getElementById('productName').value;
    const productDescription = document.getElementById('productDescription').value;
    const productPrice = document.getElementById('productPrice').value;
    addCardToLocalStorage(productImage, productName, productDescription, productPrice);
    displayContentsFromLocalStorage();
    this.reset();
  });

  // Display contents on page load
  displayContentsFromLocalStorage();