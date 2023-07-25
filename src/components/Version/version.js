import React, { useEffect, useState } from 'react';
import Typography from '@mui/material/Typography';

const loadVersion = async () => {
    try {
        return await import('../../version.json');
    } catch (e) {
        return { version: 'unknown' };
    }
};

function Version() {
    const [version, setVersion] = useState('');

    useEffect(() => {
        loadVersion().then((v) => {
            setVersion(v.version);
        });
    }, []);

    return (
        <Typography variant="caption" align="right" color="inherit" style={{ flexGrow: 1 }}>
            Version: {version}
        </Typography>
    );
}
export default Version;
