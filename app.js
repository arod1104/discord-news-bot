import express from 'express';
import {
    InteractionType,
    InteractionResponseType,
    verifyKeyMiddleware,
    InteractionResponseFlags
} from discord-interactions;

// Create an express app
const app = express();
// Get port, or default to 3000
const PORT = process.env.PORT || 3000;

/**
 * Interactions endpoint URL where Discord will send HTTP requests
 * Parse request body and verifies incoming requests using discord-interactions package
 */
app.post('/interactions', verifyKeyMiddleware(process.env.Public_KEY), async function(req, res) {
    // INteraction id, type and data
    const {id, type, data} = req.body;

    
})