const cds = require("@sap/cds");



module.exports = cds.service.impl(async (srv) => {

  // const db = await cds.connect.to("db");

  // const { Goals } = db.entities("Tracker");



  // this.on ('Job', (req,res)=>{



  // }) //> custom actions



  // this.on ('CREATE',`Books`, (req)=>{})

  // this.before ('UPDATE',`*`, (req)=>{})

  // this.after ('READ',`Goals`, (req)=>{})

  srv.on("Job", (req) => {

    console.log("Hello");

  });



  // srv.after("READ", "Goals", (req) => {

  //   console.log("hello");

  //   query = SELECT.from(Goals);

  // });

});