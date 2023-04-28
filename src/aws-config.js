// (c) 2023 Amazon Web Services, Inc. or its affiliates. All Rights Reserved.
//
// This AWS Content is provided subject to the terms of the AWS Customer Agreement
// available at http://aws.amazon.com/agreement or other written agreement between
// Customer and either Amazon Web Services, Inc. or Amazon Web Services EMEA SARL or both.

const awsconfig = {
    aws_appsync_graphqlEndpoint: `${process.env.REACT_APP_APPSYNC_API}`,
    aws_appsync_region: `${process.env.REACT_APP_REGION}`,
    aws_appsync_authenticationType: 'AMAZON_COGNITO_USER_POOLS',
    egress_ig_role: `${process.env.REACT_APP_EGRESS_IG_ROLE}`,
    egress_rit_role: `${process.env.REACT_APP_EGRESS_RIT_ROLE}`,
    max_downloads_allowed: `${process.env.REACT_APP_MAX_DOWNLOADS_ALLOWED}`,
    federated_login_enabled: `${process.env.REACT_APP_FEDERATED_LOGIN_ENABLED}`,
    federated_button_login_value: `${process.env.REACT_APP_FEDERATED_LOGIN_BUTTON_VALUE}`,
    federated_identity_provider_name: `${process.env.REACT_APP_FEDERATED_IDENTITY_PROVIDER_NAME}`,
    Auth: {
        region: `${process.env.REACT_APP_REGION}`,
        userPoolId: `${process.env.REACT_APP_USER_POOL_ID}`,
        userPoolWebClientId: `${process.env.REACT_APP_USER_POOL_CLIENT_ID}`,
    },
};

if (awsconfig.federated_login_enabled.toLowerCase() === 'true') {
    awsconfig.Auth.oauth = {
        domain: `${process.env.REACT_APP_USER_POOL_DOMAIN}`,
        scope: ['email', 'openid', 'profile', 'aws.cognito.signin.user.admin'],
        responseType: 'code',
        redirectSignIn: `${process.env.REACT_APP_REDIRECT_SIGNIN_URL}`,
        redirectSignOut: `${process.env.REACT_APP_REDIRECT_SIGNOUT_URL}`,
    };
}

export default awsconfig;
