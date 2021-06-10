import Login from "../components/login/Login";
import Register from "../components/pages/users/Register";
import UserList from "../components/pages/users/UserList";
import Unauthor from "../components/pages/users/Unauthor";

export const routesAdmin = [
    {
        path: '/page',
        exact: false,
        main: () => <Unauthor />
    },
    {
        path: '/register',
        exact: false,
        main: () => <Register />
    },
    {
        path: '/login',
        exact: false,
        main: () => <Login />
    },
    {
        path: '/user-list',
        exact: false,
        main: () => <UserList />
    }
];