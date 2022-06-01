"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CheckIsValidDomain = void 0;
const CheckIsValidDomain = (domain) => {
    var re = new RegExp(/^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/);
    return domain.match(re);
};
exports.CheckIsValidDomain = CheckIsValidDomain;
const IsValidDomain = (domain) => {
    return /^((?:(?:(?:\w[\.\-\+]?)*)\w)+)((?:(?:(?:\w[\.\-\+]?){0,62})\w)+)\.(\w{2,6})$/.test(domain);
};
