let isFirstPing = true;

const isFirstPingMiddleware = (req, res, next) => {
  if (isFirstPing) {
    isFirstPing = false;
    res.json({ message: 'Ping success' });
  } else {
    next();
  }
};

module.exports = { isFirstPingMiddleware };