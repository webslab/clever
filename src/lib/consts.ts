export const WEBSLAB_PROJECT = "clever";
export const WEBSLAB_DOMAIN = "ipsitec.es";
export const WEBSLAB_TOKEN = "TOKEN"; // TODO: temporary, should be user token

// export const WEBSLAB_SITE = `http://localhost:8000`;
export const WEBSLAB_SITE = `https://${WEBSLAB_PROJECT}.${WEBSLAB_DOMAIN}`;

export const SITE_TITLE = "Clever";
export const SITE_DESCRIPTION = "Welcome to Clever!";

// TODO: Change to production URL
export const DB = {
	url: `${WEBSLAB_SITE}/db`,
	config: {
		access: "user",
		database: WEBSLAB_PROJECT,
		namespace: "webslab",
	},
};
