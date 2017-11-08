YAML = require('yamljs');

module.exports = function() {
  this.Given(/^I am on the main page$/, function() {
    var yml = shared.helpers.loadYaml('features/support/library.yml');
    this.expected = yml.docdoc.library;

    return helpers.loadPage(page.docdocLibrary.url);
  });

  this.When(/^I check all items and click it$/, function() {
    var promise = require('selenium-webdriver').promise;
    var pendingElements = driver.findElements(page.docdocLibrary.elements.itemBlock);

    pendingElements.then(function (elements) {
      var pendingHref = elements.map(function(elem) {
        var temp = {};
        elem.findElement(page.docdocLibrary.elements.itemLink).getAttribute("href")
        .then(function(item) {
          temp['link'] = item;
        });
        elem.findElement(page.docdocLibrary.elements.itemName).getText()
        .then(function(item) {
          temp['name'] = item;
        })
        return temp;
      });

      var obj = promise.all(pendingHref).then(function(allHref) {
        return allHref;
      });
      debugger
      return obj;
    });
  });

  this.Then(/^I should be on the according page$/, function() {
  });
};
