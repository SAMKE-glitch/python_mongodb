const { MongoClient } = require('mongodb');
const { env } = require('process');

class DBClient {
    constructor() {
        this.host = env.DB_HOST || 'localhost';
        this.port = env.DB_PORT || 27017;
        this.dbName = env.DB_DATABASE || 'igome';
        this.client = null;
        this.db = null;
        this.connect();
    }

    async connect() {
        try {
            this.client = await MongoClient.connect(`mongodb://${this.host}:${this.port}`, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            });
            this.db = this.client.db(this.dbName);
            console.log('Connected to MongoDB');
        } catch (error) {
            console.error('Error connecting to MongoDB:', error.message);
        }
    }

    isAlive() {
        return this.client && this.client.isConnected();
    }
}

const dbClient = new DBClient();

module.exports = dbClient;