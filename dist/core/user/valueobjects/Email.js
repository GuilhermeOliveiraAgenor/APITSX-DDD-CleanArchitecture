"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Email = void 0;
class Email {
    constructor(email) {
        if (!email.includes('@')) {
            throw new Error('Invalid email address');
        }
        this.value = email;
    }
    getValue() {
        return this.value;
    }
}
exports.Email = Email;
