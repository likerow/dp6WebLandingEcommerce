import lib from '@/shared/lib';

const twoDecimals = lib.decimals(2);

const getters = {
	getProductToBuy(state) {
		const products = lib.map(
			lib.setNewProperty(
				'total',
				({ salePrice, priceDiscount, quantity }) =>
					twoDecimals(quantity * (salePrice || priceDiscount)),
			),
			state.order.products,
		);
		return products;
	},
	getOrderId(state) {
		return state.order.id;
	},
	getTotalToBuy(state) {
		return state.order.products.reduce(
			(acc, { priceDiscount, salePrice, quantity }) =>
				twoDecimals((priceDiscount || salePrice) * quantity) + acc, 0);
	},
	getTotalQuantityProducts(state) {
		return state.order.products.length;
	},
	getFlagPickUp(state) {
		return state.order.flagPickUp;
	},
	getDeliveryAddress(state) {
		return state.order.delivery;
	},
	invalidOrder(state) {
		const { responsible, delivery, flagBill, bill } = state.order;
		const invalidResponsible = lib.isEmpty(responsible);
		const invalidDelivery = lib.isEmpty(delivery) || !delivery.id;
		const invalidBill = flagBill ? lib.isEmpty(bill) : false;
		return lib.atLeastOneTrue(invalidResponsible, invalidDelivery, invalidBill);
	},
	getFlagBill(state) {
		return state.order.flagBill;
	},
	getOrders(state) {
		return state.order.products;
	},
	getStatus(state) {
		return state.order.status;
	},
	getOrderDetails(state) {
		return state.order.products;
	},
	getResponsible(state) {
		return state.order.responsible;
	},
	getShippingCost(state) {
		return state.order.shippingCost;
	},
	getCustomerAddress(state) {
		return state.order.customerAddress;
	},
	getCustomerAddressId(state) {
		return state.order.customerAddressId;
	},
	getBillingData(state) {
		return state.order.bill;
	},
	getOrderStatus(state) {
		return state.order.orderStatus;
	},
	getWayPayment(state) {
		return state.order.paymentMethod;
	},
	getOrderInfo(state) {
		return state.order.order;
	},
	getFlagStatusOrder(state) {
		return state.order.flagStatusOrder;
	},
};

export default getters;
