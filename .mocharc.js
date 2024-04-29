"use strict";

// This is a JavaScript-based config file containing every Mocha option plus others.
// If you need conditional logic, you might want to use this type of config,
// e.g. set options via environment variables 'process.env'.

module.exports = {
    "allow-uncaught": false, // true, allows uncaught exceptions to propagate.
    "async-only": false, // true, forces all tests to be defined using the async function.
    bail: false, // true, exits the test suite immediately upon the first test failure.
    "check-leaks": false, // true, checks for global variable leaks after running tests.
    color: true, // true, enables colorized output in the console.
    delay: false, // true, delays execution of root-level test suites and hooks until all tests have finished.
    diff: true, // true, enables the diff view when displaying failures.
    exit: true, // true, exits after tests complete regardless of pass or fail.
    extension: ["js", "cjs", "mjs"], //Specifies the file extensions to consider when looking for test files.
    "fail-zero": true, // true, returns a zero status code even if there are failing tests.
    "full-trace": false, // true, displays the full stack trace for test failures.
    global: ["jQuery", "$"], // Specifies an array of global variables to make available in test suites.
    ignore: ["node_modules"], // Specifies an array of files to ignore when searching for test files.
    "inline-diffs": false, // true, displays diff results inline for test failures.
    package: "./package.json", // Specifies the path to the package.json file for the project.
    parallel: false, // true, runs tests in parallel.
    recursive: false, // true, searches for test files recursively in subdirectories.
    reporter: "spec", // Specifies the reporter to use for displaying test results.
    retries: 1, // Specifies the number of times to retry failed tests.
    slow: "75", // Specifies the "slow" threshold in milliseconds.
    sort: false, // true, sorts test files alphabetically.
    spec: ["test/**/*.js"], // Specifies an array of file paths or patterns for test files
    timeout: "3000", // Specifies the timeout for each test in milliseconds. Same as "timeout: '3s'"
    // timeout: false, // Same as "timeout: 0"
    "trace-warnings": true, // true, displays stack traces for deprecation warnings.
    ui: "bdd", // Specifies the interface style to use (e.g., BDD).
    "v8-stack-trace-limit": 100, // Specifies the V8 stack trace limit.
    watch: false, // true, watches for changes in test files and re-runs tests on change.
    "watch-files": ["test/**/*.js"], // Specifies an array of file paths or patterns to watch for changes.
};
