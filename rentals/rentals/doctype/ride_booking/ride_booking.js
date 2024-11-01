// Copyright (c) 2024, Navin R C and contributors
// For license information, please see license.txt

frappe.ui.form.on("Ride Booking", {
	refresh(frm) {},
	// field name in form on event on that field
	rate(frm) {
		// trigger fn
		frm.trigger("update_total_amount");
	},
	update_total_amount(frm) {
		let total_d = 0;
		for (let item of frm.doc.items) {
			total_d += item.distance;
		}

		const amount = frm.doc.rate * total_d;
		frm.set_value("total_amount", amount);
	},
});

frappe.ui.form.on("Ride Booking Item", {
	refresh(frm) {},
	// field name in form on event on that field
	distance(frm) {
		// trigger fnhttps://phoenixerp.frappe.cloud/app/accounting-dimension
		frm.trigger("update_total_amount");
	},
    // child table event refer frappe docs - https://frappeframework.com/docs/user/en/api/form#child-table-events
	items_remove(frm) {
		frm.trigger("update_total_amount");
	},
});
