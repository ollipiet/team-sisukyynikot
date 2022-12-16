import words from "./../src/words.js";

describe("function words", () => {
    //words('fred, barney, & pebbles') should be ['fred', 'barney', 'pebbles']
    it("should ..", () => {
        const birds = 'tupu, hupu, & lupu';
        expect(words(birds)).toEqual(['tupu', 'hupu', 'lupu']);
    });

    // regex matcher when it does not match
    it("should ..", () => {
        const birds = 'tupu, hupu, & lupu';
        const regexNoNumberOne = '[^1]';
        expect(words(birds, regexNoNumberOne)).toEqual(['tupu', 'hupu', 'lupu']);
    });

    //words() can be improved with a regular expression string
    it("should ..", () => {
        const birdsWeird = 'tupu, hupu, test1 & lupu';
        const regexNoNumberOne = '[^1]';
        expect(words(birdsWeird, regexNoNumberOne)).toEqual(['tupu', 'hupu', 'test1', 'lupu']);
    });

    //words() can be improved with a regular expression string
    it("should ..", () => {
        const birds = 'tupu, hupu, & lupu';
        const regex = '[^,u]';
        expect(words(birds, regex)).toEqual(['t','p','h','p','&','l','p']);
    });

    // test the power and empty characters of regex matcher in words.js
    it("should ..", () => {
        const names = '`lev, Macshû‏‏‎ ‎r, & m\'leet';
        const regex = '[^,u&]';
        expect(words(names, regex)).toEqual(['`lev', 'Macshû', 'r', 'm\'leet']);
    });

    // use nulls, undefined's and numbers to test matches
    it("should ..", () => {
        const differentNames = 'Mari, undefined, null, Sully';
        expect(words(differentNames)).toEqual(['Mari', 'undefined', 'null', 'Sully']);
    });

});