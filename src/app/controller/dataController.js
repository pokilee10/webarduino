const Data = require('../model/data');
const { v4: uuidv4 } = require('uuid');
class DataController {
    // GET /blog
    async getData(req, res, next) {
        Data.find({})
            .exec()
            .then((data) => res.json(data))
            .catch(next);
    }

    // GET /blog/detail/:id
    async postData(req, res, next) {
        const { id, name, temperature, humidity, pressure, altitude, sealevelpressure, realaltitude } = req.body;
        if (temperature < 0 || humidity < 0 || temperature > 100 || humidity > 100) {
            res.status(400).send("Data is invalid");
            return;
          }
          let arduinoData = {
            id: null,
            name: null,
            temperature: null,
            humidity: null,
            pressure: null,
            altitude: null,
            sealevelpressure: null,
            realaltitude: null
          };
          arduinoData._id = uuidv4();
          arduinoData.id = id;
          arduinoData.name = name;
          arduinoData.temperature = temperature;
          arduinoData.humidity = humidity;
          arduinoData.pressure = pressure;
          arduinoData.altitude = altitude;
          arduinoData.sealevelpressure = sealevelpressure;
          arduinoData.realaltitude = realaltitude;          
        
          const arduino = await new Data(arduinoData);
          arduino.save()
          .then(() => res.json(arduino))
          .catch(next);
}
}
   
module.exports = new DataController();