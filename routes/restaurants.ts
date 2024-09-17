import express from 'express';

const router = express.Router();

router.get('/', async (req, res) => {
	res.send('All restaurants');
});

export default router;
