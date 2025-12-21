import type { APIRoute } from 'astro';

export const prerender = false;

const RESEND_ENDPOINT = 'https://api.resend.com/emails';
const TO_EMAIL = 'justin@justin-napolitano.com';
const FROM_EMAIL = 'Adventure Pitch Bot <pitches@justin-napolitano.com>';

const sanitize = (value: FormDataEntryValue | string | null | undefined) => {
	return typeof value === 'string' ? value.trim() : '';
};

const buildEmailBody = (fields: Record<string, string>) => {
	const lines = [
		'New adventure pitch incoming:',
		`Name: ${fields.name}`,
		`Reply via: ${fields.contact}`,
		`Ideal timing: ${fields.timeline || 'Not specified'}`,
		`Energy: ${fields.vibes || 'Not specified'}`,
		'',
		'Adventure details:',
		fields.adventure,
	];

	if (fields.extras) {
		lines.push('', 'Extras:', fields.extras);
	}

	lines.push('', 'Sent via dating-profile landing page.');
	return lines.join('\n');
};

const sendEmail = async (fields: Record<string, string>) => {
	const apiKey = import.meta.env.RESEND_API_KEY;

	if (!apiKey) {
		throw new Error('Missing RESEND_API_KEY.');
	}

	const response = await fetch(RESEND_ENDPOINT, {
		method: 'POST',
		headers: {
			Authorization: `Bearer ${apiKey}`,
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({
			from: FROM_EMAIL,
			to: [TO_EMAIL],
			subject: `New adventure pitch from ${fields.name}`,
			text: buildEmailBody(fields)
		})
	});

	if (!response.ok) {
		const errorText = await response.text();
		throw new Error(errorText || 'Failed to contact email provider.');
	}
};

const parseRequest = async (request: Request) => {
	const contentType = request.headers.get('content-type') || '';

	if (contentType.includes('application/json')) {
		return (await request.json()) as Record<string, FormDataEntryValue>;
	}

	const formData = await request.formData();
	return Object.fromEntries(formData.entries());
};

const buildFields = (data: Record<string, FormDataEntryValue>) => {
	return {
		name: sanitize(data.name),
		contact: sanitize(data.contact),
		adventure: sanitize(data.adventure),
		timeline: sanitize(data.timeline),
		vibes: sanitize(data.vibes),
		extras: sanitize(data.extras)
	};
};

const validateFields = (fields: Record<string, string>) => {
	if (!fields.name) {
		return 'Name is required.';
	}

	if (!fields.contact) {
		return 'Tell me where to reply.';
	}

	if (!fields.adventure) {
		return 'Drop at least a rough plan for the adventure.';
	}

	return null;
};

const jsonResponse = (body: Record<string, unknown>, init: ResponseInit = {}) =>
	new Response(JSON.stringify(body), {
		...init,
		headers: {
			'Content-Type': 'application/json',
			'Cache-Control': 'no-store',
			...(init.headers || {})
		}
	});

export const POST: APIRoute = async ({ request }) => {
	try {
		const payload = await parseRequest(request);
		const fields = buildFields(payload);
		const validationError = validateFields(fields);

		if (validationError) {
			return jsonResponse({ success: false, error: validationError }, { status: 400 });
		}

		await sendEmail(fields);
		return jsonResponse({ success: true });
	} catch (error) {
		const message = error instanceof Error ? error.message : 'Unable to send the pitch right now.';
		return jsonResponse({ success: false, error: message }, { status: 500 });
	}
};

export const GET: APIRoute = async () =>
	jsonResponse({ success: false, error: 'Pitch submission expects POST.' }, { status: 405 });
