import { Router } from "express";
 

const router = Router()



router.get('/:continent/:country', async (req, res) => {


  const continent = req.params.continent;
  const country = req.params.country;
  const location = `${continent}/${country}`;

  try {
      const response = await fetch(`https://timeapi.io/api/Time/current/zone?timeZone=${location}`);
      
      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }
      
      const data = await response.json(); 

      res.render("index", { Country: country, date: data["date"], time: data["time"] });
  } catch (error) {
      console.error(error);
      res.status(500).send("Can not fetch the time");
  }
});


router.get('/',(req,res) => {

  res.redirect("/America/Santo_Domingo");

});

export default router;