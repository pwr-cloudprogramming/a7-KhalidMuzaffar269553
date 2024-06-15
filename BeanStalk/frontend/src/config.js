import { Amplify } from 'aws-amplify';

Amplify.configure({
    Auth: {
        region: 'us-east-1',
        userPoolId: 'us-east-1_AhWAXIOk7',
        userPoolWebClientId: '738lvl9h97va41f7p3dpi6eq8p'
    }
});
