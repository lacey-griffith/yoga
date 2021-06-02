const {format_url} = require('../utils/helpers')
const { test } = require('@jest/globals');

test('format_url to reutn "+" instead of spaces', () => {
        const string = "pose name"

        expect(format_url(string)).toBe('pose+name')

})