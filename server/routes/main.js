import express from 'express';
import { createCause, getAllCause, getSingleCause, updateCause, deleteCause } from '../controllers/cause';

const router = express.Router();

router.post('/cause', createCause);
router.get('/cause', getAllCause);
router.get('/cause/:causeId', getSingleCause);
router.patch('/cause/:causeId', updateCause);
router.delete('/cause/:causeId', deleteCause);

export default router;