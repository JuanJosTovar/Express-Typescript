import { Router } from "express";
import validateToken from './validate-token';
import { getUsuarios } from "../controllers/usuario-controller";
const router = Router();

router.post('/', validateToken, getUsuarios)

export default router;