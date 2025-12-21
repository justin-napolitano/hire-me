/// <reference types="astro/client" />

interface ImportMetaEnv {
	readonly STATUS_OVERRIDE?: string;
	readonly PUBLIC_STATUS_OVERRIDE?: string;
	readonly PUBLIC_SPOTIFY_EMBED_URL?: string;
	readonly RESEND_API_KEY?: string;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
