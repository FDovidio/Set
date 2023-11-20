// cors.js

import Cors from 'cors';

const cors = Cors({
  origin: 'http://localhost:3000', // Reemplaza con la URL de tu aplicación
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true,
});

export default function handler(req, res) {
  return new Promise((resolve, reject) => {
    cors(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}
