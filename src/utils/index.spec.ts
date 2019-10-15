import { parseDate, parseDateWithTimeInParis } from '.';

describe('utils', () => {
  describe('parseDate', () => {
    describe('with null year and full date', () => {
      it('throws error', () => {
        expect(() => parseDate(null, null)).toThrowErrorMatchingInlineSnapshot(
          `"Could not parse date without year."`
        );
      });
    });

    describe('with year', () => {
      const year = 2018;

      describe('with full date as YYYY-MM-DD', () => {
        const fullDate = '2018-07-14';

        it('returns date based on full date', () => {
          expect(parseDate(year, fullDate)).toMatchInlineSnapshot(
            `2018-07-14T00:00:00.000Z`
          );
        });
      });

      describe('with no full date', () => {
        it('returns date based on year on January 1st', () => {
          expect(parseDate(year, null)).toMatchInlineSnapshot(
            `2018-01-01T00:00:00.000Z`
          );
        });
      });
    });
  });

  describe('parseDateWithTimeInParis', () => {
    describe('with date in summer time', () => {
      it('returns date parsed considering Paris timezone with GMT+2', () => {
        expect(
          parseDateWithTimeInParis('2019-06-05', '13:30')
        ).toMatchInlineSnapshot(`2019-06-05T11:30:00.000Z`);
      });
    });

    describe('with date in winter time', () => {
      it('returns date parsed considering Paris timezone with GMT+1', () => {
        expect(
          parseDateWithTimeInParis('2019-12-05', '13:30')
        ).toMatchInlineSnapshot(`2019-12-05T12:30:00.000Z`);
      });
    });
  });
});
