const express = require('express');
const {addReport,
        getAllReport,
        getReport
      } = require('../controllers/duckController');

const router = express.Router();

router.post('/duck', addReport );
router.get('/ducks_report', getAllReport);
router.get('/duck/:id', getReport);

module.exports = {
    routes: router
}