// (c) 2023 Amazon Web Services, Inc. or its affiliates. All Rights Reserved.
//
// This AWS Content is provided subject to the terms of the AWS Customer Agreement
// available at http://aws.amazon.com/agreement or other written agreement between
// Customer and either Amazon Web Services, Inc. or Amazon Web Services EMEA SARL or both.

import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Auth } from 'aws-amplify';
import { Button } from '@mui/material';
import './navbar.css';
import awsconfig from '../../aws-config';

function NavBar() {
    const [user, setUser] = useState();
    const [userGroup, setUserGroup] = useState('');
    function getUser() {
        return Auth.currentAuthenticatedUser().then((userData) => userData);
    }

    useEffect(() => {
        getUser().then((userData) => {
            setUser(userData);
            let group;
            const cognitoGroups = userData.signInUserSession.idToken.payload['cognito:groups'];
            if (cognitoGroups.includes(awsconfig.egress_ig_role)) {
                group = awsconfig.egress_ig_role;
            } else if (cognitoGroups.includes(awsconfig.egress_rit_role)) {
                group = awsconfig.egress_rit_role;
            } else {
                group = '';
            }
            setUserGroup(group);
        });
    }, []);

    return (
        <div style={{ flexGrow: 1 }}>
            <AppBar position="static" color="primary">
                <Toolbar>
                    <Grid container>
                        <Grid item xs={7}>
                            <Typography variant="h5" align="right" color="inherit" style={{ flexGrow: 1 }}>
                                TRE Secure Data Egress
                            </Typography>
                        </Grid>
                        <Grid item xs={2.5} />
                        <Grid item xs={1.5}>
                            {(user?.attributes?.name || user?.attributes?.email) && (
                                <Typography variant="h7" color="inherit" style={{ flexGrow: 1 }}>
                                    {user?.attributes?.name ? user.attributes.name : user.attributes.email} logged in as{' '}
                                    {userGroup}
                                </Typography>
                            )}
                        </Grid>
                        <Grid item xs={1}>
                            <Button
                                slot="amplify-sign-out"
                                color="warning"
                                variant="contained"
                                sx={{ m: 2 }}
                                onClick={() => Auth.signOut()}
                            >
                                Sign Out
                            </Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
        </div>
    );
}
export default NavBar;
