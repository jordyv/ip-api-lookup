describe("Lookup an IP", function () {
    var IpApi = require('../index');

    it("and so is a spec", function (done) {
        IpApi.lookup('8.8.8.8').then(function (response) {
            expect(response).toEqual({
                as: 'AS15169 Google Inc.',
                city: 'Mountain View',
                country: 'United States',
                countryCode: 'US',
                isp: 'Google',
                lat: 37.386,
                lon: -122.0838,
                org: 'Google',
                query: '8.8.8.8',
                region: 'CA',
                regionName: 'California',
                status: 'success',
                timezone: 'America/Los_Angeles',
                zip: '94035'
            });
            done();
        });
    });
});
