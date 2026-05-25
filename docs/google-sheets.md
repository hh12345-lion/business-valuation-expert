# Contact form → Google Sheets

Server-side append on each successful lead submission. After the n8n webhook succeeds, the full contact row is appended (Sheets errors are logged only and do not fail the user).

## Spreadsheet header row (row 1 on tab `Sheet7`)

Create these columns **in this exact order** (columns A–N):

| Col | Header name |
|-----|-------------|
| A | Timestamp |
| B | Full Name |
| C | Email |
| D | Phone Number |
| E | Law Firm / Organisation |
| F | Case Type |
| G | Sector |
| H | Legal Framework |
| I | Expert Type |
| J | Business Turnover Range |
| K | Hearing / Deadline Date |
| L | Brief Case Description |
| M | Urgency |
| N | Brand name |

Share the spreadsheet with your service account email as **Editor** (uncheck “Notify people”).

## Environment variables

Add to `.env.local` (never commit):

```env
GOOGLE_SERVICE_ACCOUNT_EMAIL=your-account@project.iam.gserviceaccount.com
GOOGLE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
GOOGLE_SHEET_ID=your_spreadsheet_id_from_url
GOOGLE_SHEET_TAB_NAME=Sheet7
```

On **Netlify**: add the same variables under Site → Environment variables.

## Test connection

```bash
npx tsx scripts/test-sheets.ts
```

## Behaviour

- If **`Lead_notification_url`** is set: POST webhook (four keys) first, then append full row to Sheets.
- If **only Google Sheets** env vars are set: save to the sheet directly (local dev).
- If **neither** is configured: the form returns an error.

## Security

- Do not commit `.env.local` or JSON key files.
- Rotate the service account key if it was ever exposed in chat, email, or Git.
