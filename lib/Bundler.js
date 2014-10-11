/**
 * Created by mschwartz on 10/10/14.
 */

var require_source = require('./require').toString();

function Bundler() {
    this.source = [ require_source, '__require__();' ];
}
decaf.extend(Bundler.prototype, {
    require: function(path) {
        this.source.push('require.register("' + path +'", ' + JSON.stringify(require.getContent(path).content) + ');');
        return this;
    },
    literal: function(path, variable) {
        this.source.push('require.register("' + path + '", "module.exports = ' + variable + '");');
        return this;
    },
    bundle: function() {
        return this.source.join('\n;');
    }
});

module.exports = Bundler;
