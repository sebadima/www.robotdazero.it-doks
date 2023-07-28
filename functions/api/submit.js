/**
 * POST /api/submit
 */
export async function onRequestPost({ request }) {
	try {
		let input = await request.formData();

		// Convert FormData to JSON
		// NOTE: Allows mutliple values per key
		let tmp, output = {};
		for (let [key, value] of input) {
			tmp = output[key];
			if (tmp === undefined) {
				output[key] = value;
			} else {
				output[key] = [].concat(tmp, value);
			}
		}

		let pretty = JSON.stringify(output, null, 2);
	}
}
