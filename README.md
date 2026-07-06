# Vyrn Designs — Portfolio Site

React + Vite + Tailwind v4 + Ant Design portfolio site, built from the provided mockup.

## Run locally

```bash
npm install
npm run dev
```

## Project structure

Follows the `react-vite-webdev` skill conventions — feature folders under `src/features`,
shared UI in `src/components/shared`, content data in `src/lib/content.js`.

- `src/features/portfolio/components` — Hero, About, Portfolio grid, Skills, Services
- `src/features/contact/components` — Contact form + section
- `src/features/contact/services/emailService.js` — EmailJS integration

To change the name, bio, skills, services, or portfolio items, edit **`src/lib/content.js`** —
nothing else needs to change.

---

## Making "Send Us A Message" actually send emails

I integrated **EmailJS** — it's the best fit here because:

- **Free tier**: 200 emails/month, no credit card required.
- **No backend needed** — it sends straight from the browser, which matters since this is a
  static Vite site with no server.
- Takes about 5 minutes to wire up.

### Setup steps

1. **Create a free account** at [emailjs.com](https://www.emailjs.com/).
2. **Add an email service** (Gmail, Outlook, or any SMTP) under *Email Services* — this is the
   inbox that will actually receive the messages. Note the **Service ID**.
3. **Create an email template** under *Email Templates*. Use these variable names so it matches
   the form:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`

   Example template body:
   ```
   New message from {{from_name}} ({{from_email}})

   {{message}}
   ```
   Note the **Template ID**.
4. **Get your Public Key** from *Account → General*.
5. Copy `.env.example` to `.env` in the project root and fill in the three values:
   ```
   VITE_EMAILJS_SERVICE_ID=service_xxxxxxx
   VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx
   VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxx
   ```
6. Restart `npm run dev`. The form on the Contact section will now send real emails.

That's it — no server, no API keys exposed beyond the public key (which is safe to expose;
EmailJS is designed for client-side use).

### Deploying

When you deploy (Vercel/Netlify/etc.), add the same three `VITE_EMAILJS_*` variables in your
host's environment variable settings — the `.env` file itself is git-ignored and won't be
deployed.

### If you outgrow the free tier

200 emails/month is generous for a personal portfolio contact form. If you ever need more,
EmailJS's paid tiers start cheap, or you could switch to a small serverless function (e.g. a
Vercel/Netlify function calling Resend's free tier) — happy to help set that up later if needed.
