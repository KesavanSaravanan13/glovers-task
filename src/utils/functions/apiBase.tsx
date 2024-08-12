// utils/functions/apiBase.ts
export const getBaseUrl = (message: string): string => {
    switch (message) {
        case 'Staff':
            return 'https://dev-api.gloversscorebooks.com/v1/user/admin/staffs-list';
        case 'Players':
            return 'https://dev-api.gloversscorebooks.com/v1/user/admin/players-list';
        case 'Fans':
            return 'https://dev-api.gloversscorebooks.com/v1/user/admin/fans-list';
        default:
            return 'https://dev-api.gloversscorebooks.com/v1/user/admin/coach-list';
    }
};
