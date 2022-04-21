module.exports = {
    apps: [
        {
            name: 'app',
            script: './index.js',
            watch: false,
            force: true,
            env: {
                NODE_ENV: 'production',
                PORT: '3000',
            },
        },
    ],
};