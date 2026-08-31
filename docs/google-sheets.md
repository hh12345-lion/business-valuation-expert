# Contact form → Google Sheets

Server-side append on each successful lead submission. After the n8n webhook succeeds, the full row is appended (Sheets errors are logged only and do not fail the user).

## Spreadsheet header row (row 1 on shared tab)

Use one tab (`GOOGLE_SHEET_TAB_NAME`, e.g. `Sheet7`). Create these columns **in this exact order**:

| Col | Header name |
|-----|-------------|
| A | Timestamp |
| B | Brand |
| C | Form Type |
| D | Full Name |
| E | Email |
| F | Phone Number |
| G | Law Firm / Organisation |
| H | Case Type |
| I | Sector |
| J | Legal Framework |
| K | Expert Type |
| L | Business Turnover Range |
| M | Hearing / Deadline Date |
| N | Brief Case Description |
| O | Urgency |

**Form Type** is `Contact` or `Instruct` (this site’s intake form sends `instruct`).

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

- If **`Lead_notification_url`** is set: POST webhook (five keys, including **`domain`**) first, then soft-fail append to the shared Sheets tab.
- If **only Google Sheets** env vars are set: soft-fail append to the sheet (local/dev fallback).
- If **neither** is configured: the form returns an error.

## Security

- Do not commit `.env.local` or JSON key files.
- Rotate the service account key if it was ever exposed in chat, email, or Git.
