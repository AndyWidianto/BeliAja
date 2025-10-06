
const ErrorHanlder = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const message = err.message || "Internal server error";

    if (err.isOperational) {
        return res.status(statusCode).json({
            success: false,
            message
        });
    }
    res.status(500).json({
        success: false,
        message
    });
}


module.exports = { ErrorHanlder };