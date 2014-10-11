decaf-bundler
=============

Bundles CommonJS style modules into a single .js file and provides a browser side require() method.

## Use:

```javascript
// server, bundle.js URL requested:
var Bundler = require('decaf-jolt-require').Bundler;

res.writeHead(200, { 'Content-type' : 'application/json' });
res.write(
    new Bundler()
        .require('some_module')
        .require('another_module')
        .literal('$', '$')
        .bundle()
);

// client
<script src="bundle.js"></script>
<script>
var some_module = require('some_module'),
    another_module = require('another_module'),
    $ = require('$');
</script>
```

A Bundler instance tracks files to be bundled and prepared for client side CommonJS style require().  You may chain
calls to .require() and .literal() to configure the bundle.  Finally, call .bundle() to get the combined bundle as
JavaScript source.

The .require() method tells the Bundler to include the source to the specified file.  The client calls require() as
is done on the server, using the path specified to .require().

The .literal() method is a way to have require() return a window type global, or some other variable you choose.  In
the preceding example, we're allowing the client to .require('$'), which returns $/jQuery.

