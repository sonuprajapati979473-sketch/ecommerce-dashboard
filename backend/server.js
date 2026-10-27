import express from 'express';
import cors from 'cors';
import { products } from './data/products.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/products', (req, res) => res.json(products));

app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
