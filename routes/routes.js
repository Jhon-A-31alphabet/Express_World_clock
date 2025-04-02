import { Router } from "express";
import axios from "axios";
 

const router = Router()

router.get('/',(req,res) => {

    res.redirect("/America/Santo_domingo");

});

router.get('/:Continent/:country', async (req, res) => {
    let continent = req.params.Continent;
    let country = req.params.country;
    let location = `${continent}/${country}`;



    try {

    let request = await axios.get(`https://timeapi.io/api/Time/current/zone?timeZone=${location}`);
   
    res.render("index",{Country__: country,date:request.data["date"],time:request.data["time"]});


    } catch (error) {
      res.status(500).send('Can not get the time');
  
    }

});




export default router;