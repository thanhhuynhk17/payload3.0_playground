import type { Access } from 'payload'

export const selfUser: Access = ({ req: { user } }) => {
    if (user) {
        const queryConstraint = {
            id: {
                equals: user.id,
            },
        }
        return queryConstraint;
    }

    return false
}

