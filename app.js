const express= require("express");

const app= express();

app.use(express.static("public"));

const path= require("path");
const hbs= require("hbs");

const pathReq= path.join(__dirname, "../public");
const viewPath= path.join(__dirname, "/templates/views");
const partialPath= path.join(__dirname, "/templates/partials");
console.log(pathReq);

app.set('view engine', 'hbs');
app.set('views', viewPath);
hbs.registerPartials(partialPath);

// app.use(express.static(pathReq));



app.get("/", (req, res)=>{
    res.render("index");
});

app.get("/about", (req, res)=>{
    res.render("about");
});

app.get("/weather", (req, res)=>{
    res.render("weather");
});

app.get("*", (req, res)=>{
    res.render("error404", {
        errorMsg: "OOPs! Page Does Not Exist!"
    });
});

app.listen(3000, ()=>{
    console.log("Listening...");
})