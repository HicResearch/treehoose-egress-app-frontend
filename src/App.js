// (c) 2023 Amazon Web Services, Inc. or its affiliates. All Rights Reserved.
//
// This AWS Content is provided subject to the terms of the AWS Customer Agreement
// available at http://aws.amazon.com/agreement or other written agreement between
// Customer and either Amazon Web Services, Inc. or Amazon Web Services EMEA SARL or both.

import React, { useEffect, useState } from 'react';
import './style/App.css';
import { Amplify, Auth, Hub } from 'aws-amplify';
import { AmplifyAuthenticator, AmplifySignIn } from '@aws-amplify/ui-react';
import { Button } from '@mui/material';
import EgressRequestList from './components/egress/EgressRequestList';
import awsconfig from './aws-config';
import NavBar from './components/NavBar/navbar';

Amplify.configure(awsconfig);

function App() {
    const [user, setUser] = useState();
    let federated;
    if (awsconfig.federated_login_enabled.toLowerCase() === 'true') {
        federated = { userPoolWebClientId: awsconfig.Auth.userPoolWebClientId };
    }

    function getUser() {
        return Auth.currentAuthenticatedUser().then((userData) => userData);
    }

    useEffect(() => {
        Hub.listen('auth', ({ payload: { event } }) => {
            switch (event) {
                case 'signIn':
                case 'cognitoHostedUI':
                    getUser().then((userData) => setUser(userData));
                    break;
                case 'signOut':
                    setUser(null);
                    break;
                case 'signIn_failure':
                case 'cognitoHostedUI_failure':
                default:
            }
        });

        getUser().then((userData) => setUser(userData));
    }, []);

    return user ? (
        <div className="App">
            <NavBar />
            <EgressRequestList />
        </div>
    ) : (
        <AmplifyAuthenticator>
            <AmplifySignIn slot="sign-in" hideSignUp="true" headerText="Sign In" federated={federated}>
                {awsconfig.federated_login_enabled.toLowerCase() === 'true' && (
                    <div slot="federated-buttons">
                        <Button
                            color="primary"
                            variant="contained"
                            className="sign-in-button"
                            fullWidth
                            onClick={() =>
                                Auth.federatedSignIn({ customProvider: awsconfig.federated_identity_provider_name })
                            }
                        >
                            {awsconfig.federated_button_login_value}
                        </Button>
                    </div>
                )}
            </AmplifySignIn>
        </AmplifyAuthenticator>
    );
}

export default App;
