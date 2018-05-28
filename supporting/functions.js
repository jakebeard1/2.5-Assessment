// don't worry about browser, refer to data by data.insertNameHere and same for selectors, write the function the same way you would a test
let oddsAndEvens = (browser, data, selectors) => {
    browser
        .setValue(selectors.dataEntry, data.evenOddData)
        .click(selectors.splitBtn)
        .verify.containsText(selectors.evenText, data.evenResults)
        .verify.containsText(selectors.oddText, data.oddResults)
}

let filterObject = (browser, data, selectors) => {
    browser
        .setValue(selectors.dataEntry, data.filterObjectData)
        .click(selectors.filterBtn)
        .verify.containsText(selectors.filteredText, data.filterObjectResults)
}

module.exports = {
    oddsAndEvens : oddsAndEvens,
    filterObject : filterObject,
}