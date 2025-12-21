export type ActionLink = {
	label: string;
	href: string;
	description?: string;
	accent?: string;
	icon?: string;
	external?: boolean;
};

export type WorkLink = {
	label: string;
	href: string;
	description?: string;
	icon: string;
	external?: boolean;
};

export type StatusEntry = {
	id: string;
	text: string;
	days?: number[]; // 0-6, Sunday based
	hours?: [number, number]; // 24h window
};

export type SocialProofEntry = {
	quote: string;
	author: string;
	title?: string;
	source?: string;
};

export type SkillCluster = {
	title: string;
	focus: 'Primary focus' | 'Core lane' | 'Supporting lane';
	headline: string;
	bullets: string[];
	pills: string[];
};

export type GalleryImage = {
	id: string;
	src: string;
	alt: string;
	caption: string;
	href?: string;
	location?: string;
};

export type BookEntry = {
	title: string;
	author: string;
	edition?: string;
	flex: string;
	highlight: string;
};

export type WinStat = {
	label: string;
	value: string;
	detail: string;
};

export const profile = {
	name: 'Justin Napolitano',
	location: 'Orlando, FL',
	tagline: 'Healthcare analytics + media audience ops leader turning messy data into predictable launches and coverage.',
	verificationSummary:
		'Trusted by hospital quality teams and national media brands (Rolling Stone, Billboard, Footwear News) across launches, restructures, and the follow-through that keeps them on track.'
};

export const actionLinks: ActionLink[] = [
	{
		label: 'LinkedIn',
		href: 'https://linkedin.com/in/justin-napolitano',
		description: 'Roles, recommendations, and proof of execution.',
		accent: 'from-amber-400/80 to-rose-400/80',
		icon: '/icons/linkedin.svg',
		external: true
	},
	{
		label: 'Download the one-pager',
		href: 'https://resume.jnap.me/one-pager.pdf',
		description: 'Snapshot of metrics and work samples.',
		accent: 'from-rose-400/80 to-amber-300/80',
		icon: '/icons/placeholder.svg',
		external: true
	},
	{
		label: 'GitHub',
		href: 'https://github.com/jnapolitano',
		description: 'Automation scripts and tooling experiments.',
		accent: 'from-emerald-400/80 to-lime-300/80',
		icon: '/icons/github.svg',
		external: true
	}
];

export const workLinks: WorkLink[] = [
	{
		label: 'LinkedIn',
		href: 'https://linkedin.com/in/justin-napolitano',
		description: 'Roles, recommendations, and receipts.',
		icon: '/icons/linkedin.svg',
		external: true
	},
	{
		label: 'Recent case studies',
		href: 'https://notion.so/justin-case-studies',
		description: 'Lifecycle relaunch + GTM control room.',
		icon: '/icons/placeholder.svg',
		external: true
	},
	{
		label: 'GitHub',
		href: 'https://github.com/jnapolitano',
		description: 'Automation scripts + tooling experiments.',
		icon: '/icons/github.svg',
		external: true
	}
];

export const statusTickerConfig = {
	intervalMs: 6500,
	override: '',
	statuses: [
		{
			id: 'ops-sync',
			text: 'Monday 07:30 – Pre-standup dashboard pass + espresso dialing.',
			days: [1],
			hours: [6, 9]
		},
		{
			id: 'retro',
			text: 'Wednesday 17:30 – Mid-week retro at the neighborhood coffee bar.',
			days: [3],
			hours: [17, 20]
		},
		{
			id: 'launch-dinner',
			text: 'Friday 19:30 – Hosting friends & founders after the ship goes live.',
			days: [5],
			hours: [19, 22]
		},
		{
			id: 'prep',
			text: 'Sunday 11:00 – Grocery run, playlist reset, planning Monday\'s kickoff.',
			days: [0],
			hours: [10, 13]
		}
	]
};

export const socialProofEntries: SocialProofEntry[] = [];

