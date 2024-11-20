interface SiteConfig {
  name: string;
  description: string;
  email: {
    recipient: string;
    subject: string;
  };
  links: {
    github: string;
    linkedin: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Your Portfolio",
  description: "Personal portfolio and blog",
  email: {
    recipient: "your-email@example.com",
    subject: "New Contact Form Submission",
  },
  links: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
  }
};