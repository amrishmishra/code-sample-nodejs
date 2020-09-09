/**
 * Constant file for the Application, so that all attribute can be placed at central place.
 * @type {Readonly<{STUDENT_FIND_EVENT: string, TABLE_SCHOOL_STUDENT: string, QUERY_BY_STUDENT_LAST_NAME_EVENT: string, QUERY_BY_SCHOOL_ID_EVENT: string, DYNAMO_INDEX_LAST_NAME: string, PAGINATION_LIMIT: number, STUDENT_INSERT_EVENT: string, QUERY_ALL_ITEM_EVENT: string}>}
 */
module.exports = Object.freeze({
    QUERY_BY_STUDENT_LAST_NAME_EVENT:  'student-last-name-event',
    QUERY_ALL_ITEM_EVENT:              'all-item-event',
    QUERY_BY_SCHOOL_ID_EVENT:          'one-item-event',
    QUERY_BY_STUDENT_LAST_NAME_EVENT:  'student-last-name-event',

    STUDENT_INSERT_EVENT:               'student-insert-event',
    STUDENT_FIND_EVENT:                 'student-find-event',

    DYNAMO_INDEX_LAST_NAME:             'studentLastNameGsi',

    TABLE_SCHOOL_STUDENT:                'SchoolStudents',
    PAGINATION_LIMIT:                    5
});