export const skillsSnapshot: SkillCluster[] = [
	{
		title: 'Healthcare analytics & quality',
		focus: 'Primary focus',
		headline: 'Epic Clarity SQL, heart failure measures, and Vizient O/E analysis for clinical improvement.',
		bullets: [
			'Builds Epic Clarity + EDW views for readmissions, EF capture, and GDMT. Clinicians open one reliable dashboard every morning.',
			'Pairs Power BI with Vizient benchmarking and ICD-10 cohorts to flag gaps before cardiology and quality rounds.',
			'Leads weekly huddles with cardiology, nursing, and quality to turn shifts into action plans and briefs that travel before rounds.'
		],
		pills: ['Epic Clarity', 'Power BI', 'Vizient', 'Benchmarking', 'Heart failure measures', 'ICD-10 cohorts', 'EDW']
	},
	{
		title: 'Data platforms & engineering',
		focus: 'Primary focus',
		headline: 'Cloud-native workflows across GCP, AWS, and Azure for ETL, CDPs, and BI.',
		bullets: [
			'Ships Python/SQL services across GCP, AWS, and Azure feeding Looker + Treasure Data. Thirty brands share the same metrics.',
			'Migrates legacy stacks into governed cloud warehouses that cut processing time in half and steady marketing and finance ops.',
			'Built and ran the signal stack for Rolling Stone covers and every Billboard chart. Editors had the drop brief before anyone else.'
		],
		pills: ['GCP', 'AWS', 'Azure', 'Looker', 'Treasure Data CDP', 'Python', 'SQL', 'ETL automation', 'Data warehousing']
	},
	{
		title: 'AI & advanced analytics',
		focus: 'Supporting lane',
		headline: 'LLM fine-tuning, vendor evaluation, and research-grade modeling.',
		bullets: [
			'Ran vendor reviews on a $5M AI budget and fine-tuned editorial LLMs with scoring loops. Newsrooms and legal trust the copy.',
			'Prototyped RAG agents that surface financial, engagement, and editorial answers for execs without pinging analytics.',
			'Applies topic modeling, segmentation, and seasonal forecasting across patient and media data. Teams spot plays before dashboards refresh.'
		],
		pills: ['LLMs', 'RAG', 'Vendor evaluation', 'Topic modeling', 'Seasonal forecasting', 'Fine-tuning', 'Generative QA']
	},
	{
		title: 'Stakeholder enablement',
		focus: 'Core lane',
		headline: 'Bridges clinical, editorial, and exec teams with concise reporting.',
		bullets: [
			'Advises 25+ brand leaders with KPI reporting that backs $1B portfolios and coverage plays at Rolling Stone, Billboard, and Footwear News.',
			'Runs requirement sessions across cardiology, marketing, design, and analytics so every roadmap balances compliance and ambition.',
			'Publishes one-pagers, dashboards, and decision briefs that replace sprawling decks with clear asks leadership can circulate fast.'
		],
		pills: ['Executive reporting', 'Audience marketing', 'KPI standards', 'Narrative decks', 'Clinical partnerships', 'Data systems']
	}
];

export const wins: WinStat[] = [
	{
		label: 'Heart failure quality',
		value: '+12% GDMT compliance',
		detail: 'Epic Clarity + Power BI dashboards adopted across 6 hospitals.'
	},
	{
		label: 'Media ops discipline',
		value: '0 missed embargoes',
		detail: 'Rolling Stone covers + Billboard charts had briefs ready before press.'
	},
	{
		label: 'AI spend decisions',
		value: '$5M vendor review',
		detail: 'Ran due diligence and fine-tuning loops so legal + editorial signed off.'
	}
];

export const galleryImages: GalleryImage[] = [
	{
		id: 'kitchen',
		src: 'https://images.placeholders.dev/?width=640&height=800&text=Workshop+Day',
		alt: 'Working session photo',
		caption: 'Whiteboard sprint for a lifecycle relaunch.',
		href: 'https://notion.so/justin-case-studies',
		location: 'Williamsburg loft kitchen'
	},
	{
		id: 'rooftop',
		src: 'https://images.placeholders.dev/?width=640&height=800&text=Launch+Dinner',
		alt: 'Rooftop dinner',
		caption: 'Launch dinner with the client team.',
		href: 'https://notion.so/justin-case-studies',
		location: 'Lower East Side rooftop'
	},
	{
		id: 'stage',
		src: 'https://images.placeholders.dev/?width=640&height=800&text=Workshop+Talk',
		alt: 'Speaking on stage',
		caption: 'Sharing GTM tooling lessons last quarter.',
		href: 'https://notion.so/justin-case-studies',
		location: 'Brooklyn, NY'
	}
];

export const spotifyEmbed = {
	title: 'Deep work playlist',
	description: 'Instrumental and low-fi tracks I lean on during longer build sessions and QA blocks.',
	embedUrl: 'https://open.spotify.com/embed/playlist/7t4Fv4ZxN7cQYIs9kh0mOe',
	profileUrl: 'https://open.spotify.com/playlist/7t4Fv4ZxN7cQYIs9kh0mOe'
};

export const bookShelfEntries: BookEntry[] = [
	{
		title: 'Creative Selection',
		author: 'Ken Kocienda',
		edition: 'Hardcover, dog-eared',
		flex: 'Notes on every iteration story that mirrors my launch process.',
		highlight: 'Run demos early, often, with taste baked in.'
	},
	{
		title: 'Working Backwards',
		author: 'Colin Bryar & Bill Carr',
		edition: 'Kindle + print',
		flex: 'Printed the PR/FAQ template; it lives near my desk.',
		highlight: 'Write the narrative, then decide if it\'s worth shipping.'
	},
	{
		title: 'Trick Mirror',
		author: 'Jia Tolentino',
		edition: 'Hardcover, highlighted like deposition prep',
		flex: 'Keeps my copy honest when I\'m telling brand stories.',
		highlight: 'Culture and narrative are as operational as any spreadsheet.'
	},
	{
		title: 'Good Strategy/Bad Strategy',
		author: 'Richard Rumelt',
		edition: 'Paperback, heavily annotated',
		flex: 'Skim before every exec readout to stay crisp.',
		highlight: 'Diagnosis, guiding policy, coherent actions—every deck needs all three.'
	}
];
