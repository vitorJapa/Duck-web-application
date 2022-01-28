const express = require('express');
const {addReport,
        validate,
        getAllReport,
        getReport
      } = require('../controllers/duckController');

const router = express.Router();

router.post('/duck', validate('new_Report'), addReport );
router.get('/ducks_report', getAllReport);
router.get('/duck/:id', getReport);

module.exports = {
    routes: router
}