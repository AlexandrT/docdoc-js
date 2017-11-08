module.exports = {
  url: 'http://docdoc.ru/library',

  elements: {
    itemBlock: by.xpath('//div[@class="library__list-item"]'),
    itemLink: by.xpath('.//a[@class="library__list-inner"]'),
    itemName: by.xpath('.//span[@class="library__list-left"]')
  },

  getBlocks: function() {
    var selector = page.docdocLibrary.elements.itemBlock;

    return driver.findElements(selector).then(function(result) {
      return result;
    })
    .catch(function() {
      return '';
    });
  }
};
