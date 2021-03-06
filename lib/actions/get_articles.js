/**
 * Auto-generated action file for "Zalando Shop" API.
 *
 * Generated at: 2019-05-07T14:45:05.894Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / zalando-com-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: undefined
 * Endpoint Path: '/articles'
 * Method: 'get'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "articleId",
    "articleModelId",
    "articleUnitId",
    "activationDate",
    "ageGroup",
    "assortmentArea",
    "brand",
    "brandfamily",
    "category",
    "color",
    "den",
    "filling",
    "fullText",
    "gender",
    "heelForm",
    "heelHeight",
    "length",
    "occasion",
    "pattern",
    "price",
    "sale",
    "season",
    "shaftHeight",
    "shaftWidth",
    "shirtCollar",
    "shoeFastener",
    "shoeToecap",
    "shopArea",
    "size",
    "sports",
    "technology",
    "trouserRise",
    "upperMaterial",
    "volume",
    "page",
    "pageSize",
    "sort",
    "Accept-Language",
    "fields"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "articleId": "articleId",
    "articleModelId": "articleModelId",
    "articleUnitId": "articleUnitId",
    "activationDate": "activationDate",
    "ageGroup": "ageGroup",
    "assortmentArea": "assortmentArea",
    "brand": "brand",
    "brandfamily": "brandfamily",
    "category": "category",
    "color": "color",
    "den": "den",
    "filling": "filling",
    "fullText": "fullText",
    "gender": "gender",
    "heelForm": "heelForm",
    "heelHeight": "heelHeight",
    "length": "length",
    "occasion": "occasion",
    "pattern": "pattern",
    "price": "price",
    "sale": "sale",
    "season": "season",
    "shaftHeight": "shaftHeight",
    "shaftWidth": "shaftWidth",
    "shirtCollar": "shirtCollar",
    "shoeFastener": "shoeFastener",
    "shoeToecap": "shoeToecap",
    "shopArea": "shopArea",
    "size": "size",
    "sports": "sports",
    "technology": "technology",
    "trouserRise": "trouserRise",
    "upperMaterial": "upperMaterial",
    "volume": "volume",
    "page": "page",
    "pageSize": "pageSize",
    "sort": "sort",
    "Accept_Language": "Accept-Language",
    "fields": "fields"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = undefined;

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};

    let callParams = {
        spec: spec,
        operationId: undefined,
        pathName: '/articles',
        method: 'get',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}