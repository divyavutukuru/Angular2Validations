"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function ValidatePassword(control) {
    if (control.value.includes('guest')) {
        return null;
    }
    else {
        return { validUrl: true };
    }
}
exports.ValidatePassword = ValidatePassword;
//# sourceMappingURL=customValidators.js.map