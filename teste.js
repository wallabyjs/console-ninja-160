let customer = {
    name: "Carl",
    details: { age: 82 },
    city: {
        state: "sp",
        uf: "teste"
    },
}

const customerCity = customer?.city;
console.log(customerCity);