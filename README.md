# IT Infrastructure Portfolio

React + Vite frontend with a live Express JSON API, designed for Google Cloud Run. The page reads your name, profile, projects, skills, and contacts from `data/portfolio.json` at runtime.

## Open in VS Code

Unzip this folder, open the **it-portfolio** folder in VS Code, then open **Terminal → New Terminal**.

Install dependencies (Node.js 20+ recommended):

```bash
npm install
```

In **terminal 1**, start the API:

```bash
npm start
```

In **terminal 2**, start the Vite development server:

```bash
npm run dev
```

Open `http://localhost:5173`. Check `http://localhost:8080/api/health` to verify the backend. If port 8080 is in use, stop that service; development proxy expects 8080.

### Edit your portfolio

Update `data/portfolio.json` with your real name, description, and project details. Leave links blank until you have real URLs. Only include professionally appropriate public details. API data is read at runtime; changes become visible after refreshing.

## Test

```bash
npm run build
```

Test manually in browser DevTools device toolbar at **375px, 768px, and 1440px**. Verify mobile menu, keyboard navigation, contact destinations, project details, spelling, and accessibility.

## Run production server locally

```bash
npm run build
npm start
```

Open `http://localhost:8080` and verify the API and frontend both work.

## Build and run container

Install Docker Desktop, then:

```bash
docker build -t it-portfolio .
docker run --rm -p 8080:8080 -e PORT=8080 it-portfolio
```

Open `http://localhost:8080`.

## GitHub → Google Cloud Run

The deployment workflow is `.github/workflows/deploy.yml`. It runs on pushes to `main` and performs: authenticate to Google Cloud → build Docker image → push to Artifact Registry → deploy Cloud Run service.

### Prerequisites

1. Create your own Google Cloud project with billing; enable Cloud Run, Artifact Registry, IAM Credentials, and Security Token Service APIs.
2. Create an Artifact Registry **Docker** repository in your selected region.
3. Create a Cloud Run deployment service account with the necessary Cloud Run, Artifact Registry, and service account usage permissions. Its access should be limited to project resources needed by the workflow; configure appropriate Cloud Run runtime service identity.
4. Set up a Workload Identity Pool/provider trusting **your private GitHub repository** (restrict repository claims); grant the deployment service account access to the workload identity principal.
5. Push the project to your own **private** GitHub repository. Do not add credentials to the repository.
6. In **GitHub → Settings → Secrets and variables → Actions → Variables**, set:

| Variable | Example (replace with your own) |
| --- | --- |
| `GCP_PROJECT_ID` | `your-project-id` |
| `GCP_REGION` | `us-central1` |
| `GCP_ARTIFACT_REPOSITORY` | `your-docker-repo` |
| `GCP_CLOUD_RUN_SERVICE` | `your-cloud-run-service` |
| `GCP_SERVICE_ACCOUNT` | `deploy-account@your-project-id.iam.gserviceaccount.com` |
| `GCP_WORKLOAD_IDENTITY_PROVIDER` | `projects/PROJECT_NUMBER/locations/global/workloadIdentityPools/POOL/providers/PROVIDER` |

7. Push a commit to `main` or manually trigger **Actions → Deploy portfolio to Cloud Run**.
8. Confirm the action completed successfully, open the Cloud Run service URL, and verify the frontend and `/api/health`.
9. Commit a minor visible change to confirm deployment triggers automatically.

**Note:** Cloud Run permissions and Workload Identity Federation setup depend on your account and organization's IAM settings. The workflow has not been deployed against a real Google Cloud project in this deliverable.

## Course deliverables / academic integrity

- `CLAUDE.md`: starter agent rules — review and adapt.
- `PLAN.md`: generated starter plan for this handoff, **not** a genuine Claude Code plan-mode artifact. If required, use Claude Code plan mode to generate and save the actual plan.
- `PROMPT_LOG.md`: blank template; record actual prompts and observations, including failures.
- `REFLECTION_NOTES.md`: thought starters only. Write the final 750–1,000-word reflection yourself **without AI**.

## What this app is / isn't

It **is** a dynamic web application with server-provided data, a working JSON endpoint, responsive components, and a Cloud Run-ready container configuration. It is **not** yet a completed course submission: you need to personalize it, verify links and project claims, perform real tests, configure and demonstrate live GitHub/Cloud Run deployment, and independently write the reflection.
