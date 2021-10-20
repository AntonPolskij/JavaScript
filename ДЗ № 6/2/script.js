var items = [
    {
        mark: 'Iphone 13',
        price: 79990,
        image: 'img/iphone.jpg',
    },
    {
        mark: 'Samsung s21',
        price: 55990,
        image: 'img/samsung.jpg',

    },
    {
        mark: 'Xiaomi MI 11',
        price: 75990,
        image: 'img/xiaomi.jpg',
    }
]
var cart = document.querySelector('.cart');
var cards = document.querySelector('.cards');

var sum = 0;

for (var i = 0; i < items.length; i++) {
    var card = document.createElement('div');
    card.className = 'card ' + 'card-' + (i + 1);
    cards.append(card);
    var image = document.createElement('img');
    image.src = items[i].image;
    image.className = "card__image";
    card.append(image);
    var mark = document.createElement('h3');
    mark.innerText = items[i].mark;
    mark.className = "card__header";
    card.append(mark);
    var price = document.createElement('p');
    price.innerText = items[i].price;
    price.className = "card__price";
    card.append(price);
    var button = document.createElement('button');
    button.innerText = "Добавить в корзину";
    button.id = 'btn_' + i;
    button.onclick = addToCart;
    card.append(button);
}

function addToCart() {
    var item = document.createElement('div');
    cart.append(item);
    var name = document.createElement('span');
    name.className = 'item__name';
    name.innerText = items[this.id.split('_')[1]].mark;
    item.append(name);
    var price = document.createElement('span');
    price.className = 'item__price';
    price.innerText = 'Цена: ' + items[this.id.split('_')[1]].price;
    item.append(price);
    sum += items[this.id.split('_')[1]].price;
    var cartSum = document.querySelector('.cart__sum');
    cartSum.innerText = 'Сумма корзины : ' + sum + 'р';
}