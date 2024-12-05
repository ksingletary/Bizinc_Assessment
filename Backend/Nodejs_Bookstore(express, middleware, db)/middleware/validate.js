const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const { ValidationError } = require("../expressError");

function validate(schema) {
    return (req, res, next) => {
        // Log basic request information
        console.log(`[${new Date().toISOString()}] Validation middleware`);
        console.log(`Path: ${req.path}`);
        console.log(`Method: ${req.method}`);
        console.log(`Request Body:`, JSON.stringify(req.body, null, 2));

        const ajv = new Ajv({ allErrors: true });
        addFormats(ajv);
        const validateSchema = ajv.compile(schema);
        const valid = validateSchema(req.body);

        if (!valid) {
            // Log validation failures
            const errors = validateSchema.errors.map(e => ({
                field: e.instancePath,
                message: e.message,
                params: e.params
            }));
            
            console.error(`[${new Date().toISOString()}] Validation failed:`);
            console.error(JSON.stringify(errors, null, 2));
            
            return next(new ValidationError(errors.map(e => e.message)));
        } else {
            // Log successful validation
            console.log(`[${new Date().toISOString()}] Validation successful`);
            return next();
        }
    };
}

module.exports = validate;