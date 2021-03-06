/**
 * It would have been great to put this in the user's model file
 * but somehow ember.js is not able to find the module when doing this...
 */

const UserRank = [
    'user',
    'viewer',
    'manager',
    'supervisor',
    'administrator'
];

const zoneType = [
  'Logical',
  'Physical'
];

/**
 * This enumeration represents the various EventType
 *
 * It must match the content of the C++ enumeration Leosac::Audit::EventType;
 */
const AuditEventType = {
    'WSAPI_CALL': 1 << 0,
    'USER_CREATED': 1 << 1,
    'USER_DELETED': 1 << 2,
    'USER_EDITED': 1 << 3,
    'USER_PASSWORD_CHANGED': 1 << 4,
    'USER_PASSWORD_CHANGE_FAILURE': 1 << 5,
    'GROUP_CREATED': 1 << 6,
    'GROUP_UPDATED': 1 << 7,
    'GROUP_DELETED': 1 << 8,
    'GROUP_MEMBERSHIP_JOINED': 1 << 9,
    'GROUP_MEMBERSHIP_LEFT': 1 << 10,
    'CREDENTIAL_DELETED': 1 << 11,
    'CREDENTIAL_CREATED': 1 << 12,
    'CREDENTIAL_UPDATED': 1 << 13,
    'SCHEDULE_CREATED': 1 << 14,
    'SCHEDULE_DELETED': 1 << 15,
    'SCHEDULE_UPDATED': 1 << 16,
    'DOOR_CREATED': 1 << 17,
    'DOOR_UPDATED': 1 << 18,
    'DOOR_DELETED': 1 << 19,
    'MAPPING_MAY_HAVE_CHANGED': 1 << 20,
    'ACCESS_POINT_CREATED': 1 << 21,
    'ACCESS_POINT_UPDATED': 1 << 22,
    'ACCESS_POINT_DELETED': 1 << 23,
    'UPDATE_CREATED': 1 << 24,
    'UPDATE_ACKED': 1 << 25,
    'UPDATE_CANCELLED': 1 << 26,
    'ZONE_CREATED': 1 << 27,
    'ZONE_UPDATED': 1 << 28,
    'ZONE_DELETED': 1 << 29
};

const UpdateStatus = {
    'PENDING': 0,
    'ACKNOWLEDGED': 1,
    'CANCELLED': 2,
    'TRANSIENT': 3
};


const UpdateSeverity = {
    'LOW': 0,
    'NORMAL': 1,
    'HIGH': 2,
    'CRITICAL': 3
};

/**
 * This will be used by leosac to communicate data between the front and the backend.
 * This is related to the device class.
 * @type {{unknown: number, gpio: number, reader: number, led: number, buzzer: number}}
 */
const DeviceClass = {
    'unknown': 0,
    'gpio': 1,
    'reader': 2,
    'led': 3,
    'buzzer': 4
};

export {UserRank, AuditEventType, UpdateStatus, UpdateSeverity, zoneType, DeviceClass};
