const pageNotFound = async (req, res) => {

   try{

      res.render("page-404")
   } catch (error) {
         res.redirect("/pageNotFound")

   }
};

const loadHompage = async (req,res)=>{
    try {

        return res.render("home");

    } catch (error) {
        console.log("Home page not found");
        res.status(500).send("Server error")

    }
}


module.exports = {
    loadHompage,
    pageNotFound,
};