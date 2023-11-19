export const doctype = '<!DOCTYPE Html>';
export const charset = '<meta charset="utf-8">';
export const viewport = '<meta name="viewport" content="width=device-width,initial-scale=1">';

export function title(title: string): string {
	return `<title>${title}</title>`;
}
export function cssLink(href: string): string {
	return `<link rel="stylesheet" href="${href}">`;
}
export function scriptLink(src: string): string {
	return `<script src="${src}"></script>`;
}

export interface TemplateCfg {
	title?: string;
	language?: string;
	head?: string;
	body?: string;
}
export function template(configuration: TemplateCfg): string {
	return '' +
		doctype + '\n' +
		`<html lang="${configuration.language || 'en'}">` +
			'<head>' +
				charset +
				viewport +
				title(configuration.title ?? 'Untitled') +
				(configuration.head || '') +
			'</head>' +
			'<body>' + 
				(configuration.body || '') +
			'</body>' +
		'</html>'
}
