"use strict";
/**
 * Usuário: name, email, password
 */
Object.defineProperty(exports, "__esModule", { value: true });
function createuser(_a) {
    var _b = _a.name, name = _b === void 0 ? "" : _b, email = _a.email, password = _a.password;
    var user = {
        name: name,
        email: email,
        password: password,
    };
    return user;
}
exports.default = createuser;
