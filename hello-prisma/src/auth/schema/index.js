import {UserTC} from '../models/User'
import { UserQueries, UserMutations } from './userSchema'

export const AuthQueries = {
    authTest: UserTC.getResolver('test'),
    ...UserQueries
}

export const AuthMutations = {
    ...UserMutations
}