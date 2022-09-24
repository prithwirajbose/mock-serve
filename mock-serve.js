const prompt = require('prompt'),
    fs = require('fs-extra'),
    mime = require('mime'),
    express = require('express'),
    cors = require('cors');
var validateUrl = function(val) {
    return (val && (val.indexOf('http://localhost') === 0 || val.indexOf('http://127.0.0.1') === 0));
};

function onErr(err) {
    console.log(err);
    return 1;
}

var validateRespFile = function(val) {
    return fs.existsSync(val) && fs.statSync(val).isFile();
};

function startServer(params) {
    var urlObj = new URL(params.url);

    var app = express();
    app.use(cors());

    app.get(urlObj.pathname, function(req, res) {
        return processRequest(req, res, params);
    });

    app.post(urlObj.pathname, function(req, res) {
        return processRequest(req, res, params);
    });

    var PORT = urlObj.port || '8080';
    var server = app.listen(parseInt(PORT, 10), function() {
        console.log('NodeJS API accessible at ' + params.url);
    });
}

function processRequest(req, res, params) {
    var conType = mime.getType(params.respFile);
    if (!(conType && conType != null && conType != '')) {
        conType = 'text/html';
    }
    res.setHeader('Content-type', conType);
    return res.status(200).send(fs.readFileSync(params.respFile));
}

if (process.argv && process.argv.length >= 2 && validateUrl(process.argv[process.argv.length - 2]) && validateRespFile(process.argv[process.argv.length - 1])) {
    var url = process.argv[process.argv.length - 2];
    var respFile = process.argv[process.argv.length - 1];
    startServer({ url: url, respFile: respFile });
} else {
    const properties = [{
            name: 'url',
            description: 'Enter URL of API',
            validator: validateUrl,
            warning: 'URL must be a local internet address (starts with http://locahost or http://127.0.0.1)',
            default: 'http://localhost:8080/'
        },
        {
            name: 'respFile',
            description: 'Enter Path to the file containing Response',
            validator: validateRespFile,
            warning: "The file path entered is not valid or doesn't exist"
        }
    ];

    prompt.start();

    prompt.get(properties, function(err, result) {
        if (err) {
            return onErr(err);
        } else {
            startServer(result);
        }
    });
}