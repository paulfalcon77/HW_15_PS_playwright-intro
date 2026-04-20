Tallinn Delivery Tests

'npm install'
Create .env file
add to .env file APP_URL=https://fe-delivery.tallinn-learning.ee/
check .gitignore(.env file has to be in .gitignore)
in the terminal - npm install dotenv
add import 'dotenv/config' to playwright.config.ts
put in tallinn-delivery-auth.spec.ts const - APP_URL = process.env.APP_URL;

In github:
Settings - Secrets and variables - Actions
New repository secret

In the file - .github/workflows/playwright.yml
add env:
    APP_URL: ${{ secrets.APP_URL }}

Start tests `npx playwright test`



