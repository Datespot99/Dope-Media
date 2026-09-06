/* ─── AI Courses ─────────────────────────────────────────────── */
export interface Course {
  id: string
  title: string
  subtitle: string
  duration: string
  lessons: number
  level: string
  tag: string
  price: number
  description: string
  specs: string[]
  benefits: string[]
}

export const COURSES: Course[] = [
  {
    id: 'ai-marketing-mastery',
    title: 'AI Marketing Mastery',
    subtitle: 'Automate & Scale Your Brand With AI',
    duration: '6 hrs', lessons: 32, level: 'Beginner – Intermediate', tag: 'Bestseller', price: 999,
    description: 'Learn to leverage ChatGPT, Midjourney, and automation tools to run full marketing campaigns — without a big team or budget.',
    specs: ['32 video lessons across 6 modules', 'ChatGPT prompt library (200+ prompts)', 'Midjourney brand design workflows', 'Meta & Google Ads AI optimization', 'Canva + AI integration templates', 'Lifetime access + future updates'],
    benefits: ['Cut content creation time by 80%', 'Build campaigns that run on autopilot', 'Create pro-level visuals without design skills', 'Scale ad performance using AI bidding', 'Certificate of completion included'],
  },
  {
    id: 'chatgpt-business',
    title: 'ChatGPT for Business',
    subtitle: 'Turn AI Into Your 24/7 Business Assistant',
    duration: '4.5 hrs', lessons: 26, level: 'All Levels', tag: 'Hot', price: 999,
    description: 'A practical course on using ChatGPT to write copy, handle customer service, build SOPs, generate leads, and run your business smarter.',
    specs: ['26 focused video lessons', '50+ ready-to-use business prompt templates', 'Custom GPT setup walkthroughs', 'Email, proposal & pitch automation', 'SOP and documentation workflows', 'Private community access'],
    benefits: ['Save 10+ hours per week on writing', 'Deploy a ChatGPT-powered support agent', 'Generate leads and outreach at scale', 'Systemize operations without hiring', 'Applicable to any business or niche'],
  },
  {
    id: 'ai-content-engine',
    title: 'AI Content Engine',
    subtitle: 'Build a Content Machine That Never Stops',
    duration: '5 hrs', lessons: 28, level: 'Intermediate', tag: 'New', price: 999,
    description: 'A complete system for using AI tools to create, repurpose, and distribute content across Instagram, TikTok, YouTube, and LinkedIn simultaneously.',
    specs: ['28 lessons + 4 live case studies', 'Multi-platform repurposing framework', 'Short-form video scripts with AI', 'SEO blog generation pipeline', 'Auto-scheduling with Buffer & Later', 'Content calendar templates included'],
    benefits: ['Post daily on 4+ platforms with minimal effort', 'Turn one idea into 10 pieces of content', 'Grow organically without paid ads', 'Build a recognizable brand voice with AI', 'Works for solopreneurs and agencies'],
  },
  {
    id: 'ai-freelancer-blueprint',
    title: 'AI Freelancer Blueprint',
    subtitle: 'Land High-Paying Clients Using AI Skills',
    duration: '5.5 hrs', lessons: 30, level: 'Beginner', tag: 'Popular', price: 999,
    description: 'Package AI skills into freelance services, price them confidently, and land ₹50K–₹2L/month clients on Upwork, Fiverr, and LinkedIn.',
    specs: ['30 step-by-step lessons', 'Service packaging & pricing guide', 'Proposal and pitch templates', 'Niche selection framework', 'Client onboarding automation with AI', 'Income tracker and goal planner'],
    benefits: ['Start earning within 30 days of completing', 'Position yourself as an AI specialist', 'Charge premium rates for AI-powered services', 'Build a repeatable client acquisition system', 'Bonus: cold outreach scripts that convert'],
  },
  {
    id: 'ai-ads-accelerator',
    title: 'AI Ads Accelerator',
    subtitle: 'Run Profitable Ads Using AI Creative & Copy',
    duration: '6.5 hrs', lessons: 36, level: 'Intermediate – Advanced', tag: 'Advanced', price: 999,
    description: 'Master AI-powered ad creation, audience targeting, and performance analysis for Meta and Google to get more sales with less spend.',
    specs: ['36 lessons + monthly live Q&A', 'AI ad copy frameworks (AIDA, PAS)', 'Midjourney ad creative workflows', 'Meta Advantage+ AI campaign setup', 'Google Performance Max deep-dive', 'ROAS tracking dashboard template'],
    benefits: ['Reduce cost-per-click by up to 40%', 'Create ad creatives 10× faster', 'Understand AI bidding strategies fully', 'Scale winning campaigns systematically', 'Live Q&A sessions for real campaign help'],
  },
]

