export type BlogPost = {
  category: string;
  title: string;
  excerpt: string;
  date: string;
  dateTime: string;
  readTime: string;
  href: string;
};

export const blogPosts: BlogPost[] = [
  {
    category: "Employment & Labour Relations",
    title: "Understanding The Legal Requirements For Redundancy In Kenya",
    excerpt: "Navigating organizational restructuring requires strict adherence to labor laws. We break down the mandatory compliance steps under Section 40 of the Employment Act to help your business mitigate litigation risks.",
    date: "Aug 01 2026",
    dateTime: "2026-08-01",
    readTime: "5 min read",
    href: "/blogs/redundancy-requirements-kenya",
  },
  {
    category: "Constitutional & Public Litigation",
    title: "The Power Of Article 47: Protecting Your Business From Unfair Administrative Actions",
    excerpt: "When government or state regulatory authorities impose arbitrary levies or penalties without proper public participation, businesses have strong constitutional remedies. Find out how to protect your rights.",
    date: "July 15 2026",
    dateTime: "2026-07-15",
    readTime: "4 min read",
    href: "/blogs/article-47-business-protection",
  },
  {
    category: "Real Estate & Property",
    title: "Navigating Commercial Real Estate Joint Ventures In Nairobi",
    excerpt: "Investing in mixed-use property developments involves significant legal complexities. Discover how robust joint venture agreements, strict regulatory compliance, and clear land conversion processes protect your capital.",
    date: "July 01 2026",
    dateTime: "2026-07-01",
    readTime: "3 min read",
    href: "/blogs/commercial-real-estate-joint-ventures",
  },
];
