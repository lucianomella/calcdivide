const utils = require("./utils");

it('validaDatos retorna true', (done) => {
    expect(utils.validaDatos({ 'a': 0, 'b': 1 })).toBe(true);
    done();
});

it('validaDatos retorna false', (done) => {
    expect(utils.validaDatos({ 'a': 'afr', 'b': 1 })).toBe(false);
    done();
});

it('validaDatos retorna false', (done) => {
    expect(utils.validaDatos({ 'b': 1 })).toBe(false);
    done();
});

it('isNumber retorna true', (done) => {
    expect(utils.isNumber('456')).toBe(true);
    done();
});

it('isNumber retorna true', (done) => {
    expect(utils.isNumber(5864)).toBe(true);
    done();
});

it('isNumber retorna false', (done) => {
    expect(utils.isNumber('4+56')).toBe(false);
    done();
});

it('isNumber retorna false', (done) => {
    expect(utils.isNumber('fgghk')).toBe(false);
    done();
});