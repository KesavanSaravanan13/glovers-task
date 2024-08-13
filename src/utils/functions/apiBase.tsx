export const getBaseUrl = (message: string): string => {
    let url='';
    switch (message) {
        case 'Staff':
            url= '/staffs-list';
            break;
        case 'Players':
            url= '/players-list';
            break;
        case 'Fans':
            url= '/fans-list';
            break;
        case 'Teams':
            url= '/teams-list';
            break;
        case 'Coach':
            url= '/coach-list';
            break;
        default:
            url= '';
            break;
    }
    return url;
};
