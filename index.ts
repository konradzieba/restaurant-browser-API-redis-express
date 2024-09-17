import express from 'express';
import restaurantRouter from './routes/restaurants.js';
import cuisineRouter from './routes/cuisines.js';
import { errorHandler } from './middlewares/error-handler.js';

const PORT = process.env.PORT || 3000;
const app = express();

app.use(express.json());

app.use('/restaurants', restaurantRouter);
app.use('/cuisines', cuisineRouter);

app.use(errorHandler);

app
	.listen(PORT, () => {
		console.log(`Server running on port ${PORT}`);
	})
	.on('error', (error) => {
		throw new Error(`Error Message: ${error.message}`);
	});
