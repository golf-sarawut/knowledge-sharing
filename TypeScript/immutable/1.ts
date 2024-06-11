type UserRole = 'admin' | 'user' | 'guest';

const ROLES = {
    admin: 'admin',
    user: 'user',
    guest: 'guest'
};

const PERMISSIONS = {
    admin: ['read', 'write', 'delete'],
    user: ['read', 'write'],
    guest: ['read']
};

function getPermissions(role: UserRole): string[] {
    return PERMISSIONS[role];
};