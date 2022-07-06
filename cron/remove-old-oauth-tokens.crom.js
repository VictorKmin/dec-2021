const dayjs = require('dayjs');

const OAuth = require('../dataBase/OAuth');

module.exports = async () => {
  console.log('START DELETE OLD OAUTH TOKENS', new Date().toISOString())
  const oneMonthBeforeNow = dayjs().subtract(1, 'hour');

  await OAuth.deleteMany({
    createdAt: { $lte: oneMonthBeforeNow }
  });

  console.log('FIH DELETE OLD OAUTH TOKENS', new Date().toISOString())
}
