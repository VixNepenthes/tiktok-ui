// Layout
import { HeaderOnly } from '~/components/Layout';

// Public routes
import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';
const publicRoutes = [
    { path: '/', component: Home },
    { path: '/following', component: Following },
    { path: '/profile', component: Profile },
    { path: '/upload', component: Upload, layout: HeaderOnly },
    { path: '/search', component: Search, layout: null },
];

// Trang không được truy cập khi chưa thoả điều kiện (VD: chưa login thì chưa setting tài khoản)
const privateRoutes = [];

export { publicRoutes, privateRoutes };
