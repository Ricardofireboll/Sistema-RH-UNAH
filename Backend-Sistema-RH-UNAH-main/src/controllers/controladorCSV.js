const {DataBase} = require('../DB/mysql.js');
const dataBase = require('../model/ModelAsistencia');
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const csvtojson = require('csvtojson')

const csvfile = "hola.csv"


const storage = multer.diskStorage({
  destination: path.join(__dirname, "../../"),
  filename: (req, file, cb) => {
    console.log(file)
    cb(null, `hola.csv`);
    // cb(null, `${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

exports.upload = upload.single("csv");

exports.uploadFile = (req, res) => {
  csvtojson()
  .fromFile(csvfile)
  .then((json) => {
      console.log(json[0].id_empleado)
      console.log(json[0].fecha)
      console.log(json[0].hora_marcada)
      console.log(json[0].llegada)
      const id_empleado = json[0].id_empleado;
      const fecha = json[0].fecha;
      const hora_marcada = json[0].hora_marcada;
      const llegada = json[0].llegada;

      var sql = "INSERT INTO asistencia (id_empleado, fecha,hora_marcada, llegada) VALUES ?";
      var values = [
        // ['2', '2015-02-01', '7:43 AM'],
        // ['2', '2015-02-01', '7:44 AM'],
        // ['2', '2015-02-01', '7:45 AM'],
      ]
      for (let i = 0; i < json.length; i++) {
        values.push([json[i].id_empleado, json[i].fecha, json[i].hora_marcada,json[i].llegada]);
        
      }
      console.log(values)
      DataBase.query(sql, [values],(err, rows) => {
          console.log(
            err
              ? "Err INSERT INTO " + "asistencia" + " " + err
              : "asistencia" + ": asistencia added!"
          );
          res.json(
            err
              ? { err: "Error al cargar la asistencia" }
              : { msg: "asistencia cargada satisfactoriamente" }
          );
        }
      )
  })
  };

  // exports.uploadFile = (req, res) => {
  //   const tipo = req.file.mimetype;
  //     const nombre = req.file.originalname;
  //     const date = fs.readFileSync(path.join(__dirname, "../../" + req.file.filename));
  
  //     DataBase.query(
  //       "INSERT INTO " + "image" + " set ?",
  //       [{ tipo, nombre, date }],
  //       (err, rows) => {
  //         console.log(
  //           err
  //             ? "Err INSERT INTO " + "image" + " " + err
  //             : "image" + ": Image added!"
  //         );
  //         res.json(
  //           err
  //             ? { err: "Error al cargar la imagen" }
  //             : { msg: "Imagen cargada satisfactoriamente" }
  //         );
  //       }
  //     )
  //   };

/****************************************************************/
