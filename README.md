# Wrapper for ip-api.com API

[![Build Status](https://travis-ci.org/jordyv/ip-api-lookup.svg?branch=master)](https://travis-ci.org/jordyv/ip-api-lookup)

## Usage

```
var IpLookup = require('ip-api-lookup');

IpLookup.lookup('8.8.8.8').then(function (response) {
    console.log(response);
});
```

Will output:

```
{
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
}
```

See [ip-api.com's documentation](http://ip-api.com/docs/api:json) for more info about the API response. 


## Disclaimer

I'm not the author of ip-api.com and I'm not related to the authors in any way. I just like to use the API :-). 
