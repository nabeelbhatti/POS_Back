import { SchemaComposer } from 'graphql-compose';

const schemaComposer = new SchemaComposer();

import { AuthQueries, AuthMutations } from 'auth/schema';
import {InventoryQueries, InventoryMutations} from 'inventory/schema'

// *** Application Schema *** //
schemaComposer.Query.addFields({
    ...AuthQueries,
    ...InventoryQueries,
});

schemaComposer.Mutation.addFields({
    ...AuthMutations,
    ...InventoryMutations
});

// *** Other Composers *** //
//

export default schemaComposer.buildSchema();