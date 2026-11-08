# AI agent rules for this project

- Use React, Vite, JavaScript, and a small Express server. Do not switch frameworks without approval.
- Treat `data/portfolio.json` as the content source; avoid hardcoding résumé claims in JSX.
- Keep components accessible and responsive, including keyboard navigation and mobile navigation.
- Don't invent experience, project outcomes, credentials, contact information, links, or screenshots.
- Do not expose internal organization names, network diagrams, credentials, or sensitive infrastructure details.
- Keep dependencies minimal and source code understandable by a student.
- Always explain files changed and why after implementing a feature.
- Check `npm run build` after changes. Never claim to have tested a browser, Docker, or Cloud Run unless tests actually ran.
- Cloud Run must listen on `0.0.0.0` and `$PORT`; keep production container compatible.
- Do not commit `.env` files, secrets, build artifacts, or `node_modules`.
- Prompt log entries must reflect prompts actually submitted and genuine outcomes, not fabricated history.
- The student must write the reflection without AI-generated prose.
