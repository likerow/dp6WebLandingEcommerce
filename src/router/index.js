import Router from 'vue-router';
import login from './login';
import Components from './components';
import Profile from './profile';
import register from './register';
import Order from './buy';
import ProductDetail from './detail-product';

export default function (Vue) {
	Vue.use(Router);
	const config = new Router({
		mode: 'history',
		routes: [
			{
				path: '/',
				name: 'page-home',
				component: () => import('@/pages/page-home'),
				children: [
					Order,
				],
			},
			Components,
			login,
			Profile,
			register,
			ProductDetail,
		],
	});
	return config;
}
