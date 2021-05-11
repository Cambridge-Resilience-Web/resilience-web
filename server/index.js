import './env.js';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { fastify } from 'fastify';

const app = fastify({ logger: true });

const SPREADSHEET_ID = process.env.APP_SPREADSHEET_ID;
const SHEET_ID = process.env.APP_SHEET_ID;
const CLIENT_EMAIL = process.env.APP_GOOGLE_CLIENT_EMAIL;
const { privateKey: PRIVATE_KEY } = JSON.parse(
	process.env.APP_GOOGLE_SERVICE_PRIVATE_KEY,
);

async function startServer() {
	try {
		app.get('/getData', async (request, reply) => {
			const doc = new GoogleSpreadsheet(SPREADSHEET_ID);

			try {
				await doc.useServiceAccountAuth({
					client_email: CLIENT_EMAIL,
					private_key: PRIVATE_KEY,
				});

				await doc.loadInfo();

				const sheet = doc.sheetsById[SHEET_ID];
				const rows = await sheet.getRows();

				const transformedRows = rows.map((row) => ({
					rowNumber: row._rowNumber,
					id: row.id,
					name: row.organization,
					category: row.category,
					description: row.description,
					website: row.website,
					facebook: row.facebook,
					twitter: row.twitter,
					instagram: row.instagram,
					email: row.email,
				}));

				reply.code(200).send({ result: transformedRows });
			} catch (e) {
				reply.code(400).send({ error: 'Something went wrong: ' + e });
				// eslint-disable-next-line no-console
				console.error('Error: ', e);
			}
		});

		await app.listen(3001);
		console.log('🚀 Server Listening at port: 3001');
	} catch (e) {
		console.error(e);
	}
}

startServer();
