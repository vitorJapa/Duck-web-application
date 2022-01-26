'use strict';

const { json } = require('body-parser');
const firebase = require('../db');
const Ducks = require('../models/ducks');
const firestore = firebase.firestore();


const addReport = async (req, res, next) => {
    try {
        const req_data = req.body;
        await firestore.collection('Ducks').doc().set(req_data)
        res.status(200).send({"MSG": 'Report Created'});
    } catch (error) {
        res.status(400).send(error.message);
    }
}



const getAllReport = async (req, res, next) => {
    try {
        const allItem = await firestore.collection('Ducks');
        const data = await allItem.get();
        const allItemArray = [];
        if(data.empty) {
            res.status(404).send({'Error': 'No reports where found!'});
        }else {
            data.forEach(doc => {
                const ducks = new Ducks(
                    doc.id,
                    doc.data().ducks_time,
                    doc.data().ducks_food,
                    doc.data().ducks_where,
                    doc.data().ducks_how_many,
                    doc.data().ducks_how_much_food
                );
                allItemArray.push(ducks);
            });
            res.send(allItemArray);
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getReport = async (req, res, next) => {
    try {
        const id = req.params.id;
        const item = await firestore.collection('Ducks').doc(id);
        const data = await item.get();
        if(!data.exists) {
            res.status(404).send({'Error': 'Report with the given ID not found'});
        }else {
            res.send(data.data());
        }
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    addReport,
    getAllReport,
    getReport
}