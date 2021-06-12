'use strict';

var but = module.exports;

// module information
but.version = 'v' + require('./package.json').version;
but.versionGuard = function(version) {
  if (version !== undefined) {
    var message = 'More than one instance of but found. ' +
      'Please make sure to require but and check that submodules do' +
      ' not also include their own but dependency.';
    throw new Error(message);
  }
};
but.versionGuard(global._but);
global._but = but.version;

// crypto
but.crypto = {};
but.crypto.BN = require('./lib/crypto/bn');
but.crypto.ECDSA = require('./lib/crypto/ecdsa');
but.crypto.Hash = require('./lib/crypto/hash');
but.crypto.Random = require('./lib/crypto/random');
but.crypto.Point = require('./lib/crypto/point');
but.crypto.Signature = require('./lib/crypto/signature');

// encoding
but.encoding = {};
but.encoding.bech32 = require('./lib/encoding/bech32');
but.encoding.bech32Check = require('./lib/encoding/bech32check');
but.encoding.Base58 = require('./lib/encoding/base58');
but.encoding.Base58Check = require('./lib/encoding/base58check');
but.encoding.BufferReader = require('./lib/encoding/bufferreader');
but.encoding.BufferWriter = require('./lib/encoding/bufferwriter');
but.encoding.Varint = require('./lib/encoding/varint');

// utilities
but.util = {};
but.util.assets = require('./lib/util/assets');
but.util.buffer = require('./lib/util/buffer');
but.util.js = require('./lib/util/js');
but.util.preconditions = require('./lib/util/preconditions');

// errors thrown by the library
but.errors = require('./lib/errors');

// main but library
but.Asset = require('./lib/asset');
but.Address = require('./lib/address');
but.Block = require('./lib/block');
but.MerkleBlock = require('./lib/block/merkleblock');
but.BlockHeader = require('./lib/block/blockheader');
but.HDPrivateKey = require('./lib/hdprivatekey.js');
but.HDPublicKey = require('./lib/hdpublickey.js');
but.Networks = require('./lib/networks');
but.Opcode = require('./lib/opcode');
but.PrivateKey = require('./lib/privatekey');
but.PublicKey = require('./lib/publickey');
but.Script = require('./lib/script');
but.Transaction = require('./lib/transaction');
but.URI = require('./lib/uri');
but.Unit = require('./lib/unit');

// dependencies, subject to change
but.deps = {};
but.deps.bnjs = require('bn.js');
but.deps.bs58 = require('bs58');
but.deps.Buffer = Buffer;
but.deps.elliptic = require('elliptic');
but.deps._ = require('lodash');

// Internal usage, exposed for testing/advanced tweaking
but.Transaction.sighash = require('./lib/transaction/sighash');
