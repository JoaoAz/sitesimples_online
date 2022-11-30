const express = require("express");
const servidor = express();

servidor.set("view engine","ejs");

servidor.use(express.static("ficheiros"));

servidor.get("/",function(pedido,resposta){
resposta.render("index");
})

servidor.listen(4444,()=>{
console.log(">>>>>>>>>>>>>>>>>> SERVIDOR LIGADO <<<<<<<<<<<<<<<<<<<<<<<<");
})