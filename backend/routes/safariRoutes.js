const express = require('express');
const router = express.Router();
const {
  getAllSafaris,
  getSafariById,
  createSafari,
  updateSafari,
  deleteSafari,
} = require('../controllers/safariController');

// Define routes
router.get('/', getAllSafaris);
router.get('/:id', getSafariById);
router.post('/', createSafari);
router.put('/:id', updateSafari);
router.delete('/:id', deleteSafari);

module.exports = router;
