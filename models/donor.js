var dynamoose = require('dynamoose');
dynamoose.AWS.config.loadFromPath('config.json');

var Schema = dynamoose.Schema;

var donorSchema = new Schema({
    id: {
        type: String,
        required: true,
        hashKey: true
    },
    email: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    synapse_user_id: {
        type: String
    },
    bank_name: {
        type: [String]
    },
    node_id: {
        type: String
    },
    access_token: {
        type: String
    },
    next_payment: {
        type: String
    },
    recipients: {
        type: Object
    }
}, {
    throughput: { read: 15, write: 5 }
});

module.exports = dynamoose.model('Donor', donorSchema);