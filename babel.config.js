module.exports = function (api) {
    api.cache(true);
    return {
        presets: [
            "@babel/preset-typescript",
            [
                "@babel/preset-env",
                {
                    modules: false,
                    useBuiltIns: "usage",
                    corejs: {
                        version: 3,
                        proposals: true,
                    },
                },
            ],
        ],
        plugins: [
            "@babel/plugin-transform-runtime",
            [
                "babel-plugin-import",
                {
                    libraryName: "antd",
                    libraryDirectory: "es",
                    style: true,
                },
            ],
        ],
        env: {
            development: {
                presets: [
                    [
                        "@babel/preset-react",
                        {
                            development: true,
                            runtime: "automatic",
                        },
                    ],
                ],
            },
            production: {
                presets: [
                    [
                        "@babel/preset-react",
                        {
                            runtime: "automatic",
                        },
                    ],
                ],
            },
        },
    };
};
