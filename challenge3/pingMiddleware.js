function pingMiddleware(req, res, next) {
  console.log("Middleware untuk endpoint / dijalankan");
  res.json({ message: "Ping Successfully" });
}

module.exports = {
  pingMiddleware,
};