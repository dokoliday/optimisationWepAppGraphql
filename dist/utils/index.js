"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var slugify_1 = __importDefault(require("slugify"));
var crypto_1 = require("crypto");
var moment_1 = __importDefault(require("moment"));
var config_1 = require("./config");
var moment_timezone_1 = require("moment-timezone");
var constants_1 = require("./constants");
var ENCRYPTION_ALGORITHM = 'aes-128-cbc';
var encrypt = function (text) {
    var cipher = crypto_1.createCipheriv(ENCRYPTION_ALGORITHM, config_1.FILM_ID_CIPHER_KEY, config_1.FILM_ID_CIPHER_IV);
    return "" + cipher.update(text, 'utf8', 'hex') + cipher.final('hex');
};
exports.encrypt = encrypt;
var decrypt = function (text) {
    var decipher = crypto_1.createDecipheriv(ENCRYPTION_ALGORITHM, config_1.FILM_ID_CIPHER_KEY, config_1.FILM_ID_CIPHER_IV);
    return "" + decipher.update(text, 'hex', 'utf8') + decipher.final('utf8');
};
exports.decrypt = decrypt;
var _slugify = function (text) {
    return slugify_1.default(text, {
        remove: /[*+~.,;()'"!:@—–]/g,
        lower: true,
    });
};
var getCinemaSlug = function (name, city, zipCode) {
    var baseParts = name + "-" + city;
    var parts = city === 'Paris' ? baseParts + "-" + zipCode.slice(3, 5) : baseParts;
    return _slugify(parts);
};
exports.getCinemaSlug = getCinemaSlug;
var getFilmSlug = function (title, releaseDate, directors) {
    var releaseYear = releaseDate.getUTCFullYear();
    return _slugify(title + "-" + releaseYear + "-" + directors);
};
exports.getFilmSlug = getFilmSlug;
var getNumberOrNull = function (number) {
    return Number.isNaN(number) ? null : number;
};
exports.getNumberOrNull = getNumberOrNull;
var getNumberOrZero = function (number) {
    return Number.isNaN(number) ? 0 : number;
};
exports.getNumberOrZero = getNumberOrZero;
var parseDate = function (year, fullDate) {
    if (!year) {
        throw new Error('Could not parse date without year.');
    }
    var date = fullDate ? new Date(fullDate) : new Date(year.toString());
    return date;
};
exports.parseDate = parseDate;
var parseDateWithTimeInParis = function (date, time) {
    return moment_timezone_1.tz(date + " " + time, constants_1.TIMEZONE).toDate();
};
exports.parseDateWithTimeInParis = parseDateWithTimeInParis;
var parseInteger = function (numberAsString) {
    return Number.parseInt(numberAsString, 10);
};
exports.parseInteger = parseInteger;
var getMillisecondsFromHours = function (NUMBER_OF_HOURS_SCRAPED_DATA_CONSIDERED_RECENT) {
    return NUMBER_OF_HOURS_SCRAPED_DATA_CONSIDERED_RECENT * 60 * 60 * 1000;
};
exports.getMillisecondsFromHours = getMillisecondsFromHours;
var doStringsMatchCaseInsensitive = function (string1, string2) { return new RegExp('^' + string1 + '$', 'i').test(string2); };
exports.doStringsMatchCaseInsensitive = doStringsMatchCaseInsensitive;
var getDayFormatted = function (date) {
    return moment_1.default(date, 'YYYY-MM-DD', 'fr')
        .tz(constants_1.TIMEZONE)
        .format('dddd D');
};
exports.getDayFormatted = getDayFormatted;
var getHourFormatted = function (date) {
    return moment_1.default(date, 'YYYY-MM-DD', 'fr')
        .tz(constants_1.TIMEZONE)
        .format('HH:mm');
};
exports.getHourFormatted = getHourFormatted;
//# sourceMappingURL=index.js.map