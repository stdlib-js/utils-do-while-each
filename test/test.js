/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var noop = require( '@stdlib/utils-noop' );
var isnan = require( '@stdlib/assert-is-nan' ).isPrimitive;
var Float32Array = require( '@stdlib/array-float32' );
var Float64Array = require( '@stdlib/array-float64' );
var doWhileEach = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof doWhileEach, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a collection', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {},
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			doWhileEach( value, noop, noop );
		};
	}
});

tape( 'the function throws an error if not provided a function to invoke', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			doWhileEach( [ 1, 2, 3 ], value, noop );
		};
	}
});

tape( 'the function throws an error if not provided a predicate function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			doWhileEach( [ 1, 2, 3 ], noop, value );
		};
	}
});

tape( 'if provided an empty collection, the function invokes a provided function once', function test( t ) {
	var count = 0;
	var arr = [];

	function predicate() {
		t.fail( 'should not be invoked' );
	}

	function foo( value, index, collection ) {
		count += 1;
		t.pass( 'should be invoked' );
		t.strictEqual( value, void 0, 'value is undefined' );
		t.strictEqual( value, void 0, 'value is undefined' );
		t.strictEqual( collection, arr, 'provides input collection' );
	}

	doWhileEach( arr, foo, predicate );

	t.deepEqual( arr, [], 'expected result' );
	t.strictEqual( count, 1, 'should only invoke once' );

	t.end();
});

tape( 'the function returns the input collection', function test( t ) {
	var arr;
	var out;

	function predicate() {
		t.pass( 'invoked predicate function' );
		return true;
	}

	function foo() {
		t.pass( 'invoked provided function' );
	}

	arr = [ 1, 2, 3 ];

	out = doWhileEach( arr, foo, predicate );

	t.strictEqual( out, arr, 'returns input collection' );
	t.end();
});

tape( 'while a test condition is true, the function invokes a provided function for each element in a collection (array)', function test( t ) {
	var arr;
	var out;

	arr = [ 1.0, 2.0, NaN, 3.0 ];
	out = [ 0.0, 0.0, 0.0, 0.0 ];

	function predicate( value ) {
		return ( value === value );
	}

	function copy( value, index ) {
		out[ index ] = value;
	}

	doWhileEach( arr, copy, predicate );

	t.strictEqual( out[ 0 ], 1.0, 'expected result' );
	t.strictEqual( out[ 1 ], 2.0, 'expected result' );
	t.strictEqual( isnan( out[ 2 ] ), true, 'expected result' );
	t.strictEqual( out[ 3 ], 0.0, 'expected result' );

	t.end();
});

tape( 'while a test condition is true, the function invokes a provided function for each element in a collection (array-like object)', function test( t ) {
	var arr;
	var out;

	function predicate( value ) {
		return ( value === value );
	}

	function copy( value, index ) {
		out[ index ] = value;
	}

	arr = {
		'length': 4,
		'0': 1.0,
		'1': 2.0,
		'2': NaN,
		'3': 3.0
	};
	out = {
		'length': 4,
		'0': 0.0,
		'1': 0.0,
		'2': 0.0,
		'3': 0.0
	};

	doWhileEach( arr, copy, predicate );

	t.strictEqual( out[ 0 ], 1.0, 'expected result' );
	t.strictEqual( out[ 1 ], 2.0, 'expected result' );
	t.strictEqual( isnan( out[ 2 ] ), true, 'expected result' );
	t.strictEqual( out[ 3 ], 0.0, 'expected result' );

	t.end();
});

tape( 'while a test condition is true, the function invokes a provided function for each element in a collection (typed array)', function test( t ) {
	var arr;
	var out;

	function predicate( value ) {
		return ( value === value );
	}

	function copy( value, index ) {
		out[ index ] = value;
	}

	arr = new Float64Array( [ 1.0, 2.0, NaN, 3.0 ] );
	out = new Float32Array( [ 0.0, 0.0, 0.0, 0.0 ] );

	doWhileEach( arr, copy, predicate );

	t.strictEqual( out[ 0 ], 1.0, 'expected result' );
	t.strictEqual( out[ 1 ], 2.0, 'expected result' );
	t.strictEqual( isnan( out[ 2 ] ), true, 'expected result' );
	t.strictEqual( out[ 3 ], 0.0, 'expected result' );

	t.end();
});

tape( 'the function supports providing an execution context', function test( t ) {
	var ctx;
	var arr;

	function predicate( value ) {
		return ( value === value );
	}

	function sum( value ) {
		/* eslint-disable no-invalid-this */
		this.sum += value;
		this.count += 1;
	}

	ctx = {
		'sum': 0,
		'count': 0
	};
	arr = [ 1.0, 2.0, 3.0 ];

	doWhileEach( arr, sum, predicate, ctx );

	t.strictEqual( ctx.sum/ctx.count, 2.0, 'expected result' );

	t.end();
});

tape( 'the function provides basic support for dynamic arrays', function test( t ) {
	var arr;
	var out;

	function predicate( value ) {
		return ( value === value );
	}

	function copy( value, index, collection ) {
		out.push( value );
		if ( index === collection.length-1 && collection.length < 10 ) {
			collection.push( index+2 );
		}
	}

	arr = [ 1, 2, 3 ];
	out = [];

	doWhileEach( arr, copy, predicate );

	t.deepEqual( arr, [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ], 'expected result' );
	t.deepEqual( out, [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ], 'expected result' );
	t.end();
});

tape( 'the function provides basic support for dynamic arrays (empty initial collection)', function test( t ) {
	var arr;
	var out;

	function predicate() {
		return true;
	}

	function fcn( value, index, collection ) {
		if ( index === void 0 ) {
			collection.push( 1 );
		} else {
			out.push( value );
			if ( index === collection.length-1 && collection.length < 10 ) {
				collection.push( index+2 );
			}
		}
	}
	arr = [];
	out = [];
	doWhileEach( arr, fcn, predicate );

	t.deepEqual( arr, [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ], 'expected result' );
	t.deepEqual( out, [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ], 'expected result' );
	t.end();
});

tape( 'the function does not skip empty elements', function test( t ) {
	var expected;
	var arr;

	function predicate( value, index ) {
		t.strictEqual( value, expected[ index ], 'provides expected value' );
		return true;
	}

	function verify( value, index ) {
		t.strictEqual( value, expected[ index ], 'provides expected value' );
	}

	arr = [ 1, , , 4 ]; // eslint-disable-line no-sparse-arrays
	expected = [ 1, void 0, void 0, 4 ];

	doWhileEach( arr, verify, predicate );
	t.end();
});

tape( 'the function invokes the predicate function and the function to apply with three arguments: value, index, collection', function test( t ) {
	var indices;
	var values;
	var arr;

	function predicate( value, index, collection ) {
		t.strictEqual( value, values[ index ], 'provides expected value' );
		t.strictEqual( index, indices[ index ], 'provides expected index' );
		t.strictEqual( collection, arr, 'provides input collection' );
		return true;
	}

	function verify( value, index, collection ) {
		t.strictEqual( value, values[ index ], 'provides expected value' );
		t.strictEqual( index, indices[ index ], 'provides expected index' );
		t.strictEqual( collection, arr, 'provides input collection' );
	}

	arr = [ 1, 2, 3, 4 ];
	values = [ 1, 2, 3, 4 ];
	indices = [ 0, 1, 2, 3 ];

	doWhileEach( arr, verify, predicate );
	t.end();
});
