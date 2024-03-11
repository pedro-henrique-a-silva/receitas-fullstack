import { App } from './app';

const PORT = process.env.APP_PORT || 3001;

new App().start(PORT);

// const app = require('./app');

// app.listen(3001, () => {
//   console.log('to vivo');
// })