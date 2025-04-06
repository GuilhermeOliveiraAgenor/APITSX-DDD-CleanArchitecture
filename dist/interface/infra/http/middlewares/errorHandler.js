"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = errorHandler;
function errorHandler(err, req, res, next) {
    console.error(err);
    res.status(500).json({
        status: 'error',
        message: err.message || 'Internal server error',
    });
}
