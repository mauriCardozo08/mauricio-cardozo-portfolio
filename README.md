# Reusable Angular Portfolio

Personal portfolio template built with Angular. This project is 100% reusable by anyone without touching the app code: just edit `angular-portfolio/src/assets/content.json` to customize your information (name, role, descriptions, technologies, experience, etc.).

## Requirements
- Node.js (v18 or newer recommended)
- npm
- Angular CLI (v19+): `npm i -g @angular/cli`

## Repository structure
- `angular-portfolio/`: Angular app source code
  - `src/assets/content.json`: the only file you need to modify to customize your portfolio
  - `src/config/emailjs.config.json`: EmailJS configuration (serviceId, templateId, publicKey)

## Run locally
1. Go to the Angular project directory:
   - `cd angular-portfolio`
2. Install dependencies:
   - `npm install`
3. Start the dev server:
   - `npm start`
4. Open `http://localhost:4200` in your browser.

## Customization (no coding required)
All visible site content is loaded from `src/assets/content.json`. Change its content to match your profile.

Expected structure:
- **Technologies**: list of skills/technologies.
- **Person**:
  - **Name**: your name.
  - **Role**: your main role.
  - **SmallDescription**: short summary.
  - **LongDescription**: extended description.
- **Career**:
  - **Description**: overview of your background.
  - **Experiences**: list of experiences with:
    - **Company**
    - **Position**
    - **StartDate**
    - **EndDate**
    - **Description**
    - **Tasks**: list of responsibilities/achievements.
    - **Technologies**: technologies used.

Minimal `content.json` example:
```json
{
  "Technologies": ["Design", "Code", "Deploy"],
  "Person": {
    "Name": "Your Name",
    "Role": "Your Role",
    "SmallDescription": "A short summary of who you are and what you do.",
    "LongDescription": "A more detailed description of your experience, interests, and goals."
  },
  "Career": {
    "Description": "A short history of your education and career.",
    "Experiences": [
      {
        "Company": "Company X",
        "Position": "Your position",
        "StartDate": "2022",
        "EndDate": "Present",
        "Description": "What you do/did in this role.",
        "Tasks": [
          "Responsibility or achievement 1",
          "Responsibility or achievement 2"
        ],
        "Technologies": ["Angular", ".NET", "SQL Server"]
      }
    ]
  }
}
```

That’s all you need for the site to display your information. No component or service changes are required; the `ContentService` loads this file at runtime.

## Useful scripts
Run inside `angular-portfolio`:
- `npm start`: development environment (`ng serve`)
- `npm run build`: standard build
- `npm run build:prod`: production build with `--base-href` prepared for GitHub Pages at `/mauricio-cardozo-portfolio/`

Build output: `dist/angular-portfolio/` (in recent Angular versions it may include a `browser/` subfolder).

### Deploy to GitHub Pages (optional)
1. Make sure `package.json` has `build:prod` with the appropriate `--base-href` for your repository. If your repo is named `my-portfolio`, use:
   - `ng build --configuration=production --base-href=/my-portfolio/`
2. Run `npm run build:prod`.
3. Publish the contents of `dist/angular-portfolio/` (or `dist/angular-portfolio/browser/` if applicable) to the `gh-pages` branch or your hosting provider of choice.

## EmailJS integration (contact form)
This project uses EmailJS on the client to send messages from the recommendations/contact form. No server is required.

### Configure EmailJS
1. Create an account at `https://www.emailjs.com` and log in.
2. Create a Service (link an email provider or SMTP).
3. Create a Template and add the following variables in your template body/subject as needed:
   - `{{name}}`
   - `{{email}}`
   - `{{message}}`
   - `{{title}}`
   - `{{time}}`
4. Go to Account → API Keys and copy your Public Key.
5. Note your Service ID and Template ID from the Email Services/Templates pages.

### Set your keys in the app
Edit the config file:
- `angular-portfolio/src/config/emailjs.config.json`

Fill it with your values:
```json
{
  "serviceId": "YOUR_SERVICE_ID",
  "templateId": "YOUR_TEMPLATE_ID",
  "publicKey": "YOUR_PUBLIC_KEY"
}
```

Notes:
- Only the Public Key is used on the frontend; do not use Secret Keys in the browser.
- The Angular build is already configured to include `src/config` as an asset, so the JSON is available at runtime.
- The form also includes a basic `honeypot` field to reduce spam submissions.

## Reuse by anyone
1. Clone this repository.
2. Edit `angular-portfolio/src/assets/content.json` with your information.
3. Configure EmailJS in `angular-portfolio/src/config/emailjs.config.json` (`serviceId`, `templateId`, `publicKey`).
4. Install dependencies and run `npm start`.
5. Build and deploy wherever you prefer.

Done! Your portfolio will run with your own content, without needing to touch the source code.
