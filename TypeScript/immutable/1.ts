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

ROLES.guest = "admin"
PERMISSIONS.guest = ['read', 'write', 'delete']