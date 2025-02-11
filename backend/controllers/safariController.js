
// Controller methods
exports.getAllSafaris = (req, res) => {
  res.json(safaris);
};

exports.getSafariById = (req, res) => {
  const safari = safaris.find((s) => s._id === req.params.id);
  if (safari) {
    res.json(safari);
  } else {
    res.status(404).json({ message: 'Safari not found' });
  }
};

exports.createSafari = (req, res) => {
  const { name, thumbnail, duration } = req.body;

  if (!name || !thumbnail || !duration) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newSafari = {
    _id: uuidv4(),
    name,
    thumbnail,
    duration,
  };

  safaris.push(newSafari);
  res.status(201).json(newSafari);
};

exports.updateSafari = (req, res) => {
  const { id } = req.params;
  const { name, thumbnail, duration } = req.body;

  const safariIndex = safaris.findIndex((s) => s._id === id);

  if (safariIndex === -1) {
    return res.status(404).json({ message: 'Safari not found' });
  }

  const updatedSafari = { ...safaris[safariIndex], name, thumbnail, duration };
  safaris[safariIndex] = updatedSafari;

  res.json(updatedSafari);
};

exports.deleteSafari = (req, res) => {
  const { id } = req.params;

  const safariIndex = safaris.findIndex((s) => s._id === id);

  if (safariIndex === -1) {
    return res.status(404).json({ message: 'Safari not found' });
  }

  safaris.splice(safariIndex, 1);
  res.status(204).send(); // No content
};
