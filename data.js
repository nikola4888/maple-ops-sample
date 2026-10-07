/*
  data.js — every link, date and figure on the page lives here.
  Rule: no number may be added unless it is quoted from a public Maple page,
  with that page's URL and the date it was checked recorded in SOURCES.
*/

window.PLAN = {
  checked: "7 October 2026",
  author: { name: "Nikola", url: "https://x.com/nikola4888" },

  sources: {
    home:      { title: "maple.finance (home)", url: "https://maple.finance/" },
    docs:      { title: "Maple Docs: Welcome", url: "https://docs.maple.finance/" },
    docsIndex: { title: "Maple Docs: full page index", url: "https://docs.maple.finance/llms.txt" },
    lenderFaq: { title: "Docs: syrupUSD lender FAQ", url: "https://docs.maple.finance/syrupusdc-usdt-usdg-for-lenders/faq" },
    juris:     { title: "Docs: syrupUSD available jurisdictions", url: "https://docs.maple.finance/legal/syrupusdc-and-syrupusdt-available-jurisdictions" },
    contact:   { title: "Docs: Get in touch", url: "https://docs.maple.finance/contact-us/get-in-touch" },
    monthly:   { title: "Docs: Monthly Updates (URL ends /withdrawal-process)", url: "https://docs.maple.finance/syrupusdc-usdt-usdg-for-lenders/withdrawal-process" },
    wallets:   { title: "Docs: New Wallets", url: "https://docs.maple.finance/syrupusdc-usdt-usdg-for-lenders/new-wallets" },
    syrupFaq:  { title: "Docs: SYRUP FAQs", url: "https://docs.maple.finance/maple-for-token-holders/mpl-token/faqs" },
    instGuide: { title: "Docs: Institutional Secured Lending lender guide", url: "https://docs.maple.finance/maple-institutional-for-lenders/introduction" },
    insights:  { title: "Maple Insights (blog index)", url: "https://maple.finance/insights" },
    ccip:      { title: "Insights: syrupUSD assets are upgrading to Chainlink CCIP 2.0 (28 Sep 2026)", url: "https://maple.finance/insights/syrupusd-assets-are-upgrading-to-chainlink-ccip-2-0" },
    brand:     { title: "Insights: Why our brand is evolving (30 Sep 2026)", url: "https://maple.finance/insights/maple-brand-evolution" },
    irace:     { title: "Insights: Maple selects IRACE Digital Bank (6 Oct 2026)", url: "https://maple.finance/insights/maple-finance-selects-irace-digital-bank-for-institutional-banking-and-fiat-settlement" },
    memoSep:   { title: "Insights: Maple Memo, September 2026", url: "https://maple.finance/insights/maple-memo-september-2026" },
    q2:        { title: "Insights: Q2 2026 Ecosystem Update", url: "https://maple.finance/insights/maple-q2-2026-ecosystem-update" },
    syrupHold: { title: "Insights: What SYRUP Holders Actually Hold", url: "https://maple.finance/insights/what-syrup-holders-actually-hold" },
    crosschain:{ title: "Docs: syrupUSD crosschain asset integration", url: "https://docs.maple.finance/integrate/crosschain/syrupusd-crosschain" },
    integrate: { title: "Docs: Integrate, get started", url: "https://docs.maple.finance/integrate/get-started" },
    yieldDisc: { title: "Docs: Collateral & Yield Disclosure", url: "https://docs.maple.finance/integrate/technical-resources/collateral-and-yield-disclosure" },
    withdraw:  { title: "Docs: Withdrawals (URL ends /risk)", url: "https://docs.maple.finance/syrupusdc-usdt-usdg-for-lenders/risk" },
    transp:    { title: "Maple Transparency page", url: "https://maple.finance/transparency" },
    tg:        { title: "Telegram: t.me/maplefinance", url: "https://t.me/maplefinance" },
    x:         { title: "X: @maplefinance", url: "https://x.com/maplefinance" },
    linkedin:  { title: "LinkedIn: Maple Finance (listed in maple.finance footer)", url: "https://www.linkedin.com/company/maplefinance" },
    forum:     { title: "Maple Governance Forum", url: "https://community.maple.finance/latest" },
    gov:       { title: "Docs: Governance and Voting", url: "https://docs.maple.finance/maple-for-token-holders/governance-and-voting" }
  },

  audiences: [
    {
      name: "Institutional lenders",
      what: "Maple Institutional, Secured Lending. The site describes it as permissioned lending for sophisticated allocators.",
      room: "Not a public chat audience. The contact form on maple.finance or Intercom inside the web app. Public chat only points them there.",
      docs: "Institutional Secured Lending lender guide, then the KYC page.",
      src: ["home", "instGuide"]
    },
    {
      name: "Syrup lenders",
      what: "People holding or considering syrupUSDC, syrupUSDT or syrupUSDG.",
      room: "Telegram for general questions. Intercom in the web app for anything about their own wallet or transaction.",
      docs: "Lender FAQ, Withdrawals, Available Jurisdictions.",
      src: ["lenderFaq", "contact", "juris"]
    },
    {
      name: "SYRUP holders",
      what: "Token holders: staking, governance votes, buybacks, Drips, and people still holding old MPL.",
      room: "Telegram, plus the monthly Memo, monthly AMA and quarterly Ecosystem Update call Maple has announced. Proposal discussion has its own room, the governance forum, separate from Telegram; the vote itself happens on Snapshot.",
      docs: "SYRUP FAQs, SYRUP Tokenomics, Governance and Voting.",
      src: ["syrupFaq", "syrupHold", "q2", "forum", "gov"]
    },
    {
      name: "Integrators",
      what: "Wallets, fintechs, exchanges and protocols that want syrupUSD assets inside their own product.",
      room: "partnerships@maple.finance and the integration docs. Public chat is the wrong room for terms or timelines.",
      docs: "Integrate: Get Started, Crosschain, New Wallets.",
      src: ["contact", "integrate", "wallets"]
    }
  ],

  sendToDocs: [
    "Anyone asking whether they can use syrupUSD assets from their country. The jurisdiction list answers it; a moderator's opinion does not.",
    "Anyone asking for a contract or token address. Addresses are copied from docs only, never typed from memory in chat.",
    "Developers asking how deposits, permissions or bridging work. The integration docs are the answer of record.",
    "End users of apps built on Maple. Maple's own brand post says most people will meet Maple inside an app they already use. Their account questions belong to that app's support."
  ],

  gaps: [
    {
      title: "One stack, several names",
      body: "The site sells syrupUSDC, syrupUSDT, syrupUSDG and \u201cMaple Institutional, Secured Lending\u201d. The lender guide still names \u201cBlue Chip Secured\u201d and \u201cHigh Yield Secured\u201d pools. The New Wallets FAQ says Syrup is the protocol and Maple is the lending entities, while SYRUP is also the token. The 30 Sep brand post then introduces Maple Earn, Maple Credit and Maple Embed, rolling out through year-end. A newcomer has no single page that maps old names to new ones.",
      src: ["home", "instGuide", "wallets", "brand"]
    },
    {
      title: "\u201cNon-US\u201d is shorthand for a longer list",
      body: "The homepage pitches syrupUSD yield as open to global investors outside the US. The Available Jurisdictions page lists many more restricted places, Australia among them. The SYRUP FAQ adds that staking is available in the US and Australia while lending yield is not. That is three true statements that are easy to merge into one wrong one.",
      src: ["home", "juris", "syrupFaq"]
    },
    {
      title: "Withdrawal links point to the wrong page",
      body: "In the docs, the page titled \u201cMonthly Updates\u201d lives at a URL ending in /withdrawal-process and links out to a DocSend dataroom. The page titled \u201cWithdrawals\u201d lives at a URL ending in /risk. Anyone who shares a link by reading its URL sends people to the wrong place. Monthly updates also exist in two places: that dataroom and the Maple Memo on the blog.",
      src: ["monthly", "docsIndex", "memoSep"]
    },
    {
      title: "The lender FAQ refers to things that aren't there",
      body: "The FAQ says current APY and available liquidity are \u201cdisplayed above\u201d. On the docs page, nothing is above. The sentence was written for the app. Read in the docs, it sends people looking for numbers they won't find.",
      src: ["lenderFaq"]
    },
    {
      title: "Withdrawal speed has a long tail",
      body: "The FAQ says withdrawals are normally instant, can take around 24 hours in rare cases, and can take up to 30 days at most. People remember \u201cinstant\u201d. The day it isn't instant is the day chat gets loud.",
      src: ["lenderFaq"]
    },
    {
      title: "One page, two timelines",
      body: "New Wallets gives wallet whitelisting as 3\u20135 business days in its steps and 5\u201310 days in its own FAQ. The page also covers syrupUSDC and syrupUSDT only, with no mention of syrupUSDG.",
      src: ["wallets"]
    },
    {
      title: "A live upgrade that looks like money moving",
      body: "From 29 September, syrupUSD assets move to Chainlink CCIP 2.0 chain by chain through Q4. Maple says holders need to do nothing, but liquidity will visibly move onchain and new pool addresses will appear. That is exactly the window when fake \u201cmigrate your tokens\u201d messages get traction.",
      src: ["ccip"]
    },
    {
      title: "Many doors, no sign over them",
      body: "Get in touch lists Intercom inside the web app, partnerships email, the community Telegram and a second Telegram invite for syrupUSDC opportunities. The site adds a contact form. Nothing says which question goes to which door.",
      src: ["contact", "home"]
    },
    {
      title: "The forum is easier to hear about than to find",
      body: "Maple's own writing tells holders that proposals get a forum discussion before the vote, as with MIP-021. But the pages a newcomer actually opens don't link to the forum: not the maple.finance footer, not the links on the docs welcome page, not Get in touch. Even the docs Governance and Voting page sends voters to Snapshot without mentioning where proposals are discussed. You have to already know the address.",
      src: ["syrupHold", "home", "docs", "contact", "gov", "forum"]
    },
    {
      title: "Leftovers from earlier eras",
      body: "The SYRUP FAQ says Drips claims start \u201c15 December\u201d with no year and links to an older syrup.gitbook.io address. It also states that MPL to SYRUP conversion closed on 30 April 2025, so late MPL holders will keep arriving with questions that have only one answer.",
      src: ["syrupFaq"]
    }
  ],

  onboarding: [
    {
      stage: "First visit",
      job: "Get the person to the right door. Ask which of the four they are, then hand over one link.",
      never: "That a product is available to them. Eligibility depends on the jurisdiction list and, for institutions, KYC."
    },
    {
      stage: "First week",
      job: "Answer the two questions everyone has before depositing: where the yield comes from, and how to get money out. Both answers are links to the lender FAQ.",
      never: "A rate or a withdrawal time. The docs describe normal behaviour, not a guarantee."
    },
    {
      stage: "First useful action",
      job: "One self-serve action that builds trust: open the Transparency page, add the SYRUP address from docs to a wallet, or subscribe to the monthly Memo.",
      never: "Token price, buyback size, or when the next chain, listing or feature goes live."
    }
  ],

  channels: [
    { surface: "maple.finance", listed: "Itself", job: "Front door. Route people by product, not by question.", src: "home" },
    { surface: "docs.maple.finance", listed: "Site footer", job: "The answer of record. Chat links here instead of rephrasing it.", src: "docs" },
    { surface: "X, @maplefinance", listed: "Site footer, docs", job: "Announcements. Replies point to the post or the doc, never to DMs.", src: "x" },
    { surface: "Telegram, t.me/maplefinance", listed: "Site footer, docs, Get in touch", job: "Community conversation and first-line routing.", src: "tg" },
    { surface: "Telegram invite: syrupUSDC opportunities", listed: "Get in touch", job: null, src: "contact" },
    { surface: "Intercom chat in the web app", listed: "Get in touch", job: "Anything about a person's own account or transaction. Maple's docs say a team member usually replies within minutes.", src: "contact" },
    { surface: "partnerships@maple.finance", listed: "Get in touch", job: "Integrators and partners.", src: "contact" },
    { surface: "Contact form on maple.finance", listed: "Site", job: "Borrowers and institutions.", src: "home" },
    { surface: "Insights blog and Maple Memo", listed: "Site nav", job: "Long-form updates. The Memo is sent monthly by email, Telegram and blog.", src: "syrupHold" },
    { surface: "Transparency page", listed: "Site nav", job: "Self-serve verification of buybacks and financials.", src: "q2" },
    { surface: "YouTube", listed: "Site footer, docs", job: "Recordings of calls, such as the Q2 Ecosystem Update.", src: "q2" },
    { surface: "LinkedIn", listed: "maple.finance footer", job: "Institutional and company announcements only. Not a support room: lender, eligibility and withdrawal questions are not answered there.", src: ["linkedin", "home"] },
    { surface: "Governance forum, community.maple.finance", listed: "Referenced in Maple's posts; not linked from the footer or docs pages I opened", job: "Proposal discussion only. Voting happens on Snapshot, per the docs. Yield, eligibility and withdrawal questions still go to docs or Intercom.", src: ["forum", "gov", "syrupHold"] },
    { surface: "Discord", listed: "Not listed on the maple.finance footer, checked 7 October 2026", job: null, src: "home" }
  ],

  escalation: [
    {
      level: "Answer from docs",
      who: "Mod or community person, with a link every time",
      items: [
        "What syrupUSDC, syrupUSDT and syrupUSDG are",
        "Where the yield comes from, as the docs describe it",
        "How withdrawals work and the documented maximum wait",
        "Which jurisdictions are restricted",
        "Token and contract addresses, copied from docs",
        "MPL conversion is closed",
        "The CCIP 2.0 upgrade needs no holder action",
        "How to open Intercom"
      ]
    },
    {
      level: "Raise it",
      who: "Handed to the team through whatever channel they name",
      items: [
        "A specific stuck withdrawal or transaction (move to Intercom)",
        "Numbers that differ between app, docs and posts",
        "Impersonators, fake support DMs, fake migration links",
        "Contradictions inside docs, like the two whitelisting timelines",
        "An institution, borrower, integrator or journalist asking for terms or comment"
      ]
    },
    {
      level: "Never promised",
      who: "Not by mods, not by me, not in any tone",
      items: [
        "Yield or APY, now or later",
        "That loans are safe or credit risk is low",
        "That a person is eligible",
        "Timing of listings, new chains, native mint and redeem, or buybacks"
      ]
    }
  ],

  questions: [
    { q: "What are syrupUSDC, syrupUSDT and syrupUSDG?", a: "The lender FAQ answers this in its first entry.", src: ["lenderFaq"] },
    { q: "Where does the yield come from?", a: "The lender FAQ, then Collateral & Yield Disclosure for detail.", src: ["lenderFaq", "yieldDisc"] },
    { q: "How long does a withdrawal take?", a: "The lender FAQ has the normal case and the maximum. The Withdrawals page has the mechanics.", src: ["lenderFaq", "withdraw"] },
    { q: "Can I use this from my country?", a: "Available Jurisdictions is the only answer. I don't add an opinion.", src: ["juris"] },
    { q: "Is syrupUSDC backed by USDC, or connected to Circle?", a: "The lender FAQ has a section on exactly this.", src: ["lenderFaq"] },
    { q: "Do I need to do anything for the CCIP 2.0 upgrade?", a: "Maple's 28 September post. New pool addresses are published in the crosschain docs.", src: ["ccip", "crosschain"] },
    { q: "I still hold MPL. What now?", a: "The SYRUP FAQs, conversion section.", src: ["syrupFaq"] },
    { q: "Can I stake SYRUP from the US or Australia?", a: "The SYRUP FAQs, staking section.", src: ["syrupFaq"] },
    { q: "How do buybacks work now?", a: "\u201cWhat SYRUP Holders Actually Hold\u201d, then the Transparency page and the monthly Memo.", src: ["syrupHold", "transp"] },
    { q: "I want syrupUSD in my wallet or app.", a: "Integrate: Get Started for apps, New Wallets for wallet providers, partnerships email for anything else.", src: ["integrate", "wallets", "contact"] }
  ],

  rhythm: {
    post: [
      "A pinned \u201cwhere to ask what\u201d message in Telegram, refreshed weekly, built from the channel map above.",
      "A link to each Memo, AMA and call the day it lands, including the quarterly call Maple has announced for 13 October.",
      "A short pointer each time a chain finishes its CCIP 2.0 upgrade, linking to the crosschain docs where Maple says new pool addresses will appear.",
      "A standing scam notice while the upgrade runs: there is nothing to claim, migrate or approve.",
      "One answered question a week, posted with its doc link, chosen from what came up most."
    ],
    dont: [
      "Rates, APY screenshots or yield comparisons. The numbers in the site header changed between two of my page loads on the same day.",
      "Price talk, chart talk or anything about where SYRUP is going.",
      "Partnerships, chains or features before Maple announces them.",
      "\u201cSafe\u201d, \u201cguaranteed\u201d or \u201crisk-free\u201d, in any form.",
      "Engagement bait. Quiet weeks stay quiet."
    ],
    test: "Pin the routing message for two weeks. Before and after, count how many messages are some version of \u201cwhere do I ask about...\u201d. If the count drops, keep it. If it doesn't, the doors are the problem, not the sign."
  },

  watch: [
    { what: "The same question asked three or more times in a week", shows: "A findability gap in docs or announcements", notProve: "That the docs are wrong" },
    { what: "Threads unanswered after a day", shows: "A routing gap", notProve: "That the team is slow. The answer may have happened in Intercom." },
    { what: "Impersonation and fake-link reports", shows: "That the community is being targeted", notProve: "How many people were actually harmed" },
    { what: "Replies on X posts asking the same clarifying question", shows: "That announcement copy missed something", notProve: "What holders as a whole think" },
    { what: "Mismatches between site, docs and posts", shows: "Maintenance debt that will turn into support load", notProve: "That anything is wrong onchain" }
  ],

  // Starter table. Only posts I could open and date myself.
  // X could not be fetched (robots.txt). Paste X rows with a link only.
  posts: [
    { date: "6 Oct 2026", link: "irace", surface: "Insights blog", shows: "A new banking relationship for institutional cash management and fiat settlement. An institutional story, not a lender action.", action: "Ignore" },
    { date: "30 Sep 2026", link: "brand", surface: "Insights blog", shows: "New brand rolling out through year-end, with product names Maple Earn, Credit and Embed. Expect \u201cdid my token or product change?\u201d questions.", action: "Reply" },
    { date: "28 Sep 2026", link: "ccip", surface: "Insights blog", shows: "CCIP 2.0 upgrade through Q4. No holder action needed, but visible onchain movement.", action: "Docs" }
  ],
  postRowsTarget: 10
};
