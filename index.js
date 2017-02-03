(function () {
    'use strict';
    var http = require('http');

    module.exports = {
        endpoints: {
            json: 'http://ip-api.com/json'
        },
        lookup: function (ip) {
            return new Promise(
                function (resolve, reject) {
                    var url = ip !== undefined && ip !== null && ip.length > 0 ?
                    this.endpoints.json + '/' + ip :
                        this.endpoints.json;
                    http.get(url, function (result) {
                        var response = '';
                        result.on('data', function (line) {
                            response += line;
                        });
                        result.on('end', function () {
                            resolve(JSON.parse(response));
                        });
                    }).on('error', function (error) {
                        reject(error);
                    });
                }.bind(this)
            );
        }
    };
}());
