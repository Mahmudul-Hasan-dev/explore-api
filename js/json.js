const user = { id: 1, name: 'gorib', job: 'actor' };
console.log(user);

//stringify convert whole string as a string
const stringified = JSON.stringify(user);
console.log(stringified);

const shop = {
    name: 'alia',
    address: {
        vill: 'kaliakoir',
        po: 'gazipur',
        city: 'dhaka',
        street: 1705
    },
    products: ['laptop', 'keyboard', 'monitor', 'mic'],
    revenue: 45900000,
    isNew: true,
    isOpen: false
}
console.log(shop);

//convert to string
const shopJson = JSON.stringify(shop);
console.log(shopJson);

//convert back to obj
const shopobj = JSON.parse(shopJson);
console.log(`converted to obj ${shopobj}`)
console.log(shopobj);
