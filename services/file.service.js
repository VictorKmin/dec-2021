const fs = require('fs/promises');

// fs.appendFile('./data.txt', 'HELLO NODE', (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

// fs.writeFile('./data.txt', 'HELLO NODE', (err) => {
//   if (err) {
//     console.log(err);
//   }
// });

//
// fs.readFile('./data.txt', (err, data) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//
//   console.log(data);
//   console.log(data.toString());
// });

// fs.readdir('./', (err, files) => {
//   if (err) {
//     console.log(err);
//     return;
//   }
//
//   for (const file of files) {
//     console.log(`*******************************************`);
//     console.log(`./${file}`);
//     console.log(`*******************************************`);
//
//     fs.stat(`./${file}`, (err1, stats) => {
//       console.log(stats.isFile(), 'stats.isFile()');
//       console.log(stats.isDirectory(), 'stats.isDirectory()');
//       console.log('=-=-=-=-=-=-=-=-=-=-=-=-=');
//     })
//
//     // fs.readFile(`./services/${file}`, (err1, data) => {
//     //   if (err1) {
//     //     console.log(err1)
//     //     return;
//     //   }
//     //
//     //   console.log('__________________________________________');
//     //   console.log(data.toString());
//     //   console.log('__________________________________________');
//     // })
//   }
// })

// fs.mkdir('./utils', err => {
//   err && console.log(err);
// });

// fs.rename('./services/toMove.js', './utils/helloWorld.txt', err => {
//   err && console.log(err);
// });
//

// const readStream = fs.createReadStream('./utils/helloWorld.txt');
// const writeStream = fs.createWriteStream('./utils/helloWorld3.txt');
//
// // readStream.on('data', chunk => {
// //   console.log(chunk);
// //   console.log('__________________________');
// //
// //   writeStream.write(chunk);
// // });
// //
// // readStream.on('end', () => {
// //   console.log('FILE DONE');
// // })
//
// readStream.pipe(writeStream);
