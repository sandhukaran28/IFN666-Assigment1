module.exports = (req, res, next) => {
    if (Object.keys(req.body).length > 0 && req.headers['content-type'] !== 'application/json') {
        return res.status(415).json({ error: 'Unsupported Media Type. Use application/json.' });
    }
    next();
};