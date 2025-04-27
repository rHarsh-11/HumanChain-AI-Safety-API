import Incident from "../models/incident.js";


//Fetch all incidents
export const getIncidents = async (req, res) => {
  try{
    const incidents = await Incident.find();
    res.status(200).json(incidents);
  } catch (error){
    res.status(500).json({ message : error.message });
  }
};

//Create a new incident
export const createIncident = async (req, res) => {
  const {title, description, severity} = req.body;

  if(!title || !description || !severity){
    return res.status(400).json({message: 'All fields title, description and severity are required.'})
  }

  if(!["Low", "Medium", "High"].includes(severity)){
    return res.status(400).json({message: 'Severity value must Low, Medium or High'})
  }
  try{
      const newIncident = new Incident({title, description, severity});
      await newIncident.save();
      res.status(200).json(newIncident);

  } catch (error){
    console.error(error);
    res.status(500).json({ message : "Server Error"});
  }
}

//Fetch incident by id
export const getIncidentById =  async (req, res) => {
  try{
    const incident = await Incident.findById(req.params.id);
    if(!incident) {
      return res.status(404).json({message : "Incident not found"});
    }
    res.status(200).json(incident);
  } catch(error){
    res.status(500).json({message : error.message});
  }
}

//Delete incident by id
export const deleteIncident = async (req, res) => {
  try{
    const incident = await Incident.findById(req.params.id);
    if(!incident) {
      return res.status(404).json({message : "Incident not found"});
    }
    await incident.deleteOne();
    res.status(200).json({message : "Incident deleted successfully."})
  } catch(error) {
    res.status(500).json({message : error.message});
  }
};