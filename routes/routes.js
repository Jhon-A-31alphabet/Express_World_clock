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

      console.log(request.data["dateTime"]);


      res.render("index",{Country__: country,date:request.data["date"],time:request.data["time"] , timezone:request.data["timeZone"]});

 

   

    } catch (error) {

      console.error('Error al obtener la hora:', error);

      res.status(500).send('Error al obtener la hora');

    }

  });



export default router;