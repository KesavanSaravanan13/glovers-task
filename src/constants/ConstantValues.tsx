import events from '../../src/assests/calendar.png';
import dollar from '../../src/assests/coin.png';
import dashboard from '../../src/assests/dashboard.png';
import teams from '../../src/assests/group.png';
import settings from '../../src/assests/settings.png';
import user from '../../src/assests/user.png';

export const SideBarList = [
    {path:'/dashboard',image:dashboard,alt:'Dashboard icon',title:'Dashboard'},
    {path:'/userslist',image:user,alt:'Users List icon',title:'Users List'},
    {path:'/teamslist',image:teams,alt:'Teams List icon',title:'Teams List'},
    {path:'/eventslist',image:events,alt:'Events List icon',title:'Events List'},
    {path:'/seasons',image:teams,alt:'Seasons icon',title:'Seasons'},
    {path:'/subscriptionplans',image:dollar,alt:'Subscription Plans icon',title:'Subscription Plans'},
    {path:'/settings',image:settings,alt:'Settings icon',title:'Settings'},
]
