module.exports = (req, res, next) => {
    const methodsRequiringBody = ['POST', 'PUT', 'PATCH'];

    if (methodsRequiringBody.includes(req.method) && req.body && !req.is('application/json')) {
        return res.status(415).json({ error: 'Unsupported Media Type. Use application/json.' });
    }

    next();
};
