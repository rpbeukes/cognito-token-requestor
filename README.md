# AWS Cognito Token Requestor

This project is to get a AWS Cognito web token from the User Pool.

## Examples:

### Node arguments example
```javascript
node index.js [UserPoolId] [ClientId] [Username] [Password]

node index.js ap-southeast-2_XXXXXXX 2bb2344vcfldtha3qh0mj75 test@test.com passwordpassword
```

### .env example
- Rename [.env.example](./.env.example) to .env
- Replace content with the values of your cognito user pool.

Sample content:
```javascript
UserPoolId=ap-southeast-2_XXXXXXX
ClientId=2bb2344vcfldtha3qh0mj75
Username=test@test.com
Password=passwordpassword
```

Run:
```javascript
npm run get-token-env
```

## Getting started
- Download [nodejs](https://nodejs.org/en/download/).
- Clone the source code

Get dependencies:
```javascript 
npm install
```
Execute:
```javascript 
node index.js
```