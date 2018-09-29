var faker = require("faker");

//var randomName = faker.name.findName();
//var randomEmail = faker.internet.email();
//var randomCard = faker.helpers.createCard();
//console.log("Welcome to my fake name generator");
//console.log(faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));
//console.log(randomName + " - " + randomEmail);
//console.log(randomCard);

//var productName = faker.commerce.productName();
//var price = faker.commerce.price();

console.log("Welcome to my shop");
for(var i=0; i<3; i++){
	console.log(faker.commerce.productName() + " - $" + faker.commerce.price());
}
