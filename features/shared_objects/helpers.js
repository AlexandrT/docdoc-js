YAML = require('yamljs');

module.exports = {
  loadYaml: function(filepath) {
    return YAML.load(filepath);
  }
}
