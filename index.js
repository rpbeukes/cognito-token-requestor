const AWS = require('aws-sdk');
global.fetch = require('node-fetch');
const AmazonCognitoIdentity = require('amazon-cognito-identity-js');

const throwIfNull = (value, throwMessage) => {
    var moreInfo = 'Example: node index.js ap-southeast-2_XXXXXXX 2bb2344vcfldtha3qh0mj75 test@test.com passwordpassword';
    if (!value) throw new Error(`${throwMessage} (${moreInfo})` );
}

const userPoolId = process.env.UserPoolId || process.argv && process.argv[2];
const clientId = process.env.ClientId || process.argv && process.argv[3];
const username = process.env.Username || process.argv && process.argv[4];
const password = process.env.Password || process.argv && process.argv[5];

throwIfNull(userPoolId, "1st argument 'userPoolId' was null.");
throwIfNull(clientId, "2nd argument 'clientId' was null.");
throwIfNull(username, "3rd argument 'username' was null.");
throwIfNull(password, "4th argument 'password' was null.");

var authenticationData = {
    Username: username,
    Password: password,
};
var authenticationDetails = new AmazonCognitoIdentity.AuthenticationDetails(authenticationData);

var poolData = {
    UserPoolId: userPoolId, 
    ClientId: clientId
};
var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

var userData = {
    Username: authenticationData.Username,
    Pool: userPool
};

var cognitoUser = new AmazonCognitoIdentity.CognitoUser(userData);

cognitoUser.authenticateUser(authenticationDetails, {
    onSuccess: function(result) {
        console.log('Authentication Successful')
        var accessToken = result.getAccessToken().getJwtToken();
        var idToken = result.idToken.jwtToken;
        console.log(idToken);
    },
    onFailure: function (err) {
        console.log('Authentication Failed!')
        console.log(err);
    },
});