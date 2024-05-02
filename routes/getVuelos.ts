import express from "express";
import getVuelosController from '../controllers/getVuelos-controller';
import validateToken from "../middleware/validate-token";
const router = express.Router();


router.get('/', validateToken, getVuelosController);


export default router;