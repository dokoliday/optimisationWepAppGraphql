"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
describe('utils', function () {
    describe('parseDate', function () {
        describe('with null year and full date', function () {
            it('throws error', function () {
                expect(function () { return _1.parseDate(null, null); }).toThrowErrorMatchingInlineSnapshot("\"Could not parse date without year.\"");
            });
        });
        describe('with year', function () {
            var year = 2018;
            describe('with full date as YYYY-MM-DD', function () {
                var fullDate = '2018-07-14';
                it('returns date based on full date', function () {
                    expect(_1.parseDate(year, fullDate)).toMatchInlineSnapshot("2018-07-14T00:00:00.000Z");
                });
            });
            describe('with no full date', function () {
                it('returns date based on year on January 1st', function () {
                    expect(_1.parseDate(year, null)).toMatchInlineSnapshot("2018-01-01T00:00:00.000Z");
                });
            });
        });
    });
    describe('parseDateWithTimeInParis', function () {
        describe('with date in summer time', function () {
            it('returns date parsed considering Paris timezone with GMT+2', function () {
                expect(_1.parseDateWithTimeInParis('2019-06-05', '13:30')).toMatchInlineSnapshot("2019-06-05T11:30:00.000Z");
            });
        });
        describe('with date in winter time', function () {
            it('returns date parsed considering Paris timezone with GMT+1', function () {
                expect(_1.parseDateWithTimeInParis('2019-12-05', '13:30')).toMatchInlineSnapshot("2019-12-05T12:30:00.000Z");
            });
        });
    });
});
//# sourceMappingURL=index.spec.js.map