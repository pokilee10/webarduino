const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);
const Data = new Schema(
    {
        _id: { type: String },
        id: { type: String},
        name: { type: String },
        temperature: { type: Number },
        humidity: { type: Number },
        pressure: { type: Number },
        altitude: { type: Number },
        sealevelpressure: { type: Number },
        realaltitude: { type: Number },
    },
    {
        _id: false,
        timestamps: true,
    },
);

module.exports = mongoose.model('datas', Data);