/* ─── Service Pack type ───────────────────────────────────────── */
export interface Pack {
  id: string
  category: string
  name: string
  price: number
  tag?: string
  description: string
  includes: string[]
  idealFor: string
}

/* ─── Social Media Management ────────────────────────────────── */
export const SOCIAL_PACKS: Pack[] = [
  {
    id: 'smm-starter',
    category: 'Social Media Management',
    name: 'Starter Pack',
    price: 4999,
    description: 'Perfect entry point for new brands ready to show up consistently on social media.',
    includes: ['2 platforms managed (IG + FB)', '12 posts/month (static + reels)', 'Basic caption copywriting', 'Monthly performance report', 'Content calendar shared weekly'],
    idealFor: 'Startups, solo entrepreneurs',
  },
  {
    id: 'smm-growth',
    category: 'Social Media Management',
    name: 'Growth Pack',
    price: 9999,
    tag: 'Popular',
    description: 'Scale your social presence with consistent content, strategy, and audience engagement.',
    includes: ['3 platforms managed (IG + FB + LinkedIn)', '20 posts/month + 4 stories/week', 'Full caption & hashtag strategy', 'Community management (comments/DMs)', 'Bi-weekly strategy calls', 'Detailed monthly analytics'],
    idealFor: 'Growing SMBs, coaches, creators',
  },
  {
    id: 'smm-pro',
    category: 'Social Media Management',
    name: 'Pro Pack',
    price: 14999,
    tag: 'Bestseller',
    description: 'Full-service social media domination — content, ads coordination, and reputation management.',
    includes: ['4 platforms managed', '30 posts/month + daily stories', 'Reels scripting & editing (4/month)', 'Ad creative coordination', 'Influencer outreach (2/month)', 'Weekly strategy calls', 'Priority support'],
    idealFor: 'Established brands, e-commerce',
  },
  {
    id: 'smm-elite',
    category: 'Social Media Management',
    name: 'Elite Pack',
    price: 24999,
    tag: 'Premium',
    description: 'Agency-grade social management with a dedicated strategist, paid media, and full brand governance.',
    includes: ['All platforms managed', '50+ posts/month', 'Full reel production (8/month)', 'Paid social campaigns managed', 'Monthly brand audit & reporting', 'Dedicated account manager', '24/7 support & crisis management'],
    idealFor: 'Large brands, enterprise teams',
  },
]

/* ─── Graphic Design ─────────────────────────────────────────── */
export const DESIGN_PACKS: Pack[] = [
  {
    id: 'design-basic',
    category: 'Graphic Design',
    name: 'Brand Basics',
    price: 4999,
    description: 'Get your brand identity off the ground with essential design assets delivered fast.',
    includes: ['Logo design (3 concepts)', 'Brand colour palette', 'Typography selection', 'Business card design', '2 social media post templates', 'Source files included'],
    idealFor: 'New businesses, side projects',
  },
  {
    id: 'design-social',
    category: 'Graphic Design',
    name: 'Social Kit',
    price: 6999,
    tag: 'Popular',
    description: 'A complete set of branded social media templates built for your aesthetic and ready to use.',
    includes: ['10 editable post templates (Canva/Figma)', '5 story templates', 'Highlight cover icons (12 set)', 'Banner design (FB/LinkedIn/YouTube)', 'Feed grid planning layout', 'Brand guideline mini-doc'],
    idealFor: 'Content creators, small brands',
  },
  {
    id: 'design-full',
    category: 'Graphic Design',
    name: 'Full Brand Package',
    price: 9999,
    tag: 'Best Value',
    description: 'Everything you need to look professional across digital and print — one complete brand system.',
    includes: ['Full logo suite (primary + variations)', 'Brand style guide (20+ pages)', '20 social media templates', 'Pitch deck design (10 slides)', 'Email signature design', 'Print-ready business stationery', 'Unlimited revisions (14 days)'],
    idealFor: 'Established brands, funded startups',
  },
]

