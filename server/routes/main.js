import express from 'express';
import { createCause, getAllCause, getSingleCause, updateCause, deleteCause } from '../controllers/cause';
import { createUser, loginUser} from '../controllers/user';
import verifyToken from '../middleware/verifytoken';

const router = express.Router();

// Causes Enpoints
router.post('/cause', verifyToken, createCause);
router.get('/cause', getAllCause);
router.get('/cause/:causeId', getSingleCause);
router.patch('/cause/:causeId', updateCause);
router.delete('/cause/:causeId', deleteCause);

// User Endpoints
router.post('/user/signup', createUser);
router.post('/user/login', loginUser);

export default router;