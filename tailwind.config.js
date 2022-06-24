module.exports = {
    content: ["./src/**/*.{html,js}", "./**/*.html"],
    theme: {
        extend: {
            fontFamily: {
                body: ["Montserrat"],
                heading: ["Fraunces"],
            },
            colors: {
                white: "white",
                black: "black",
                "fm-aurometal": "#6C7289",
                "fm-cream": "#F2EAE2",
                "fm-deep-aquamarine": {
                    500: "#3D8168",
                    900: "#1A4032",
                },
                "fm-gunmetal": "#1C232B",
            },
        },
    },
    plugins: [],
    important: true,
};
