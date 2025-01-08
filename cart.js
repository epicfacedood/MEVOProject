import products from "./products.js";


const cart = () => {
    let iconCart = document.querySelector('.icon-cart');
    let closeBtn = document.querySelector('.cartTab .close');
    let body = document.querySelector('body');
    let cart = [];

    iconCart.addEventListener('click', () => {
        body.classList.toggle('activeTabCart');
    })

    closeBtn.addEventListener('click', () => {
        body.classList.toggle('activeTabCart')
    })

    const setProductInCart = (idProduct, quantity, position) => {
        if (quantity > 0){ 
            if (position < 0){ //If the product does not exist in the cart yet
                cart.push({ //put it in the array "Cart"
                    product_id: idProduct,
                    quantity: quantity
                });
            } else { //Otherwise, if it already exists in the cart, update the quantity
                cart[position].quantity = quantity;
            }
        }
        refreshCartHTML();
    };

    const refreshCartHTML = () => {
        let listHTML = document.querySelector('.listCart');
        let totalHTML = document.querySelector('.icon-cart span');
        let totalQuantity = 0;
        listHTML.innerHTML = null;
        cart.forEach(item => {
            totalQuantity = totalQuantity + item.quantity;
            let newItem = document.createElement('div');
            newItem.classList.add('item');
            newItem.innerHTML = `
            <img src="${newItem}
            `;
        })
        totalHTML.innerText = totalQuantity;
    };
 
    document.addEventListener('click', (event)=> {
        let buttonClick = event.target;
        let idProduct = buttonClick.dataset.id;
        let position = cart.findIndex((value) => value.product.id == idProduct);
        let quantity = position < 0 ? 0 : cart[position].quantity;

        if (buttonClick.classList.contains('addCart')){
            quantity++;
            setProductInCart(idProduct, quantity, position);
        }
    })
};

export default cart;
    