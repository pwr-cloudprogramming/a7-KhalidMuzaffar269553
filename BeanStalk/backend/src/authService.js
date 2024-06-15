const AWS = require('aws-sdk');
const CognitoIdentityServiceProvider = AWS.CognitoIdentityServiceProvider;

const cognito = new CognitoIdentityServiceProvider({
  region: 'us-east-1'
});

const signUp = async (email, password) => {
  const params = {
    ClientId: '738lvl9h97va41f7p3dpi6eq8p',
    Username: email,
    Password: password,
    UserAttributes: [
      {
        Name: 'email',
        Value: email,
      },
    ],
  };

  try {
    const data = await cognito.signUp(params).promise();
    return data;
  } catch (err) {
    throw new Error(`Error signing up: ${err.message}`);
  }
};

const signIn = async (email, password) => {
  const params = {
    AuthFlow: 'USER_PASSWORD_AUTH',
    ClientId: '738lvl9h97va41f7p3dpi6eq8p',
    AuthParameters: {
      USERNAME: email,
      PASSWORD: password,
    },
  };

  try {
    const data = await cognito.initiateAuth(params).promise();
    return data.AuthenticationResult;
  } catch (err) {
    throw new Error(`Error signing in: ${err.message}`);
  }
};

const confirmSignUp = async (email, code) => {
    const params = {
      ClientId: '738lvl9h97va41f7p3dpi6eq8p',
      Username: email,
      ConfirmationCode: code,
    };
  
    try {
      await cognito.confirmSignUp(params).promise();
    } catch (err) {
      throw new Error(`Error confirming sign up: ${err.message}`);
    }
  };
  
  module.exports = { signUp, signIn, confirmSignUp };
