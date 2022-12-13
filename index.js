const { returns } = require("chai-spies");

function receivesAFunction(cb) {
    cb();
}

var fn;

fn = returnsANamedFunction();

function returnsANamedFunction() {
    return receivesAFunction;
}

fn;

var silly;

silly = returnsAnAnonymousFunction();

function returnsAnAnonymousFunction() {
    return function() {
        console.log("hi");
    }
}

silly;