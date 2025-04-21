import express from 'express';
import { TriHandler } from "../handler/triHandler";

const router = express.Router();
const handler = new TriHandler();

router.get('/',handler.getTriangles.bind(handler));

export default router;