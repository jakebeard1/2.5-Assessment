const selectors = require('../supporting/selectors')
const data = require('../supporting/data')
const functions = require('../supporting/functions')

module.exports = {
    beforeEach: browser => {
        browser.url('http://localhost:3000')
    },

    'Odds and Evens Test' : browser => {
        functions.oddsAndEvens(browser, data.oddsAndEvens, selectors["oddsAndEvens"])
        
    },
    'Filter Object Test' : browser => {
        functions.filterObject(browser, data.filterObject, selectors["filterObject"])
    },

    after: browser => {
        browser.end()
    }
}
