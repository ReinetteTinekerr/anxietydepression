const nodemailer = require('nodemailer');
const { google } = require('googleapis');
const readline = require('readline');

// Set up OAuth2 client
const { client_secret, client_id, redirect_uris } = require('./credentials.json').installed;
const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);

const SCOPES = ['https://mail.google.com/'];

// Generate the URL for user consent
const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
});

console.log('Authorize this app by visiting this URL:', authUrl);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question('Enter the authorization code from the URL:', (code: any) => {
    rl.close();

    // Exchange the authorization code for refresh and access tokens
    oAuth2Client.getToken(code, (err: any, token: any) => {
        if (err) {
            console.error('Error retrieving access token', err);
            return;
        }

        const refreshToken = token.refresh_token;
        console.log('Refresh Token:', refreshToken);

        // Set up Nodemailer transport using the refresh token
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'YOUR_EMAIL',
                clientId: client_id,
                clientSecret: client_secret,
                refreshToken: refreshToken,
            },
        });

        // Send an example email
        transporter.sendMail({
            from: 'YOUR_EMAIL',
            to: 'RECIPIENT_EMAIL',
            subject: 'Test Email',
            text: 'This is a test email.',
        }, (error: any, info: any) => {
            if (error) {
                console.error('Error sending email:', error);
            } else {
                console.log('Email sent:', info.response);
            }
        });
    });
});
