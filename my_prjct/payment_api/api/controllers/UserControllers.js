// UserControllers.js

const { dbClient } = require('../utils/db');

class UserController {
    static async createUser(req, res) {
        try {
            const { firstname, lastname, idnumber, taxnumber, age, email, phonenumber } = req.body;
            // Validations can be performed here before inserting into the database

            const db = await dbClient();
            const usersCollection = db.collection('users');
            
            const newUser = {
                firstname,
                lastname,
                idnumber,
                taxnumber,
                age,
                email,
                phonenumber
            };

            const result = await usersCollection.insertOne(newUser);
            console.log("New user added with ID: ${result.insertedId}");

            res.status(201).json({ message: 'User created successfully', userId: result.insertedId });
        } catch (error) {
            console.error('Error creating user:', error);
            res.status(500).json({ error: 'Internal server error' });
        } finally {
            await closeDB();
        }
    }
}

module.exports = UserController;