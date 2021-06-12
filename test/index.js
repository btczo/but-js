'use strict';

var should = require('chai').should();
var but = require('../');

describe('#versionGuard', function() {
  it('global._but should be defined', function() {
    should.equal(global._but, but.version);
  });

  it('throw an error if version is already defined', function() {
    (function() {
      but.versionGuard('version');
    }).should.throw('More than one instance of but');
  });
});
