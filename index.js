'use strict';

module.exports = (subject, status, color) => {
	subject = subject || 'build';
	status = status || 'unknown';
	color = color || 'lightgrey';

	const base = `https://img.shields.io/badge/${subject}-${status}-${color}.svg`;

	return {
		default: base,
		plastic: `${base}?style=plastic`,
		flat: `${base}?style=flat`,
		flatSquared: `${base}?style=flat-square`,
		social: `${base}?style=social`
	};
};
