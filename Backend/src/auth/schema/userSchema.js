import {UserTC} from '../models/User'

export const UserQueries = {
    userTest: UserTC.getResolver('test'),
    userFindMany: UserTC.getResolver('all')
}

export const UserMutations = {
    userCreate: UserTC.getResolver('create'),
}