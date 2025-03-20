<p align="center">
  <a href="https://www.medusajs.com">
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://user-images.githubusercontent.com/59018053/229103275-b5e482bb-4601-46e6-8142-244f531cebdb.svg">
    <source media="(prefers-color-scheme: light)" srcset="https://user-images.githubusercontent.com/59018053/229103726-e5b529a3-9b3f-4970-8a1f-c6af37f087bf.svg">
    <img alt="Medusa logo" src="https://user-images.githubusercontent.com/59018053/229103726-e5b529a3-9b3f-4970-8a1f-c6af37f087bf.svg">
    </picture>
  </a>
</p>
<h1 align="center">
  Medusa Plugin Starter
</h1>

<h4 align="center">
  <a href="https://docs.medusajs.com">Documentation</a> |
  <a href="https://www.medusajs.com">Website</a>
</h4>

<p align="center">
  Building blocks for digital commerce
</p>
<p align="center">
  <a href="https://github.com/medusajs/medusa/blob/master/CONTRIBUTING.md">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat" alt="PRs welcome!" />
  </a>
    <a href="https://www.producthunt.com/posts/medusa"><img src="https://img.shields.io/badge/Product%20Hunt-%231%20Product%20of%20the%20Day-%23DA552E" alt="Product Hunt"></a>
  <a href="https://discord.gg/xpCwq3Kfn8">
    <img src="https://img.shields.io/badge/chat-on%20discord-7289DA.svg" alt="Discord Chat" />
  </a>
  <a href="https://twitter.com/intent/follow?screen_name=medusajs">
    <img src="https://img.shields.io/twitter/follow/medusajs.svg?label=Follow%20@medusajs" alt="Follow @medusajs" />
  </a>
</p>

## Compatibility

This starter is compatible with versions >= 2.5.0 of `@medusajs/medusa`. 

# Notification-smtp

# Support the Notification-smtp Provider - Elevate Our Medusa Community!

Dear Developers and E-commerce Enthusiasts,

Are you ready to enhance email communication for your MedusaJS store? We have an exciting opportunity that will streamline email delivery for the Medusa platform! Introducing the SMTP Provider, a community-driven project that integrates the power of SMTP email services into the MedusaJS commerce stack, ensuring reliable and efficient email communication.

Stay ahead in e-commerce with seamless email solutions! 🚀

**What's in it for You:**

🚀 Enhance Email Communication: With the SMTP Provider, you can unlock the full potential of SMTP services, ensuring reliable and secure email delivery for your customers.

🌐 Seamless Global Outreach: Connect with customers worldwide with hassle-free email communication, supporting various email providers and configurations tailored to your needs.

🎉 Empower Your Medusa Store: By supporting this provider, you contribute to the Medusa community, fostering innovation and improving email infrastructure across the platform.

## Effortless Installation

No complexity, no hassle! Set up the SMTP Provider quickly with npm:

The SMTP Provider integrates SMTP email services into the MedusaJS commerce stack, ensuring seamless email functionality for transactional and marketing emails. 🚀

## Installation

Use the package manager npm to install Notification-smtp.

```bash
npm install @tsc_tech/medusa-plugin-smtp
yarn add @tsc_tech/medusa-plugin-smtp
```

Additionally, install the smtp package:

```bash
npm install nodemailer
yarn add nodemailer
```

## Configuration

Step 1. Choose an SMTP Provider

You'll need an SMTP provider to send emails. Some popular options include:

Gmail (requires an App Password if using 2FA)


Step 2. Get SMTP Credentials

Once you've signed up for an SMTP provider, retrieve your SMTP credentials (hostname, port, username, password).
Example (for Gmail):

SMTP_HOST: smtp.gmail.com
SMTP_PORT: 587 (for TLS) or 465 (for SSL)
SMTP_AUTH_USER: your-email@gmail.com
SMTP_AUTH_PASS: your-app-password

For Gmail, enable Less Secure Apps or generate an App Password if using 2FA.


Step 3. Set Up Environment Variables
In your .env file, define the following variables:
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_SECURE=true
SMTP_NAME=your-app-name
SMTP_AUTH_USER=your-email@gmail.com
SMTP_AUTH_PASS=your-app-password
SMTP_FROM=your-email@gmail.com
DEFAULT_REPLY_TO=your-email@gmail.com
```

Step 3: Update Medusa Configuration
Modify your medusa-config.ts to include the smtp provider:


```
module.exports = defineConfig({
modules: [
  ...
    {
      resolve: "@medusajs/medusa/notification",
      options: {
        providers: [
          // # SMTP Notification
          {
            resolve: "@tsc_tech/medusa-plugin-smtp/providers/smtp",
            id: "notification-smtp",
            options: {
              channels: ["email"],
              fromEmail: process.env.SMTP_FROM,
              transport: {
                host: process.env.SMTP_HOST || "smtp.gmail.com",
                port: process.env.SMTP_PORT || 465,
                secure: process.env.SMTP_SECURE || false,
                auth: {
                  user: process.env.SMTP_AUTH_USER,
                  pass: process.env.SMTP_AUTH_PASS,
                },
              },
            },
          },
        ],
      },
    },
  ...]
})
```


## Contributing


Contributions are welcome! For significant changes, please open an issue first to discuss your proposed modifications.

Kindly ensure that tests are updated as needed.

## License
[MIT](https://choosealicense.com/licenses/mit/)

## Disclaimer
The code has been tested in a limited number of scenarios, so unforeseen bugs may arise. Please report any issues you encounter or submit a pull request if you'd like to contribute fixes.


## Support the Notification-smtp Provider - Strengthen Our Medusa Community!