<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run the JS frontend (Vite + React)

This folder is the JavaScript conversion of the original AI Studio TypeScript prototype.

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Run the app:
   `npm run dev`

## Supabase bootstrap

1. Run SQL scripts in this order:
   - `supabase/01_core_auth_rbac.sql`
   - `supabase/02_domain_tables.sql`
   - `supabase/03_security_rls.sql`
2. Read `supabase/SETUP.md` for full panel walkthrough.
