# Initial Portfolio Plan — proposed draft

**Important:** This document is an assistant-produced starting plan for this handoff, **not** a fabricated transcript of Claude Code plan mode. If your course requires the original Claude-generated plan, run Claude Code in plan mode and save its actual original output separately.

## Goal
Deliver a professional, responsive IT leadership portfolio as a containerized, dynamic web application.

## Architecture
- React/Vite components render an accessible single-page portfolio.
- Express API reads `data/portfolio.json` and serves `GET /api/portfolio` and `GET /api/health`.
- Development: Vite on port 5173 proxies API requests to Express on port 8080.
- Production: Express serves both API and compiled Vite files on Cloud Run's `$PORT`.

## Delivery phases
1. Initialize repository and document development rules.
2. Build hero, navigation, project showcase, technical skills, contact section.
3. Add responsive styles and data-backed content.
4. Run build and manual responsive/keyboard/link checks.
5. Build and run Docker image locally.
6. Push private GitHub repository and configure federated GitHub Actions deployment to Google Cloud Run.
7. Verify live URL, run an incremental deployment test, record actual results.

## Risks and mitigations
- **Credentials:** use OIDC Workload Identity Federation instead of persistent service account keys.
- **Confidentiality:** avoid actual infrastructure screenshots or customer-sensitive details.
- **Incomplete content:** keep contact links empty until replaced and verified.
- **Cloud configuration:** GCP projects, permissions, billing, and GitHub repository variables must be supplied by the student.
- **Testing:** local `npm run build` does not replace manual browser checks or real cloud verification.
