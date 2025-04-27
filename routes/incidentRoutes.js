import express from "express";
import { getIncidents, createIncident, getIncidentById, deleteIncident } from "../controllers/incidentController.js";

const router = express.Router();

router.get('/incidents', getIncidents);
router.post('/incidents', createIncident);
router.get('/incidents/:id', getIncidentById);
router.delete('/incidents/:id', deleteIncident);

export default router;