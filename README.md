<img src="https://devmounta.in/img/logowhiteblue.png" width="250" align="right">

# 2.5 Assessment - Automation Basics

## Setup

Fork this repository, clone it to your computer, and then `cd` into the repository folder.  As usual, `npm i` will install the needed dependencies and `npm start` will run the app.  You'll need to open a second terminal to run your tests using the `nightwatch` command.

## Your Assessment

This project includes several small pieces of functionality.  We will be testing all of them!  Remember that to set up your testing, you can:

1. Copy and paste an existing `nightwatch.props.js`.
1. Create your test framework, usually a "tests" or "nightwatch" folder in the repository's base directory, and testing/resource folders inside of that.
   * The existing `nightwatch.conf.js` file is expecting your tests to be in a `nightwatch/tests` folder; if you wanted to do something different, you are more than welcome to, but don't forget to update the `"src_folders"` property of the `nightwatch.conf.js` file appropriately.
1. Plan WHAT should be tested.
   * Start with one test for each piece of functionality and get as far as you can, before you worry about testing the same piece multiple ways.
1. Plan HOW you can test these items.
   * You can put this information into JIRA if it will be helpful for you, but it is not required for this assessment.
1. Gather selectors.  I do want to see a page object file for this project.
1. What test data will you need?  You *can* but don't have to have a separate file for the test data.
   * If you need help for any of this old projects are fair game, the internet is fair game, but I'd prefer you don't discuss this much amongst yourselves.
1. Start writing!

If you aren't sure where to get started, an easy way to organize your tests is to write your steps in comments, and then in code.

For example, based on the **Odds and Evens** bit of functionality:
```js
    'Odds and Evens' : browser => {
        //input numbers

        //click sort button

        //check even output

        //check odd output

    }
```

### Helpful NightwatchJS Commands

* `.click()` - we'll use this one
* `.setValue()` - we'll set that for sure
* `.expect.element().text.to.equal()` - just like testing the calculator...
* `.expect.element().text.to.contain()` - works exactly the same as the above, except that it looks for something to appear SOMEWHERE in the element's text, not for an exact match.  (`{hello: 'world', goodnight: 'moon'}` could have a match for "hello" or "moon" if we used this command)

Look at the [NightwatchJS API docs for more details](http://nightwatchjs.org/api).

## Functionality

### Odds and Evens

This field will take a string of numbers and sort them into odd and even outputs.

### Filter Object

These objects can be filtered by entering any of their properties.  Only objects with that property will appear in the results.

### Filter String

From the listed strings, only those containing the string you input will appear in the results.

### Palindrome

Click the button to see whether the string you entered is, or is not, a palindrome.

### Sum

On the input lines, put in two numbers, click the button to see their sum.

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2018. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://devmounta.in/img/logowhiteblue.png" width="250">
</p>


