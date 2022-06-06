const { createUser } = require('./services/user.service');
require('./services/file.service');

const user = createUser('Viktor', 26);

console.log(user);

user.sayHello();

// KISS
// YAGNI
// SOLID
