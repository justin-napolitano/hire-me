import { statusTickerConfig, type StatusEntry } from '../config/profile';

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

export const getStatusOverride = () => {
	return (
		import.meta.env.PUBLIC_STATUS_OVERRIDE?.trim() ||
		import.meta.env.STATUS_OVERRIDE?.trim() ||
		statusTickerConfig.override?.trim() ||
		''
	);
};

export const buildTickerPayload = (date = new Date()): StatusPayload => {
	const filtered = statusTickerConfig.statuses.filter((status) => matchesDay(status, date) && matchesHour(status, date));
	return {
		statuses: filtered.length ? filtered : statusTickerConfig.statuses,
		intervalMs: statusTickerConfig.intervalMs ?? defaultInterval,
		override: getStatusOverride() || undefined
	};
};

export type { StatusPayload };
