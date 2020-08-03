var nodemailer = require('nodemailer');
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const oauth2Client = new OAuth2(
     process.env.googleapiclientid, // ClientID
     process.env.googleapiclientsecret, // Client Secret
     "https://developers.google.com/oauthplayground" // Redirect URL
);

oauth2Client.setCredentials({
    refresh_token: process.env.oauthrefreshtoken
});

const accessToken = oauth2Client.getAccessToken();

module.exports = {
    verify : function (email,hash) {
        var transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                type: "OAuth2",
                user: process.env.email,
                clientId: process.env.googleapiclientid,
                clientSecret: process.env.googleapiclientsecret,
                refreshToken: process.env.oauthrefreshtoken,
                accessToken: accessToken
            },
            tls: {
                rejectUnauthorized: false
            }
        });

        var mailOptions = {
            from: process.env.email,
            to: email,
            subject: 'Verification for Inferno CTF',
            html: 'Open this <a href=http://infernoctf.herokuapp.com/verify?key='+email+'%20' + hash + '>link</a> to verify your registration.<br>',
        };

        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email sent: ' + info.response);
            }
            transporter.close();
        });
    }
}
