import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: '✨ Features',
      links: [
        {
          text: '📧 Email API',
          href: getPermalink('/email-api'),
        },
        {
          text: '📬 SMTP Service',
          href: getPermalink('/smtp-api'),
        },
        {
          text: '📥 Inbound Email',
          href: getPermalink('/inbound-email'),
        },
        {
          text: '📨 Transactional Email',
          href: getPermalink('/transactional-email'),
        },
        {
          text: '🇪🇺 EU Hosted Email',
          href: getPermalink('/eu-hosted-email'),
        },
        {
          text: '🛡️ Spam Protection',
          href: getPermalink('/spam-protection'),
        },
        {
          text: '🔔 Webhooks',
          href: getPermalink('/webhooks'),
        },
        {
          text: '🔄 Idempotency',
          href: getPermalink('/idempotent-emails'),
        },
      ],
    },
    {
      text: 'Pricing',
      href: getPermalink('/pricing'),
    },
    {
      text: 'Documentation',
      href: 'https://docs.mailpace.com',
    },
    {
      text: 'Resources',
      links: [
        {
          text: '📝 Blog',
          href: getBlogPermalink(),
        },
        {
          text: '📘 Email Guides',
          href: getPermalink('guides', 'category'),
        },
        {
          text: '📙 Tutorials',
          href: getPermalink('tutorials', 'category'),
        },
        {
          text: '📜 Changelog',
          href: getPermalink('changelog', 'category'),
        },
        {
          text: '💭 Musings',
          href: getPermalink('musings', 'category'),
        },
      ],
    },
  ],
  actions: [
    { text: 'Sign In', href: 'https://app.mailpace.com/', target: '_blank' },
    { text: 'Start Sending', href: 'https://app.mailpace.com/', target: '_blank', variant: 'primary' },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Pricing', href: getPermalink('/pricing') },
        { text: 'Speed', href: getPermalink('/fast-transactional-emails') },
        { text: 'Reviews', href: getPermalink('/testimonials') },
        {
          text: 'Latest Updates',
          href: getBlogPermalink(),
        },
      ],
    },
    {
      title: 'Features',
      links: [
        ...(headerData.links[0].links || []),
      ],
    },
    {
      title: 'MailPace For',
      links: [
        { text: 'Developers', href: getPermalink('/for/developers') },
        { text: 'Side Projects', href: getPermalink('/for/side-projects') },
        { text: 'Startups', href: getPermalink('/for/startups') },
        { text: 'Agencies', href: getPermalink('/for/agencies') },
        { text: 'Bootstrappers', href: getPermalink('/for/bootstrappers') },
        { text: 'Enterprise', href: getPermalink('/for/enterprise') },
      ],
    },
    {
      title: 'MailPace vs.',
      links: [
        { text: 'Postmark', href: getPermalink('/compare/postmark-alternative') },
        { text: 'Resend', href: getPermalink('/compare/resend-alternative') },
        { text: 'Mailgun', href: getPermalink('/compare/mailgun-alternative') },
        { text: 'SendGrid', href: getPermalink('/compare/sendgrid-alternative') },
        { text: 'SparkPost', href: getPermalink('/compare/sparkpost-alternative') },
        { text: 'Amazon SES', href: getPermalink('/compare/aws-ses-alternative') },
        { text: 'Mandrill', href: getPermalink('/compare/mandrill-alternative') },
      ],
    },
    {
      title: 'Resources & Support',
      links: [
        { text: 'Contact Us', href: 'mailto:support@mailpace.com' },
        { text: 'Status', href: 'https://status.mailpace.com' },
        { text: 'API Documentation', href: 'https://docs.mailpace.com' },
        { text: 'Code Libraries', href: getPermalink('/code') },
        { text: 'Blog', href: getBlogPermalink()},
        { text: 'Careers', href: getPermalink('/careers') },
        { text: 'Newsletter', href: getPermalink('/newsletter') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
    { text: 'Data Protection Act (DPA)', href: getPermalink('/dpa') },

  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/mailpace' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/mailpace' },
  ],
  footNote: `
    Proudly hosted in the European Union 🇪🇺
  `,
};
