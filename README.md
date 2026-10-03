# Sonny Francis — Creative Portfolio

A static portfolio with project galleries, generated illustrations, motion studies, contact links, and a shared futuristic theme. Includes taskbloc under UI/UX & Product Design.

## Deploy from GitHub to Vercel

1. Push this folder's contents to the repository root.
2. Import that repository in Vercel.
3. Use the repository root as Root Directory. The included vercel.json selects Other, runs npm run build, and serves dist.
4. Deploy. No environment variables or API keys are required for this portfolio.

The build command checks all project pages and assets. The ready-to-serve pages are committed in dist. Regenerate imported project pages with npm run build:pages when changing content, then commit the updated dist files.

## taskbloc

Source: https://github.com/Franz-spex/Task-Manager

App: https://task-manager-spex3.vercel.app (currently protected by Vercel sign-in).

The portfolio's WhatsApp and email controls open message drafts; visitors send the messages themselves.

Vercel configuration reference: https://vercel.com/docs/project-configuration/vercel-json
