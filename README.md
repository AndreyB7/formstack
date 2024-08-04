# Formstack

## Setup App
Install packages:
```npm i```
Create database:
```npm run generate```
```npm run migrate```

## Setup mailer via Google SMTP
Open Google account management and search 'App passwords'.
Add app, copy password to .env SMTP_APP_PASS, add email to .env SMTP_EMAIL.

## Submissions list
http://localhost:3003/api/submissions
