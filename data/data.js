
let host = "http://localhost:8083";

let findOrder = () => {
    return fetch(host + '/order')
        .then(x => x.json());
};

let saveOrder = (order) => {
    let items = order.items.map((item) => {
        return {
            name: item.name,
            price: item.price,
            quantity: 1
        };
    });

    return fetch(host + "/order", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            total: order.total,
            shippingAddress: order.shippingAddress,
            items: items,
            payment: order.paymentMethod,
            billingAddress: order.billingAddress,
        })
    }).then(response => {
        if (response.status == 200 || response.status == 201) return response.json();
        return null;
    }).then(id => id)
        .catch(error => {
            console.log(error);
            return null;
        });
};

let data = {
    orders: findOrder,
    saveOrder: saveOrder
};

export default data;