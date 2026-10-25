# IMB Tech

IMB Tech is a Next.js website for electrical services and materials enquiries. A Prisma schema is configured for a local SQLite database.

## Run on Windows

1. Install Node.js (18.17 or newer) and Git.
2. Open this project folder in VS Code.
3. In VS Code, open **Terminal → New Terminal** and run:

   ```powershell
   npm.cmd install
   ```

   `npm.cmd` works in PowerShell even when Windows blocks the `npm.ps1` script.

4. Create your local environment file:

   ```powershell
   Copy-Item .env.example .env
   ```

   Replace `JWT_SECRET` in `.env` with a private, randomly generated value. Do not share or commit `.env`.

5. Create/update the local SQLite database:

   ```powershell
   npm.cmd run db:push
   ```

6. Start the website:

   ```powershell
   npm.cmd run dev
   ```

7. Open [http://localhost:3000](http://localhost:3000) in your browser. Press **Ctrl+C** in the terminal to stop the server.

## Checks

```powershell
npm.cmd run lint
npm.cmd run build
```

## Current limitations

- Checkout creates a reference for follow-up only. It does not charge a customer, contact Paystack or Flutterwave, or verify a payment. The verification endpoint returns `501 Not Implemented` until a gateway is integrated.
- Booking and contact requests are saved to the local SQLite database after the consent checkbox is selected. Run `npm.cmd run db:push` before submitting these forms.
- The login and admin pages are visual placeholders, not working or protected account features.
- The Prisma schema is present, but most pages are not connected to database records.

Do not rely on a displayed reference, page, or dashboard number as proof that an order, booking, invoice, or payment has been saved or confirmed.