/* ─── AI Tools & Automations ─────────────────────────────────── */
export const AI_TOOL_PACKS: Pack[] = [
  {
    id: 'ai-tools-starter',
    category: 'AI Tools & Automations',
    name: 'Starter Automation',
    price: 10000,
    description: 'Automate one key business workflow with a custom-built AI tool — fast, practical, and ready to deploy.',
    includes: ['1 custom AI workflow built', 'ChatGPT / Gemini API integration', 'Tool documentation + walkthrough', '30-day post-delivery support', 'Basic n8n or Zapier setup'],
    idealFor: 'Solopreneurs, freelancers',
  },
  {
    id: 'ai-tools-business',
    category: 'AI Tools & Automations',
    name: 'Business Suite',
    price: 25000,
    tag: 'Popular',
    description: 'A suite of AI automations covering lead gen, customer service, content, and internal ops.',
    includes: ['3 custom AI workflows', 'CRM + AI integration (HubSpot / Notion)', 'AI chatbot for website / WhatsApp', 'Lead nurturing automation', 'Auto content repurposing pipeline', '60-day support'],
    idealFor: 'SMBs, agencies, SaaS teams',
  },
  {
    id: 'ai-tools-enterprise',
    category: 'AI Tools & Automations',
    name: 'Enterprise AI Stack',
    price: 50000,
    tag: 'Premium',
    description: 'End-to-end AI transformation — custom tools, trained models, and full team onboarding.',
    includes: ['Unlimited AI workflows', 'Custom fine-tuned LLM (if applicable)', 'Full business process audit', 'AI dashboard & reporting system', 'Team training & onboarding (2 sessions)', 'Dedicated AI strategist', '90-day priority support'],
    idealFor: 'Enterprises, large agencies',
  },
]

/* ─── Website Design ─────────────────────────────────────────── */
export const WEB_PACKS: Pack[] = [
  {
    id: 'web-landing',
    category: 'Website Design',
    name: 'Landing Page',
    price: 2999,
    description: 'A high-converting single-page website designed to capture leads and make your brand shine.',
    includes: ['1-page responsive website', 'Mobile-first design', 'Lead capture form + WhatsApp CTA', 'Basic SEO setup', 'Delivered in 5 days', '1 round of revisions'],
    idealFor: 'Product launches, campaigns',
  },
  {
    id: 'web-business',
    category: 'Website Design',
    name: 'Business Website',
    price: 5999,
    tag: 'Popular',
    description: 'A complete 5-page business website with CMS, contact forms, and Google Analytics.',
    includes: ['Up to 5 pages (Home, About, Services, Blog, Contact)', 'CMS integration (Webflow / WordPress)', 'Contact form + booking integration', 'Google Analytics + Search Console', 'SSL + performance optimised', '2 weeks post-launch support'],
    idealFor: 'SMBs, service providers',
  },
  {
    id: 'web-ecommerce',
    category: 'Website Design',
    name: 'E-commerce Store',
    price: 9999,
    tag: 'Best Value',
    description: 'A fully functional online store with product listings, payments, and order management.',
    includes: ['Full e-commerce website (Shopify / WooCommerce)', 'Up to 20 products set up', 'Payment gateway integration (Razorpay / Stripe)', 'Abandoned cart + email flows', 'Mobile-optimised product pages', 'Admin training session', '30-day support'],
    idealFor: 'Retailers, D2C brands',
  },
]
