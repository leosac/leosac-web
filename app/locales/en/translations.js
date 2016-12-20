export default {
    'firstname': 'Firstname',
    'lastname': 'Lastname',
    'email': 'Email',
    'username': "Username",
    'username_': "Username:",
    'name': 'Name',
    'description': 'Description',
    'edit': 'Edit',
    'delete': 'Delete',
    'remove': 'Remove',
    'rank': 'Rank',
    'rank_group': 'Rank in group',
    'password': 'Password',
    'leave': 'Leave',
    'kick': 'Kick',
    'enabled': 'Enabled',
    'security': 'Security',
    'validity': 'Validity',
    'members': 'Members',
    'start_date': 'Start date',
    'end_date': 'End date',
    'access': 'Access',
    'information': 'Information',
    'alias': 'Alias',
    'alias_': 'Alias:',
    'alias_placeholder': 'A friendly name to remember me by',
    'type': 'Type',
    'author': 'Author',
    'timestamp': 'Timestamp',
    'mask': 'Mask',
    'finalized': 'Finalized',
    'details': 'Details',
    'refresh': 'Refresh',
    'current_page': 'Current Page',
    'page_size': 'Page Size',
    'total_page': 'Total Page',
    'count': 'Count',
    'pending': 'Pending',
    'acknowledged': 'Acknowledged',
    'cancelled': 'Cancelled',
    'cancel': 'Cancel',
    'acknowledge': 'Acknowledge',
    'wait': 'Please wait, fetching and preparing data.',
    'owner_': 'Owner:',
    'owner': 'Owner',
    'groups': 'Groups',
    'schedules': 'Schedules',
    'submit': 'Submit',
    'save': 'Save',
    'mapping': 'Mapping',
    'timeframe': 'Time Frame',
    'timeframes': 'Time Frames',
    'timeframes_': 'Time Frames:',
    'yes': 'Yes',
    'no': 'No',
    'not_available': 'Not Available',
    'access_point': 'Access Point',
    'access_point_placeholder': 'MyAccessPoint',
    'access_points': 'Access Points',
    'clear_selection': 'Clear selection',
    'module': 'Module',
    'configuration': 'Configuration',
    'notes': 'Notes',
    'notes_placeholder': 'A few optional notes...',
    'controller_module': 'Controller Module',
    'confirm': 'Confirm',
    'confirmation': 'Confirmation',
    'to': 'to',
    'on': 'on',
    'minutes_ago': '{{minutes}} minutes ago',
    'date': 'Date',
    'pincode': 'Pin Code',
    'add': 'Add',
    'remove_selected': 'Remove selected',
    'search': 'Search',
    'doors': 'Doors',
    'hardware': 'Hardware',
    'hardware_update': 'Hardware Update',
    'modules': 'Modules',
    'other': 'Other',
    'audit_log': 'Audit Log',
    'value': 'Value',
    'parameter': 'Parameter',
    'parameters': 'Parameters',
    'instance_name': 'Instance Name',
    'instance_name_descr': 'The (unique) name of the {{appname}} instance.',
    'config_version': 'Configuration Version',
    'config_version_descr': 'Is used when performing synchronization to determine whether or not synchronization is needed.',
    'uptime': 'Uptime',
    'uptime_descr': 'How long has {{appname}} been running. (HH:MM:SS)',
    'modules_descr': 'Which modules are running.',
    'settings': 'Settings',
    'logout': 'Logout',
    'switch_fr': 'Passer en francais',
    'switch_en': 'Switch to english',
    'display_id': 'Display Identifier',
    'action': 'Action',
    'here': 'here',
    'test': 'test',
    'url': 'Url',
    'pending_updates': 'Pending updates',
    'update_history': 'Update history',

    // To avoid duplication, we may need to put single word into a namespace
    'w': {
        'door': 'Door',
        'overview': 'Overview',
        'credentials': 'Credentials',
        'update': 'Update',
        'severity': 'Severity',
        'state': 'State',
        'user_id': 'User Id'
    },

    'cancel_and_refresh': 'Cancel & Refresh',
    'group_information': 'Group information',
    'leave_group_confirmation': 'Are you sure you wish to leave this group ?',
    'kick_group_confirmation': 'Are you sure you wish to kick this user from the group ?',
    'delete_group_confirmation': 'Are you sure you wish to delete this group ?',

    'table': {
        // Some translation for table header mostly.
        'join_date': "Join date",
        'group_name': 'Group Name',
        'group_id': 'Group #Id',
        'total_member': 'Total members',
    },
    'form': {
        // General form stuff with label and placeholder.
        'username': {
            'label': 'Username',
            'ph': 'John'
        },
        'password': {
            'label': 'Password',
            'ph': 'Your password'
        }
    },
    'login-form': {
        'welcome': 'Please sign in',
        'submit': 'Sign in',
        'username_password_required': "Username and password are required."
    },
    'password-change': {
        'current_pw': 'Current password',
        'new_pw': 'New password',
        'submit': 'Change password'
    },
    'loading': {
        // loading.hbs
        'title': 'Please wait',
        'message': "The page is being loaded in the background. " +
        "It shouldn't take too long. <br>" +
        "If the page doesn't load in a few seconds, try refreshing it."
    },
    'index': {
        'title': 'Dashboard',
        'manage_access': 'Manage Access',
        'apply_update': 'Apply Update',
        'event': 'Events',
        'welcome': "Welcome <strong>{{username}}</strong>.<br />" +
        "Manage your EvoXS cylinders and user permissions.<br />" +
        "Register, setup, deploy. All from a web-based interface.<br />"
    },
    'profile': {
        'title': 'User Profile',
        'profile_updated': 'Profile has been updated',
        'fail_update': 'Error while updating profile'
    },
    'users': {
        'title': 'Users',
        'list': {
            'title': 'User list'
        },
        'create': {
            'title': 'Create New User',
            'account_info': 'Account Information',
            'user_create': 'User successfuly created.',
            'fail_create': 'Failed to create new user.',
        },
        'add_user': 'Add user',
        'add_group': 'Add group',
        'add_credential': 'Add credential',
        'create_new_user': 'Create new user',
        'add_to_group': 'Add to group',
        'remove_from_group': 'Are you sure you wish to remove {{username}} from the group?',
        'delete_group_confirm': 'Are you sure you wish to delete this group?',
        'members': 'Total members',
        'type_group': "Start typing a group's name",
        'group_info': 'Group Information',
        'group_name': 'Group Name',
        'create_new_group': 'Create New Group',
        'create_group': 'Create Group',
        'list_groups_notice': 'Note that the "Total members" entry may not reflect the real number of members. This is a permission-related issue.',
    },
    'group': {
        'title': 'Group',
        'list': {
            'title': 'Group list'
        },
        'create': {
            'title': 'Create group'
        }
    },
    'door': {
        'delete_confirm': 'Are you sure you wish to delete this door ?',
        'create_door': 'Add Door',
        'placeholder': 'MySuperDoor',
        'create': {
            'title': 'Create door'
        },
        'list': {
            'title': 'Door list',
        },
        'title': 'Door'
    },
    'about': {
        'title': 'About',
    },
    'accesspoint': {
        'belongs_to': 'This access point belongs to door <strong>{{dooralias}}</strong>.',
        'belongs_to_nolink': 'This access point belongs to door',
        'no_belongs': 'This access point is not yet tied to a door.',
        'create': 'Add Access Point',
        'delete_confirm': 'Are you sure you wish to delete this access point?',
    },
    'audit': {
        title: 'Audit Trail',
        'entries_below': 'Audits entries below:',
        'before': 'Before:',
        'after': 'After:',
        'enable_wsapicall': 'Enable WSAPICall',
        'enable_userevent': 'Enable UserEvent',
        'enable_doorevent': 'Enable DoorEvent',
        'enable_groupevent': 'Enable GroupEvent',
        'enable_credentialevent': 'Enable CredentialEvent',
        'enable_scheduleevent': 'Enable ScheduleEvent',
        'enable_usergroupevent': 'Enable UserGroupMembershipEvent',
        'enable_updateevent': 'Enable UpdateEvent',
        'details_intro': 'This show a before and after the audit entry snapshot of the object that was modified. Note that this features is not available for all kind of audit entry.',
    },
    'evoxs': {
        'title': 'EvoXS',
        'access-point': {
            'title': "EvoXS Access Point",
        },
        update:
            {
                title: 'EvoXS Access Point Update'
            },
        'cylinder-events':
            {
                title: 'Cylinder Events'
            },
        'lockid': 'Lock Id',
    },
    'credential': {
        'title': 'Credential infos',
        'noowner': 'The credential has no owner.',
    },
    'credentials': {
        'title': 'Credentials',
        'list': {
            'title': 'Credential list'
        },
        'pin_code_create': {
            'title': 'Create PIN Code'
        },
        'pin_code': {
            'title': 'PIN Code',
            'add': 'Add PinCode',
        },
        'rfid_card': {
            'title': 'RFID Card',
            'hex_id': 'Hexadecimal Card Identifier',
            'number_bits': 'Number of bits',
            'add': 'Add RFIDCard',
        },
        'rfid_card_create': {
            'title': 'Create RFID Card'
        },
        'delete_confirm': 'Are you sure you wish to delete this credential?',
    },
    'error': {
        'title': 'Oh no, something went wrong.',
        'statuscode': 'Status Code:',
        'message': 'Message:',
        'requestid': 'Request Identifier:',
        'entity_not_found': 'Entity not found.',
        'entity_not_found_descr': "The requested entity couldn't be found by the server.",
        'entity_id': 'Entity identifier:',
        'entity_type': 'Entity type:',
        'permission_denied': 'Permission denied.',
        'permission_denied_descr': "The request you made has been denied for permission reason. <br>If you believe this is incorrect, please contact your administrator and provide them with this request identifier: {{reqid}}<br>If you are the administrator, you'll have to resort to the log for possible details.",
        'request_timeout': 'Request timeout.',
        'request_timeout_descr': "The request didn't received a reply in a reasonable time, and has now timed out. This error <i>may</i> indicates problems with your internet connection.",
        'session_aborted': 'Session aborted.',
        'session_aborted_descr': "You should be redirected to the login page in 5 seconds. If that's not the case, please click",
        'unknown_error': 'Unknown error.',
        'unknown_error_descr': "Sorry, we don't know what happened.",
    },
    'schedule': {
        'title': 'Schedule',
        'asfield': 'Schedule:',
        'mapping': 'Mapping: {{alias}}',
        'mapping_list': 'Below are all the mapping linked to the schedule.',
        'add_mapping': 'Add mapping',
        'add_door': 'Add door',
        'type': "Enter a schedule's name (or %)",
        'type_door': "Start typing a door's alias",
        'credential_schedule': 'This shows schedules and their mapping that apply <i>directly</i> to the credential.',
        'group_schedule': 'This shows schedules and their mapping that apply <i>directly</i> to the group.',
        'user_schedule': 'This shows schedules and their mapping that apply <i>directly</i> to you. It wont show schedule that are mapped through your groups or credentials.',
        'no_timeframe': 'This schedule has no timeframes. This means it will have no effect.',
        'remove_from_mapping': 'Remove from mapping',
        'remove_from_mapping_confirm': 'Are you sure you want to leave this mapping?',
        'grant_to_doors': 'Grants access to the following doors:',
        'no_doors': 'This mapping maps to no doors. This means it will have no effect.',
        'placeholder': 'MySchedule',
        'join_mapping': 'Join mapping',
        'monday': 'Monday',
        'tuesday': 'Tuesday',
        'wednesday': 'Wednesday',
        'thursday': 'Thursday',
        'friday': 'Friday',
        'saturday': 'Saturday',
        'sunday': 'Sunday',
        'start_time': 'Start Time',
        'end_time': 'End Time',
        'create_schedule': 'Create Schedule',
        'create_note': 'Please fill the form below in order to create a new schedule.',
        'delete_confirm': 'Are you sure you wish to delete this schedule?',

        'list': {
            'title': 'Schedule list',
        },
        'create': {
            'title': 'Create schedule'
        }
    },
    'overview': {
        'intro': "This page provide an overview of some of the configuration value of the {{appname}} system.",
        'logs_per_page': 'Log per page',
        'last_logs': 'Last logs',
        'total_logs': 'There is a total of {{totalLogs}} log messages.',
    },
    'smtp': {
        'title': 'SMTP module page.',
        'notes': 'Note: SMTP password are saved in cleartext !',
        'recipient': 'Recipient',
        'subject': 'Subject',
        'body': 'Body',
        'send': 'Send test mail',
        'from': 'From',
        'timeout': 'Timeout (Milliseconds)',
        'add_server:': 'Add Server',
        'remove_server': 'Remove Server',
        'verify_host': 'Verify Host',
        'verify_peer': 'Verify Peer',
        'save': 'Save Config',
    },
    'access-overview': {
        'title': 'Access Overview'
    },
    'access-point': {
        'list': {
            'title': 'Access Point list'
        },
        'create': {
            'title': "Create Access Point",
        }
    },
    'autocomplete': {
        'search_group': 'Pick a group (type % to list all)',
        'search_access_point': 'Pick an access point (type % to list all)'
    },
    // Update management
    'update': {
        title: 'Update Management',
        'update_acked': 'Update has been acknowledged.',
        'update_acked_failed': 'Failed to acknowledged update.',
        'update_cancelled': 'Update bas been cancelled.',
        'update_cancel_failed': 'Cancelling the update has failed.',
        'pending_check_update': 'Checking for updates. Please wait.',
        'check_update': 'Check Updates',
        'filter_access_point': "Filter by access point",
        'potential_update': 'Potential updates',
        'everything_up_to_date': 'Everything is up to date',
        'table': {
            'checkpoint': 'Checkpoint',
            'update_needed': 'Need update ?',
            'generated_at': 'Generation date',
            'updated_at': 'Status change date',
            'target_alias': 'Target Access Point Alias'
        },
    }
};
