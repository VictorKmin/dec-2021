const sendSMSFunction = require('./message.service');
// function createBillionUsers() {
//   console.log('100000000 users was created');
// }
//
// console.log('HELLO FROM MODULE');

function createUser(name, age) {
  sendSMSFunction.sendSms('6767', 'Welocme on board')

  return {
    name,
    age,
    sayHello: () => {
      console.log(`Hello. My name is ${name} and I am ${age} years old`);
    }
  }
}

module.exports = {
  createUser
}

// module.exports.age = 26;


// createBillionUsers();
