const chai = require("chai");
chai.should();
const electron = require("electron");
const app = electron.app;

describe("main tests", () => {
	it("should test app.getVersion()", () => {
		const version = app.getVersion();
		version.should.be.a("string");
		version.should.not.be.empty;
	});
});
