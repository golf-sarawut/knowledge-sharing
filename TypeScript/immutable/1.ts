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

// We are not supposed to be able to change the value of roles or permissions
ROLES.guest = "admin"
PERMISSIONS.guest = ['read', 'write', 'delete']