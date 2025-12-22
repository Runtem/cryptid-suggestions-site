const express = require("express");
const cors = require("cors");
const firebase = require("firebase-admin");
const serviceAccount = require("../serviceAccountKey.json");
const dotenv = require("dotenv").config();

firebase.initializeApp({
    credential: firebase.credential.cert(serviceAccount),
});

const db = firebase.firestore();
const app = express();
app.use(cors());

const COMMENT_SCHEMA = {
    authorID: "number",
    content: "string",
    dateSubmitted: "number",
    id: "number",
};

const SUGGESTION_DATA_SCHEMA = {
    name: "string",
    description: "string",
    authorID: "number",
    upvotes: "number",
    downvotes: "number",
    comments: "array",
    tags: "array",
    status: "string",
    id: "number",
    dateSubmitted: "number",
};

const USER_SCHEMA = {
    discordID: "number",
    username: "string",
    suggestions: "array",
    comments: "array",
    upvotedSuggestions: "array",
    downvotedSuggestions: "array",
    token: "string",
};

function validateSchema(data, schema) {
    for (const key in schema) {
        if (!(key in data)) {
            return `${key} missing`;
        }
        const expectedType = schema[key];
        const actual = data[key];

        switch(expectedType) {
            case 'string':
                if (typeof actual !== 'string') return `${key} must be string`;
                break;
            case 'number':
                if (typeof actual !== 'number') return `${key} must be number`;
                break;
            case 'array':
                if (!Array.isArray(actual)) return `${key} must be array`;
                break;
            default:
                return `unknown schema type for ${key}`;
        }
    }
    return true;
}

app.use(express.json());

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});


app.post('/suggestions', async (req, res) => {
    const suggestion = req.body;

    const valid = validateSchema(suggestion, SUGGESTION_DATA_SCHEMA);

    if (valid !== true) {
        return res.status(400).json({ error: `Invalid data: ${valid}` });
    }

    try {
        await db.collection("posts").add(suggestion);
        console.log("Saved:", suggestion);
        res.status(200).send("Suggestion saved successfully");
        
    } catch (err) {
        console.error(err);
        res.status(500).send("Error saving suggestion");
    }
});