(function() {
    var modules = {};

    window.require = function(path) {
        if (!modules[path]) {
            if (window[path]) {
                return window[path];
            }
            throw new Error("Can't require(" + path + ')');
        }
        return modules[path].exports;
    };
    window.require.register = function(modulePath, code) {
        var module = modules[modulePath] = {
            id      : modulePath,
            url     : modulePath,
            exports : {}
        };
        var fun = new Function('module', 'exports', code);
        fun(module, module.exports);
    }
}());
