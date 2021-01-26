module.exports = {
    client: {
        includes: ['./{pages,lib,components,interfaces}/**/*.{ts,tsx,graphql}'],
        service: {
            name: 'GitHub',
            localSchemaFile: './github.schema.graphql',
        },
    },
};
