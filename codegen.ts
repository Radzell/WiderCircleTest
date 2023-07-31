import type { CodegenConfig } from "@graphql-codegen/cli"

const config: CodegenConfig = {
    schema: [
        {
            "lib/server/schema.ts": {
                noRequire: true
            }
        }
    ],
    documents: "./pages/**/*.tsx",
    generates: {
        "./lib/server/gql/": {
            preset: "client",
            plugins: []
        },
        "./lib/server/resolvers-types.ts": {
            plugins: ["typescript", "typescript-resolvers"]
        }
    }
}

export default config
