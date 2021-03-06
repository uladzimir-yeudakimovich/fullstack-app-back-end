const { showErrorLogger } = require('./logger');

const errorHandler = (err, req, res, next) => {
  showErrorLogger(err.message);
  if (err.name === 'CastError') {
    return res.status(400).send({ error: 'malformatted id' });
  } else if (err.name === 'ValidationError') {
    return res.json({ status: 400, error: err.message });
  } else if (err.name === 'JsonWebTokenError') {
    return res.status(401).json({ error: 'invalid token' });
  }
  res.status(500).send('Server error');
  next(err);
};

module.exports = errorHandler;
