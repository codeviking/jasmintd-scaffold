# jasmintd-scaffold

Template for a project using unit tests architected with [Jasmine](http://pivotal.github.com/jasmine/) and [requirejs](http://requirejs.org/) and executed via [JsTestDriver](http://code.google.com/p/js-test-driver/).

This project uses the [jasmintd](http://github.com/codeviking/jasmintd) adapter which allows Jasmine to execute effectively within JsTestDriver.

## Installation	

Download and extract the latest version:

* [jasmintd-scaffold v1.0.0](https://github.com/codeviking/jasmintd-scaffold/archive/v1.0.0.tar.gz)

Verify that you have java installed by typing the following command into your terminal:

```
which java
```

Run the sample specs to make sure things work (replace the browser path with the path to the browser you'd like to use to execute the tests):

```
./run_specs /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome
```

Start writing your project and Jasmine based tests.


## <a name="writing"></a>Writing Tests

The [jasmintd](https://github.com/codeviking/jasmintd) package enables the execution of Jasmine and requirejs based unit tests within JsTestDriver. For the most part, the unit tests conform with the standard syntax of Jasmine -- with a few small adjustments to accomodate the active module pattern enabled by requirejs.

The method by which one writes a test can best be explained by example:

Let's say, for instance, you had a script called `Router.js` that lives in `src/lib/`.   

To start, you'd create a file called `Router.spec.js` and drop it into `specs/`.  The naming is important, as JSTestDriver is configured run tests named with the `*.spec.js` pattern.  You can modify this pattern by customizing the `specs.conf` file that lives at the project root.

After creating the test, you'd start by defining your suite like so:

```
describe('Router', [ 'lib/Router' ], function() {
	// Test code to come
});
```

This informs the test runner that we're running a suite called `Router` and that we require the file `/src/lib/Router.js`.   The required file will be loaded and passed to each of our `it()`, `beforeEach` and `afterEach` functions defined below.

Let's say the Router API has two functions, `register` and `unregster`.  We'd then expand our test suite to look like so:

```
describe('Router', [ 'lib/Router' ], function() {
	describe('.register'), function() {
		it('is a function', function(Router) {
			expect(typeof Router.register).toEqual('function');
		});
	});
	describe('.unregister'), function() {
		it('is a function', function(Router) {
			expect(typeof Router.unregister).toEqual('function');
		});
	});
});
```

Notice how the `Router` parameter is declared with each `it()` call.  That `Router` param is provided at runtime and is the exported functionality defined in the `lib/Router.js` module.

You can specify multiple dependencies by adding them to the array of dependencies in the original `describe` call.  For instance:

```
describe('Router', [ 'lib/Router', 'lib/Url' ], function() {
	describe('.register'), function() {
		it('is a function', function(Router, Url) {
			expect(typeof Router.register).toEqual('function');
		});
	});
	describe('.unregister'), function() {
		it('is a function', function(Router, Url) {
			expect(typeof Router.unregister).toEqual('function');
		});
	});
});
```

You can also define nested dependencies to be loaded only for the nested test blocks.  For instance:

```
describe('Router', [ 'lib/Router' ], function() {
	describe('.register', [ 'lib/Url' ], function() {
		it('is a function', function(Router, Url) {
			expect(typeof Router.register).toEqual('function');
		});
	});
	describe('.unregister', function() {
		it('is a function', function(Router) {
			expect(typeof Router.unregister).toEqual('function');
		});
	});
});
```

## Running Tests

To run all test suites, simply execute the `run_specs` script with the path to the browser of your choice:

```
./run_specs /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome
```

To run a specific suite, specified via a `describe` statement, simply pass in the suite name after the browser path.  For instance, we could run all of the `Router` tests describe above via:

```
./run_specs /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome Router
```

If we only wanted to run the `Router.register` specs we'd use:

```
./run_specs /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome Router.register
```

We can even add multiple, comma-delimited specs to execute:

```
./run_specs /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome Router.register,Router.unregister
```

That's it, happy testing!

---

&copy; 2013 Sam Skjonsberg.  This software is licensed with the [MIT License](LICENSE).

