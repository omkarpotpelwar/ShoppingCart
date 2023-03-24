import { check } from './compute'

describe('test',()=> {
    it("Check false", () => {
        let value = check(2);
        expect(value).toBeFalse
    }) //spec

    it("Check true", () => {
        let value = check(0);
        expect(value).toBeTruthy
    })
}) // suite group of releated test
