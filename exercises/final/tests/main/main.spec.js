const chai = require( "chai" );
chai.should();
const electron = require( "electron" );
const app = electron.app;

describe( "main tests", function() {
	it( "should test app.getVersion()", function() {
		let version = app.getVersion();
		version.should.be.a( "string" );
		version.should.not.be.empty;
	} );
} );
