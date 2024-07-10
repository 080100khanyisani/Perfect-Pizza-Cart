function pizzaOrder() {
    return {
        quantities: { small: 0, medium: 0, large: 0 },
        prices: { small: 31.99, medium: 58.99, large: 87.99 },
        paymentAmount: '',
        message: 'Message goes here',
        paymentMade: false,
        increase(size) {
            this.quantities[size]++;
        },
        decrease(size) {
            if (this.quantities[size] > 0) this.quantities[size]--;
        },
        totalCost() {
            return this.quantities.small * this.prices.small +
                   this.quantities.medium * this.prices.medium +
                   this.quantities.large * this.prices.large;
        },
        pay() {
            const payment = parseFloat(this.paymentAmount);
            if (payment >= this.totalCost()) {
                this.message = 'Payment successful!';
                this.paymentMade = true;
            } else {
                this.message = 'Sorry - that is not enough money!';
            }
        },
        checkout() {
            alert('Enjoy your pizza!');
            this.resetOrder();
        },
        resetOrder() {
            this.quantities = { small: 0, medium: 0, large: 0 };
            this.paymentAmount = '';
            this.message = '';
            this.paymentMade = false;
        }
    };
};

const price1 = document.querySelector('.price1');
const price2 = document.querySelector('.price2');
const price3 = document.querySelector('.price3');
// const method1 = document.querySelector('.method1');
// const method2 = document.querySelector('.method2');
// const method3 = document.querySelector('.method3');

price1.innerText = 'R87.99';
console.log(price1);
price2.innerText = 'R58.99';
console.log(price2);
price3.innerText = 'R31.99';
console.log(price3);
// method1.innerText = 'Large margherita pizza with 3 toppings max. 3 meat toppings max. 3 or less other toppings.';
// console.log(method1);
// method2.innerText = 'Medium margherita pizza with 3 toppings max. 2 or less meat toppings. 3 or less other toppings.';
// console.log(method2);
// method3.innerText = 'Small pizza with 3 toppings. 1 meat topping. 3 or less other toppings.';
// console.log(method3);
