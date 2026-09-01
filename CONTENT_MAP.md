# Comprehensive Content Inventory & Structural Map

This document provides a complete structured inventory of all copy, dataset items, forms, media assets, and institutional data used throughout the **NeuroDevelopment Foundation (NDF)** website, indexed by component, page, and UI location.

---

## Table of Contents
1. [Global Header & Navigation](#1-global-header--navigation)
2. [Homepage (`/`)](#2-homepage-)
   - [2.1. Hero Section](#21-hero-section)
   - [2.2. Mission, Vision & Team](#22-mission-vision--team)
   - [2.3. Core Clinical Services](#23-core-clinical-services)
   - [2.4. Research Fund & RFP Desk](#24-research-fund--rfp-desk)
   - [2.5. Publications & Knowledge Repository](#25-publications--knowledge-repository)
   - [2.6. CSR, Foundations & Philanthropy Hub](#26-csr-foundations--philanthropy-hub)
   - [2.7. Volunteer Teaser](#27-volunteer-teaser)
   - [2.8. Events, Symposia & Photo Gallery](#28-events-symposia--photo-gallery)
   - [2.9. Free Public Downloadable Resources](#29-free-public-downloadable-resources)
   - [2.10. Contact & Institutional Booking Desk](#210-contact--institutional-booking-desk)
3. [Crowdfunding Page (`/crowdfunding`)](#3-crowdfunding-page-crowdfunding)
4. [Volunteer Page (`/volunteer`)](#4-volunteer-page-volunteer)
5. [Global Footer](#5-global-footer)
6. [Master Media Asset Registry](#6-master-media-asset-registry)

---

## 1. Global Header & Navigation

* **File Location**: [`frontend/src/components/SiteHeader.jsx`](file:///c:/Projects/neuro-main/frontend/src/components/SiteHeader.jsx)
* **Appears On**: All pages (Sticky top header).

### Content & Copy:
* **Top Announcement Bar**:
  * *Badge Icon*: Megaphone
  * *Text*: "Annual Clinical Symposium 2026 registration is open — free and virtual."
  * *Action Link*: "Reserve a seat" (anchors to `/#events`)
* **Brand Logo & Wordmark**:
  * *Icon*: Activity pulse in teal badge
  * *Title*: **NeuroDevelopment Foundation**
* **Primary Navigation Menu**:
  1. `Services` ➔ `/#services`
  2. `Research Fund` ➔ `/#research-fund`
  3. `Publications` ➔ `/#publications`
  4. `CSR Partnerships` ➔ `/#csr`
  5. `Events & Highlights` ➔ `/#events`
  6. `Free Public Resources` ➔ `/#resources`
* **Header Action Buttons (CTAs)**:
  * Primary: "Partner with Us (CSR)" ➔ `/#csr`
  * Outline: "Book Mobile Unit" ➔ `/#contact`
  * Theme Toggle (Dark/Light Mode)
* **Mobile Drawer Navigation**:
  * Includes all 6 main links plus direct routes:
    * `Crowdfunding` ➔ `/crowdfunding`
    * `Volunteer` ➔ `/volunteer`

---

## 2. Homepage (`/`)

* **File Location**: [`frontend/src/pages/HomePage.jsx`](file:///c:/Projects/neuro-main/frontend/src/pages/HomePage.jsx)

---

### 2.1. Hero Section
* **File Location**: [`frontend/src/components/Hero.jsx`](file:///c:/Projects/neuro-main/frontend/src/components/Hero.jsx)
* **Overline**: `CARE · RESEARCH · EQUITY`
* **Headline**: "Transforming Neurodevelopment Through **Care, Research & Equity.**"
* **Subhead / Body**:
  > *"We run van-based therapy clinics that reach rural doorsteps, screen brain development across the maternal 1,000 days, publish open scientific toolkits any clinician can use for free, and fund independent research grants on low-resource neurodevelopmental care."*
* **Call-to-Action Buttons**:
  * "I'm a parent or caregiver" (Heart icon) ➔ `/#services`
  * "I'm a funder or researcher" (Flask icon) ➔ `/#research-fund`
* **Key Impact Metric Counters (`dl`)**:
  * `14,820` — children screened
  * `96` — villages reached
  * `4,380` — caregivers trained
  * `87%` — spend on programmes
* **Image & Caption**:
  * *Image*: Mother and young boy building with blocks in therapy session (`photo-1758598737547-666bce663667`)
  * *Caption*: *"Every field session ends with a caregiver coaching routine the family can repeat at home."*

---

### 2.2. Mission, Vision & Team
* **File Location**: [`frontend/src/components/MissionTeam.jsx`](file:///c:/Projects/neuro-main/frontend/src/components/MissionTeam.jsx)
* **Overline**: `WHO WE ARE`
* **Headline**: "A clinician-led foundation built for partnership"
* **Lead Text**: *"We work alongside state health missions, district administrations, NGOs and corporate funders. Whichever door you come through, the same clinical standard and the same open reporting applies."*

#### Organizational Pillars:
1. **Our Mission**: *"Make early neurodevelopmental identification and therapy reachable for every child, regardless of the district they are born in or what their family earns."*
2. **Our Vision**: *"A country where a developmental delay is caught in months rather than years, and where the science behind that care is open to every clinician and teacher."*
3. **How We Work**: *"Clinician-led, evidence-first, and openly audited. Protocols are published, outcomes are measured, and every rupee is reported against programme delivery."*

#### Leadership & Team Roster:
* **Dr. Ananya Raghunathan** (*President & Founding Trustee*)
  * *Credentials*: MD Paediatrics, Fellowship in Developmental Behavioural Paediatrics
  * *Bio*: 22 years in paediatric neurodevelopment across public hospitals and field programmes. Founded NDF after a decade of district outreach camps showed diagnosis, not willingness, was the bottleneck.
  * *Focus*: Clinical governance, research direction
* **Dr. Kavita Iyer** (*Director, Research Fund*)
  * *Credentials*: PhD Speech & Hearing Sciences
  * *Bio*: Leads independent research fund and AAC technology portfolio, focusing on translational tools outside laboratory conditions.
  * *Focus*: Grants, AAC technology, trials
* **Rohan Bansal** (*Head, Institutional Partnerships & CSR*)
  * *Credentials*: MBA, ex-development finance
  * *Bio*: Structures multi-year corporate and government alliances, and runs employee volunteering programme.
  * *Focus*: CSR, ESG reporting, volunteering
* **Meera Joshi** (*Lead Occupational Therapist, Mobile Fleet*)
  * *Credentials*: MOT, Sensory Integration certified
  * *Bio*: Designed the van-based therapy protocol used across all field units and trains field therapists and caregiver coaches.
  * *Focus*: Field therapy, caregiver coaching

---

### 2.3. Core Clinical Services
* **File Location**: [`frontend/src/components/Services.jsx`](file:///c:/Projects/neuro-main/frontend/src/components/Services.jsx)
* **Overline**: `CORE SERVICES`
* **Headline**: "Field clinics that go where the children are"
* **Lead Text**: *"Four programmes, one continuum of care. Each card carries a plain-language summary first, and the clinical detail underneath."*

#### 4 Service Offerings:
1. **01 — Mobile Therapy Fleet** (Large Card)
   * *Plain Language*: "Therapy vans that come to your village instead of you travelling to a city hospital."
   * *Clinical Body*: "Fully equipped vans deliver occupational, speech and behavioural therapy at rural doorsteps on a fixed fortnightly route, so families do not lose a day's wage to reach care."
   * *Badges*: Occupational therapy · Speech & language · Behavioural support · Fixed fortnightly routes
   * *Image*: Medical response vehicle (`photo-1773140278162-fd7df1043f0c`)
2. **02 — Maternal 1,000 Days Early Screening Protocol**
   * *Plain Language*: "Brain-development checks from pregnancy to the child's second birthday."
   * *Clinical Body*: "Prenatal nutrition counselling paired with structured infant milestone surveillance at existing antenatal and immunisation visits — no new clinic required."
   * *Badges*: Prenatal nutrition · Milestone surveillance · Red-flag referral pathway
3. **03 — Community Experience & Training Centers**
   * *Plain Language*: "Places where teachers and parents learn what to actually do day to day."
   * *Clinical Body*: "District centres run educator workshops and caregiver empowerment programmes, turning clinical guidance into repeatable home and classroom routines."
   * *Badges*: Educator workshops · Caregiver coaching · Peer parent circles
4. **04 — Holistic Pediatric Rehabilitation** (Full-width Card)
   * *Plain Language*: "Longer-term support: calming practices, helpful devices and thinking-skill work."
   * *Clinical Body*: "Mindfulness-based regulation, assistive and augmentative technology fitting, and structured cognitive enrichment delivered as a single coordinated plan per child."
   * *Badges*: Mindfulness & regulation · Assistive technology · Cognitive enrichment · Coordinated care plan
   * *Image*: Child hands working with therapy putty (`pexels-photo-30483024`)

---

### 2.4. Research Fund & RFP Desk
* **File Location**: [`frontend/src/components/ResearchFund.jsx`](file:///c:/Projects/neuro-main/frontend/src/components/ResearchFund.jsx)
* **Overline**: `SCIENTIFIC PILLAR`
* **Headline**: "The NeuroDevelopment Research Fund"
* **Lead Text**: *"An independent, ring-fenced fund financing clinical trials, diagnostic AI and translational neurodevelopment research. Decisions are made by an external scientific review panel, and every funded output must be released open-access."*

#### Priority Grant Focus Areas:
* **Low-resource diagnostics**: Screening and diagnostic tools that work without a specialist, a laboratory or reliable electricity — including on-device AI triage.
* **AAC speech technology**: Affordable augmentative and alternative communication for non-speaking children, in Indian languages, on hardware families already own.
* **Maternal nutrition studies**: Trials and cohort work linking maternal micronutrient status across the 1,000 days to measurable infant neurodevelopmental outcomes.

#### Open Call Specifications:
* **Grant Ceiling**: ₹40,00,000 over 24 months
* **Eligibility**: Universities, hospitals, registered non-profits
* **Review Cycle**: Rolling, panel meets quarterly
* **Committed to Date**: ₹1,25,00,000 across 9 projects

#### Grant Proposal Modal Form Fields:
* `Principal Investigator` (Text Input)
* `Email` (Email Input)
* `University / Organisation` (Text Input)
* `Priority Area` (Dropdown: *Low-resource diagnostics, AAC speech technology, Maternal nutrition studies, Other*)
* `Abstract` (Textarea, min. 20 chars)
* `Indicative Budget (INR)` (Text Input, e.g. `18,00,000`)

---

### 2.5. Publications & Knowledge Repository
* **File Location**: [`frontend/src/components/Publications.jsx`](file:///c:/Projects/neuro-main/frontend/src/components/Publications.jsx)
* **Overline**: `KNOWLEDGE REPOSITORY`
* **Headline**: "Publications, briefs and toolkits — all open-access"
* **Lead Text**: *"Everything we learn is published free of paywalls, with a plain-language summary so caregivers and teachers can use it too."*
* **Filter Tabs**: `All`, `Clinical Papers`, `Policy Briefs`, `Educator Toolkits` + Live Keyword Search

#### Publications Catalog:
1. **Feasibility of Van-Based Autism Screening in Low-Resource Rural Districts** (2025)
   * *Authors*: Dr. Ananya Raghunathan, Dr. S. Mehrotra | *Category*: Clinical Papers | *Size*: 2.4 MB
   * *Plain Language*: "We drove clinics to villages and found the screening worked just as well as at a big hospital."
2. **Policy Brief: Integrating Neurodevelopment Into the First 1,000 Days Maternal Package** (2025)
   * *Authors*: NDF Policy Unit | *Category*: Policy Briefs | *Size*: 860 KB
   * *Plain Language*: "Health workers already meet mothers many times. We show how to add brain-development checks to those visits."
3. **A Low-Cost Tablet AAC System for Non-Speaking Children: Randomised Pilot** (2024)
   * *Authors*: Dr. Kavita Iyer, R. Bansal | *Category*: Clinical Papers | *Size*: 3.1 MB
   * *Plain Language*: "Cheap tablets with picture boards helped children who cannot speak communicate more."
4. **Educator Toolkit: Sensory-Aware Classroom Design for Government Schools** (2025)
   * *Authors*: NDF Training Division | *Category*: Educator Toolkits | *Size*: 5.8 MB
   * *Plain Language*: "Simple, cheap changes teachers can make so children who get overwhelmed can learn better."
5. **Maternal Iron-Folate Adherence and 24-Month Cognitive Outcomes** (2024)
   * *Authors*: Dr. P. Venkatesh, Dr. Ananya Raghunathan | *Category*: Clinical Papers | *Size*: 1.9 MB
   * *Plain Language*: "Mothers who took their iron tablets regularly had toddlers who scored higher on thinking tests."
6. **Policy Brief: An ESG Measurement Framework for Neurodevelopmental CSR Programmes** (2026)
   * *Authors*: NDF Policy Unit, Institutional Partnerships | *Category*: Policy Briefs | *Size*: 1.2 MB
   * *Plain Language*: "A clear scorecard so companies can prove their donations actually helped children."
7. **Educator Toolkit: Caregiver Coaching Manual for Home Sensory Routines** (2025)
   * *Authors*: NDF Training Division | *Category*: Educator Toolkits | *Size*: 4.3 MB
   * *Plain Language*: "Step-by-step activities parents can do at home to help their child stay calm and focused."

---

### 2.6. CSR, Foundations & Philanthropy Hub
* **File Location**: [`frontend/src/components/CsrHub.jsx`](file:///c:/Projects/neuro-main/frontend/src/components/CsrHub.jsx)
* **Overline**: `INSTITUTIONAL FUNDING`
* **Headline**: "CSR, foundations & philanthropy"
* **Lead Text**: *"Built for CSR heads, grant-making foundations, government partners and philanthropists who need auditable outcomes, statutory compliance and a clear line from rupee to child."*

#### 4 Compliance & Governance Badges:
* `CSR-1 compliant`: 100% statutory CSR-1 registration with the MCA
* `80G & 12A`: Tax exemption certificates issued for every contribution
* `Quarterly ESG audits`: Independently audited ESG and impact reports each quarter
* `87% programme spend`: Administrative overhead capped at 13% by trust deed

#### Partnership Deliverables:
* Named district/route mapping for CSR geography.
* Baseline, midline, and endline child screening indicators.
* Quarterly ESG pack aligned to BRSR reporting.
* Supervised employee volunteering days at camps.
* Co-branded launch, press releases, and leadership site visits.
* *Image*: Volunteers distributing supplies at community camp (`pexels-photo-6646916`)

#### CSR Proposal Request Form Fields:
* `Your Name` (Text Input)
* `Work Email` (Email Input)
* `Company / Foundation` (Text Input)
* `Area of Interest` (Dropdown: *Fund a mobile therapy van, Adopt a district screening programme, Sponsor the research fund, Employee volunteering programme, Multi-year strategic alliance*)
* `Indicative Budget Band` (Dropdown: *Under ₹10 lakh, ₹10–50 lakh, ₹50 lakh–2 crore, Above ₹2 crore, To be discussed*)
* `Outcome Message` (Textarea, min. 10 chars)

---

### 2.7. Volunteer Teaser
* **File Location**: [`frontend/src/components/VolunteerTeaser.jsx`](file:///c:/Projects/neuro-main/frontend/src/components/VolunteerTeaser.jsx)
* **Overline**: `GET INVOLVED`
* **Headline**: "Volunteer, or send your team into the field"
* **Lead Text**: *"Governments, NGOs, companies and individuals all plug into the same programme. We supervise every placement clinically, so volunteers add capacity without adding risk to children."*
* **3 Volunteer Streams**:
  1. *Corporate employee volunteering*: Supervised district days, play stations, camp registration.
  2. *Teach, train or mentor*: Clinicians and educators training field staff and caregiver circles.
  3. *Individual community volunteers*: Translation, transport coordination, logistics, photography, open-source AAC.
* **CTAs**:
  * "Sign up to volunteer" ➔ `/volunteer`
  * "Sponsor a child's therapy" ➔ `/crowdfunding`

---

### 2.8. Events, Symposia & Photo Gallery
* **File Location**: [`frontend/src/components/Events.jsx`](file:///c:/Projects/neuro-main/frontend/src/components/Events.jsx)
* **Overline**: `EVENTS & PRESS`
* **Headline**: "Milestones, media releases and community launches"

#### Events & Milestone Records:
1. **Inaugural Launch & Blessings, Haridwar** (14 March 2025)
   * *Location*: Har Ki Pauri, Haridwar, Uttarakhand | *Kind*: Milestone | *Status*: Archived
   * *Summary*: Foundation inaugurated on the banks of Ganga; commissioning of the first mobile therapy van.
   * *Image*: Ganga launch camp (`pexels-photo-6646916`)
2. **Annual Clinical Symposium 2026** (18 September 2026)
   * *Location*: Virtual (Global) | *Kind*: Symposium | *Status*: Upcoming
   * *Summary*: 1-day virtual symposium on low-resource neurodevelopmental diagnostics. Open-access recordings.
   * *Image*: Virtual symposium banner (`photo-1758691463607-c1220b77aaaa`)
   * *CTA*: Launches Virtual Registration Modal (`Name`, `Email`, `Role`).
3. **Press Release: Second Mobile Therapy Van Commissioned** (22 January 2026)
   * *Location*: Dehradun, Uttarakhand | *Kind*: Press Release | *Status*: Archived
   * *Summary*: Extends OT, speech, and behavioral therapy to 18 additional gram panchayats under 3-year CSR alliance.
   * *Image*: Second van (`photo-1773140278162-fd7df1043f0c`)
4. **District Caregiver Workshops — Highlight Gallery** (06 April 2026)
   * *Location*: 6 districts, Uttarakhand & Western UP | *Kind*: Community | *Status*: Ongoing
   * *Summary*: Rolling weekend workshops for sensory regulation, feeding, and communication routines.
   * *Image*: Caregiver workshop (`photo-1708687045030-26702e62fc65`)

#### Interactive Gallery Items & Captions:
* Photo 1: *"A mother practises a joint-attention block routine with her son, Roorkee workshop."* (`photo-1758598737547-666bce663667`)
* Photo 2: *"Positive reinforcement drill during a behavioural therapy demonstration."* (`photo-1708687045030-26702e62fc65`)
* Photo 3: *"Hand-strengthening putty work, an at-home exercise taught to every caregiver."* (`pexels-photo-30483024`)
* Photo 4: *"Corporate volunteers assisting registration at the Haridwar district camp."* (`pexels-photo-6646916`)

---

### 2.9. Free Public Downloadable Resources
* **File Location**: [`frontend/src/components/Resources.jsx`](file:///c:/Projects/neuro-main/frontend/src/components/Resources.jsx)
* **Overline**: `OPEN PUBLIC HUB`
* **Headline**: "Free downloadable resources for every family"
* **Lead Text**: *"No sign-up, no email wall, no cost. Print them, share them on WhatsApp, use them in your clinic or classroom."*

#### Downloadable Toolkits:
1. **0–36 Month Milestone Checklist**
   * *Description*: Month-by-month plain-language checklist of motor, speech, social and play milestones with clear "talk to someone" flags.
   * *Specs*: PDF · 1.1 MB · English, Hindi
2. **Sensory Diet Home Plan**
   * *Description*: Daily planner of calming and alerting activities using household items, designed with occupational therapists.
   * *Specs*: PDF · 740 KB · English, Hindi
3. **Maternal Nutrition Guide**
   * *Description*: Nutrition across the 1,000 days from conception to age two, built around affordable local foods.
   * *Specs*: PDF · 1.6 MB · English, Hindi, Garhwali
4. **Inclusive Classroom Handbook**
   * *Description*: For government school teachers: seating, routines, noise, and accommodations requiring zero budget.
   * *Specs*: PDF · 2.9 MB · English, Hindi

---

### 2.10. Contact & Institutional Booking Desk
* **File Location**: [`frontend/src/components/ContactDesk.jsx`](file:///c:/Projects/neuro-main/frontend/src/components/ContactDesk.jsx)
* **Overline**: `CONTACT & BOOKING DESK`
* **Headline**: "One desk for clinics, researchers and funders"
* **Lead Text**: *"Use this form to request a mobile clinic visit in your area, ask a research question, or start a CSR conversation."*

#### General Enquiry Form Fields:
* `Full Name` (Text Input)
* `Email` (Email Input)
* `Phone (optional)` (Text Input)
* `District / City` (Text Input)
* `Reason for Contact` (Dropdown: *Book a mobile clinic visit, Screening appointment for my child, Researcher / academic query, CSR or institutional alliance, Volunteer enquiry, Media & press*)
* `How can we help?` (Textarea, min. 10 chars)

#### 5 Institutional Direct Desks:
* **Mobile clinic bookings**: `clinics@neurodevfoundation.org` · `+91 135 400 1180`
* **Research fund & grants**: `research@neurodevfoundation.org` · `+91 135 400 1184`
* **CSR & institutional alliances**: `partnerships@neurodevfoundation.org` · `+91 135 400 1190`
* **Volunteering**: `volunteer@neurodevfoundation.org` · `+91 135 400 1192`
* **Media & press**: `press@neurodevfoundation.org` · `+91 135 400 1195`
* **Registered Office**: `12 Rajpur Road, Dehradun 248001, Uttarakhand, India`
* **Operating Hours**: `Monday to Saturday, 9:30–18:00 IST`

---

## 3. Crowdfunding Page (`/crowdfunding`)

* **File Location**: [`frontend/src/pages/CrowdfundingPage.jsx`](file:///c:/Projects/neuro-main/frontend/src/pages/CrowdfundingPage.jsx)
* **Overline**: `SPONSOR A CHILD`
* **Headline**: "Fund one child's therapy, **start to finish.**"
* **Lead Text**: *"Each case below has been reviewed by our clinical board, with a named therapy plan and a costed list of sessions and equipment. Contributions are ring-fenced to that child; any surplus moves to the next child on the same waiting list, with the donor informed."*
* **Compliance Badge**: *"80G tax exemption issued for every contribution."*

### Active Child Campaigns:
1. **Aarav, age 4** (Roorkee, Uttarakhand)
   * *Condition*: Autism spectrum disorder, non-speaking
   * *Need*: 12 months of twice-weekly speech therapy plus a tablet-based AAC communication device.
   * *Funding Goal*: ₹1,80,000 | *Raised*: ₹1,21,500 (~68%)
   * *Verified By*: NDF Clinical Review Board
2. **Ishita, age 6** (Haridwar, Uttarakhand)
   * *Condition*: Cerebral palsy, spastic diplegia
   * *Need*: Custom standing frame, ankle-foot orthoses, and 9 months of physiotherapy.
   * *Funding Goal*: ₹2,40,000 | *Raised*: ₹78,000 (~33%)
   * *Verified By*: NDF Clinical Review Board
3. **Kabir, age 3** (Bijnor, Uttar Pradesh)
   * *Condition*: Global developmental delay, severe sensory processing difficulty
   * *Need*: Home sensory equipment kit and 6 months of weekly occupational therapy at the district centre.
   * *Funding Goal*: ₹95,000 | *Raised*: ₹89,200 (~94%)
   * *Verified By*: NDF Clinical Review Board

### Pledge Modal Dialog Fields:
* `Full Name` (Text Input)
* `Email Address (for 80G receipt)` (Email Input)
* `Pledge Amount (INR)` (Preset buttons: ₹1,000, ₹2,500, ₹5,000, ₹10,000 + Custom Input)

---

## 4. Volunteer Page (`/volunteer`)

* **File Location**: [`frontend/src/pages/VolunteerPage.jsx`](file:///c:/Projects/neuro-main/frontend/src/pages/VolunteerPage.jsx)
* **Overline**: `VOLUNTEER`
* **Headline**: "Give a day. **Change a childhood.**"
* **Lead Text**: *"Volunteers make our district camps possible — teaching parents home routines, running play stations for children, translating materials, and coordinating transport so families actually reach the van. Companies can bring a whole team."*

### 6 Volunteering Modes:
1. Corporate team volunteering day (8 to 40 people)
2. Teach or train (clinical professional)
3. Caregiver workshop support
4. Translation & language content
5. Logistics, transport & camp support
6. Remote / online support

### Safeguarding & Operational FAQs:
* **Q1: Do I need a clinical background?**
  * *A*: No. Many roles are logistics, translation, photography or activity-station support. Clinical roles are matched to your registration and supervised by our therapists.
* **Q2: Can my company send a whole team?**
  * *A*: Yes. We run structured corporate volunteering days for groups of 8 to 40, including a briefing, supervised field activity and an impact debrief for your CSR reporting.
* **Q3: How are children safeguarded?**
  * *A*: Every volunteer signs our child-protection code, is briefed before contact, and is never left unsupervised with a child. Photography needs written caregiver consent.
* **Q4: What is the time commitment?**
  * *A*: A single day for corporate groups, or a recurring weekend slot for community volunteers. Remote roles can be a few hours a month.

### Volunteer Registration Form Fields:
* `Full Name` (Text Input)
* `Email Address` (Email Input)
* `Company / Organisation (optional)` (Text Input)
* `How would you like to help?` (Dropdown with 6 modes)
* `Relevant Skills & Background` (Textarea)
* `Availability (e.g. weekends, corporate day)` (Text Input)

---

## 5. Global Footer

* **File Location**: [`frontend/src/components/SiteFooter.jsx`](file:///c:/Projects/neuro-main/frontend/src/components/SiteFooter.jsx)
* **Appears On**: All pages (Bottom).

### Content & Columns:
* **Column 1: Organization Profile**:
  * Logo & Name: **NeuroDevelopment Foundation**
  * Description: *"A clinical, research and equity organisation working on neurodevelopmental care for children in low-resource districts. Registered public charitable trust."*
  * Office Address: `12 Rajpur Road, Dehradun 248001, Uttarakhand, India`
  * Phone: `+91 135 400 1180` (Mon–Sat, 9:30–18:00 IST)
  * Central Email: `hello@neurodevfoundation.org`
* **Column 2: Institutional Desks**:
  * Direct links and numbers for Mobile Clinics, Research Fund, CSR, and Media.
* **Column 3: Explore & Compliance**:
  * Quick links to all 6 home anchor sections, Crowdfunding, and Volunteer pages.
  * *Badges*: `CSR-1 registered · 80G & 12A exemption · Quarterly ESG audit reports published`.
* **Copyright & License Bar**:
  * `© 2026 NeuroDevelopment Foundation. Open-access publications released under CC BY 4.0.`

---

## 6. Master Media Asset Registry

| Image URL | Component / Page | Description & Context |
| :--- | :--- | :--- |
| `https://images.unsplash.com/photo-1758598737547-666bce663667` | Hero & Gallery | Mother and young son building with blocks in therapy session |
| `https://images.unsplash.com/photo-1773140278162-fd7df1043f0c` | Services & Events | Mobile therapy clinic van on field route |
| `https://images.pexels.com/photos/30483024/pexels-photo-30483024.jpeg` | Services & Gallery | Close-up of child's hands with occupational therapy putty |
| `https://images.pexels.com/photos/6646916/pexels-photo-6646916.jpeg` | CSR, Events, Gallery & Volunteer | Volunteers distributing supplies at community aid camp |
| `https://images.unsplash.com/photo-1758691463607-c1220b77aaaa` | Events | Virtual Annual Clinical Symposium announcement |
| `https://images.unsplash.com/photo-1708687045030-26702e62fc65` | Events & Gallery | Behavioral therapy demonstration and caregiver workshop |
