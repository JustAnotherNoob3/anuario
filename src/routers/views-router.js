import { Router } from "express";
import {showFolder} from '../controllers/views-controller.js';

const router = Router();
router.get("/:pid", showFolder);
export default router;
