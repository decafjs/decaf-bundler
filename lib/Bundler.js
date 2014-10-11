/**
 * Created by mschwartz on 10/10/14.
 */

function Bundler() {
    this.source = [ require('./require').toSource() ];
}
decaf.extend(Bundler, {
    require: function(path) {
        this.source.push('require.register("' + path +'", ' + JSON.stringify(require.getContent(path)) + ');');
        return this;
    },
    literal: function(path, variable) {
        this.source.push('require.register("' + path + '", module.exports = ' + variable + ');');
        return this;
    },
    bundle: function() {
        return this.source.join('\n;');
    }
});

module.exports = Bundler;
