import { statusTickerConfig, type StatusEntry, type StatusTickerConfig } from '../config/profile';

type StatusPayload = {
	statuses: StatusEntry[];
	intervalMs: number;
	override?: string;
};

const defaultInterval = 6000;

const matchesDay = (status: StatusEntry, date: Date) => {
	if (!status.days || status.days.length === 0) return true;
	return status.days.includes(date.getDay());
};

const matchesHour = (status: StatusEntry, date: Date) => {
	if (!status.hours) return true;
	const hour = date.getHours() + date.getMinutes() / 60;
	const [start, end] = status.hours;
	if (start <= end) {
		return hour >= start && hour <= end;
	}
	// overnight window wraps past midnight
	return hour >= start || hour <= end;
};

export const getStatusOverride = (config: StatusTickerConfig = statusTickerConfig) => {
	return (
		import.meta.env.PUBLIC_STATUS_OVERRIDE?.trim() ||
		import.meta.env.STATUS_OVERRIDE?.trim() ||
		config.override?.trim() ||
		''
	);
};

export const buildTickerPayload = (config: StatusTickerConfig = statusTickerConfig, date = new Date()): StatusPayload => {
	const filtered = config.statuses.filter((status) => matchesDay(status, date) && matchesHour(status, date));
	return {
		statuses: filtered.length ? filtered : config.statuses,
		intervalMs: config.intervalMs ?? defaultInterval,
		override: getStatusOverride(config) || undefined
	};
};

export type { StatusPayload };
