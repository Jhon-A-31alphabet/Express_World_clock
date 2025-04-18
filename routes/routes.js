import { Router } from "express";
 

const router = Router()


function delete__(Name_){
  
  return Name_.replace("_", " ")  // delete _ and replace _ with " "
}

async function fetchWithRetry(url, options, retries = 3) {  //retry the http request if  the api thow an error
  
  for (let i = 0; i < retries; i++) {
      try {

          return await fetch(url, options);
      } catch (error) {
          console.error(`Attemp ${i + 1} failed:`, error);

          if (i === retries - 1) {
              throw new Error("Can not fetch ");
          }
      }
  }
}


router.get('/:continent/:country', async (req, res) => {
  

  let continent = req.params.continent;
  let country = req.params.country;

  let location = `${continent}/${country}`;

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 5000);

  try {

      const response = await fetchWithRetry(`https://timeapi.io/api/Time/current/zone?timeZone=${location}`);
      clearTimeout(timeout);

      if (!response.ok) {
        throw new Error(`Error fetching data: ${response.statusText}`);
      }
      


      const data = await response.json(); 

      let country__ = delete__(country)  

      res.render("index", { Country: country__, date: data["date"], time: data["time"] });

  } catch (error) {
      console.error(error);
      res.status(500).send("Can not fetch the time");
  }
});


router.get('/',(req,res) => {
// redirect to / if not found
  res.redirect("/America/Santo_Domingo");

});



router.get('/IsAlive',(req,res)=>{
  res.redirect("/");
})

export default router;