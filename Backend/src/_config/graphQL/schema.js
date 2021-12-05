import { SchemaComposer } from 'graphql-compose';

const schemaComposer = new SchemaComposer();

import { AuthQueries, AuthMutations } from 'auth/schema';

// *** Application Schema *** //
schemaComposer.Query.addFields({
    ...AuthQueries,
});

schemaComposer.Mutation.addFields({
    ...AuthMutations,
});

// *** Other Composers *** //
//

export default schemaComposer.buildSchema();