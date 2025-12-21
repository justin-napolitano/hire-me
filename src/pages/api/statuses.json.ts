import type { APIRoute } from 'astro';
import { buildTickerPayload } from '../../lib/status';

export const prerender = false;

export const GET: APIRoute = async () => {
	const payload = buildTickerPayload();
	return new Response(JSON.stringify(payload), {
		status: 200,
		headers: {
			'content-type': 'application/json',
			'cache-control': 'no-store'
		}
	});
};
