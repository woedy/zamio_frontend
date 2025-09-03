# ZamIO Artist Frontend Checklist

Purpose: track feature readiness for the artist-facing app. Check items off when built, wired to APIs, and verified in the UI.

Legend: [ ] Planned  [~] In progress  [x] Done

## 1. Authentication & Onboarding (UI)
- [ ] Sign up view (name, email, phone, password) with client-side validation
- [ ] Login view (email/phone + password)
- [ ] Forgot password flow (request + reset forms)
- [ ] Optional OTP verification (phone) screen for MoMo readiness
- [ ] Profile completion prompt (bio, photo, genre) after sign-up
- [~] Private route guard; redirect on missing/expired token
- [~] Axios 401 handling (clear session, redirect to `/signin`)
- [~] Fetch `profile/me` on app load; derive and store `artist_id`

## 2. Artist Profile & Settings (UI)
- [ ] Edit profile page (bio, image upload, genres, contact)
- [ ] Image crop/resize + preview
- [ ] KYC upload form with status badges (Pending/Verified/Rejected)
- [ ] MoMo number form (network picker: MTN, Vodafone, AirtelTigo) with validation
- [ ] Settings: change password, notification preferences, delete account
- [ ] Success/error toasts, disabled states, skeletons

## 3. Music Upload & Management (UI)
- [ ] Upload track page (file picker, metadata form, progress bar)
- [ ] Cover art upload (constraints + preview)
- [ ] Contributors editor (splits sum to 100%, role labels)
- [ ] Trigger fingerprint job; show processing states per track
- [ ] Song Manager table (search, filter, sort, pagination)
- [ ] Edit song metadata page
- [ ] View fingerprint details/status page
- [ ] Download registration certificate (PDF link/button)

## 4. Playlogs & Match Logs (UI)
- [x] Tabbed table for Playlogs/Matchlogs
- [ ] Debounced search + filters (date range, station)
- [ ] Paginated list with clear empty/loading/error states
- [ ] Display earnings per play (formatted currency)
- [ ] Export CSV button (optional)

## 5. Analytics (UI)
- [ ] Plays over time chart with range selector (day/week/month)
- [ ] Station breakdown (top stations chart)
- [ ] Top songs chart/table
- [ ] Airplay map of Ghana regions
- [ ] API wiring + loading skeletons + empty states

## 6. Royalty & Payments (UI)
- [ ] Wallet balance card (available, on-hold, pending) with `Intl.NumberFormat('en-GH', { currency: 'GHS', style: 'currency' })`
- [ ] Sources breakdown using keys: radio, streaming, distro
- [ ] Royalty breakdown: chart with API data; toggle to table
- [ ] Withdrawal form (MoMo): number, network, name, amount
- [ ] Validation: min amount threshold; disable when insufficient or KYC not verified
- [ ] Submit request with loading state and success/error toasts
- [ ] Include idempotency key header (UUID) when calling API (if supported)
- [ ] Payment history table with status chips and pagination
- [ ] Royalty rate info panel (effective rates; show overrides if provided)

Immediate fixes in codebase:
- [ ] Replace `wallet.sources.stations` with `wallet.sources.radio`
- [ ] Add safe currency formatting and null guards on payments screen
- [ ] Replace static royalty chart data with API timeseries

## 7. Notifications (UI)
- [ ] List view with tabs/filters (All, Airplay, Payouts)
- [ ] Mark as read, delete, clear all
- [ ] Realtime or polling updates
- [ ] Empty-state illustrations/messages

## 8. Legal & Compliance (UI)
- [ ] Terms acceptance modal after sign-in when version changes
- [ ] Documents list with PDF downloads (agreements/split sheets)
- [ ] Dispute claim entry (Phase 2 stub)

## 9. Help & Support (UI)
- [ ] In-app help center (FAQ, payouts guide)
- [ ] Contact support form (with context)
- [ ] Bug report option
- [ ] Mobile/responsive verification for all key pages

## 10. Cross-cutting Quality
- [ ] Error boundaries around routes
- [ ] Toast + inline error patterns standardized
- [ ] Loading skeletons for long fetches
- [ ] Accessibility: labels, keyboard nav, contrast
- [ ] Performance: code-split routes; lazy heavy charts/maps
- [ ] Telemetry hooks (e.g., Sentry) for prod
- [ ] Feature flags for risky features (withdrawals, disputes)

## 11. API Wiring Verification
- [ ] Wallet: `GET api/payments/artist/wallet?artist_id=` mapped to UI
- [ ] Withdrawals: `POST api/payouts/withdrawals/` integrated with form
- [ ] Timeseries: `GET api/analytics/royalties/timeseries` powers charts
- [ ] Playlogs/Matchlogs: `GET api/artists/playlogs/` with pagination
- [ ] Profile: `GET api/profile/me` to hydrate session

## 12. Release Readiness (Frontend)
- [ ] Environment configs for dev/staging/prod
- [ ] Bundle size within budget; lighthouse pass on PWA metrics (if applicable)
- [ ] Smoke test scripts for main flows
- [ ] Error pages (404/500) styled
- [ ] Versioning + CHANGELOG entry

Notes:
- Keep API payloads camelCase in components; convert from snake_case returned by backend if needed.
- Prefer optimistic UI where safe; otherwise show explicit progress states.
- Always handle empty, loading, and error states for data components.
