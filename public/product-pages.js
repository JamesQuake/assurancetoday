'use strict';

const productPages = {
    'homeowners': {
        active: 'personal',
        heroImage: 'images/homeowners_hero.png',
        icon: 'fa-house-chimney',
        eyebrow: 'Homeowners Insurance',
        title: 'Protection for the place you call home.',
        intro: 'Protect your home, belongings, and liability with coverage built around your property.',
        quick: [
            ['fa-house-lock', 'Dwelling', 'Protection for the structure of your home'],
            ['fa-couch', 'Belongings', 'Coverage for personal property inside the home'],
            ['fa-user-shield', 'Liability', 'Help for covered injury or property damage claims']
        ],
        cards: [
            ['fa-house-chimney', 'Dwelling Coverage', 'Helps repair or rebuild the home after a covered loss.'],
            ['fa-box-open', 'Personal Property', 'Helps replace belongings damaged by covered events.'],
            ['fa-person-shelter', 'Loss of Use', 'May help with temporary living expenses while repairs are completed.'],
            ['fa-shield-halved', 'Personal Liability', 'Helps protect against covered claims made by others.'],
            ['fa-kit-medical', 'Medical Payments', 'May help with small covered injury expenses regardless of fault.'],
            ['fa-cloud-bolt', 'Weather & Fire', 'Review protection for wind, hail, fire, theft, and other common risks.']
        ],
        bulletsTitle: 'What we review with you',
        bullets: ['Home rebuild estimate and roof details', 'Deductibles and claim history', 'Valuable items and personal property limits', 'Discount opportunities for bundles, alarms, and updates']
    },
    'condo': {
        active: 'personal',
        heroImage: 'images/condo_hero.png',
        icon: 'fa-building',
        eyebrow: 'Condo Insurance',
        title: 'Coverage for your unit, belongings, and liability.',
        intro: 'Cover your unit, belongings, and liability beyond the association master policy.',
        quick: [
            ['fa-door-closed', 'Unit Interior', 'Coverage for interior improvements and fixtures'],
            ['fa-couch', 'Personal Property', 'Protection for belongings'],
            ['fa-file-contract', 'Loss Assessment', 'Options for association-related assessments']
        ],
        cards: [
            ['fa-building', 'Interior Coverage', 'Helps protect walls-in items, upgrades, and fixtures.'],
            ['fa-box-open', 'Belongings', 'Helps cover furniture, electronics, clothing, and other personal items.'],
            ['fa-shield-halved', 'Liability', 'Protection for covered claims involving injury or property damage.'],
            ['fa-file-invoice-dollar', 'Loss Assessment', 'May help when a covered association assessment is passed to owners.'],
            ['fa-person-shelter', 'Temporary Living', 'May help if your condo becomes unlivable after a covered loss.'],
            ['fa-gem', 'Valuables', 'Review special limits for jewelry, collectibles, and higher-value property.']
        ],
        bulletsTitle: 'Bring clarity to condo coverage',
        bullets: ['Association master policy responsibilities', 'Interior finish and improvement values', 'Deductibles and special assessment exposure', 'Bundling opportunities with auto or life coverage']
    },
    'renters': {
        active: 'personal',
        heroImage: 'images/ChatGPT Image Jun 19, 2026, 11_59_17 AM.png',
        icon: 'fa-key',
        eyebrow: 'Renters Insurance',
        title: 'Simple protection for the things you own.',
        intro: 'Affordable protection for your belongings, liability, and temporary living needs.',
        quick: [
            ['fa-box-open', 'Belongings', 'Furniture, clothing, electronics, and more'],
            ['fa-user-shield', 'Liability', 'Protection for covered claims'],
            ['fa-person-shelter', 'Loss of Use', 'Temporary living expense support']
        ],
        cards: [
            ['fa-couch', 'Personal Property', 'Helps replace belongings after covered losses.'],
            ['fa-shield-halved', 'Liability', 'May protect you from covered claims made by others.'],
            ['fa-hotel', 'Additional Living Expense', 'May help pay for temporary housing after a covered event.'],
            ['fa-laptop', 'Electronics', 'Review limits for computers, phones, and other devices.'],
            ['fa-gem', 'Valuables', 'Schedule jewelry or special property when needed.'],
            ['fa-hand-holding-dollar', 'Affordable Coverage', 'A small monthly cost can protect a lot of everyday life.']
        ],
        bulletsTitle: 'Good renters coverage starts with',
        bullets: ['An estimate of your belongings', 'Landlord or lease requirements', 'Deductible preferences', 'Roommate and valuables questions']
    },
    'property': {
        active: 'personal',
        heroImage: 'images/property_hero.png',
        icon: 'fa-map-location-dot',
        eyebrow: 'Property Insurance',
        title: 'Coverage for property that matters.',
        intro: 'Protect buildings, belongings, and property-related liability risks.',
        quick: [
            ['fa-house', 'Structures', 'Homes, buildings, and improvements'],
            ['fa-boxes-stacked', 'Contents', 'Property inside the building'],
            ['fa-clipboard-check', 'Risk Review', 'Coverage matched to property use']
        ],
        cards: [
            ['fa-house', 'Building Protection', 'Coverage for structures after covered events.'],
            ['fa-box-open', 'Contents Coverage', 'Protection for covered personal or business property.'],
            ['fa-cloud-showers-heavy', 'Weather Risks', 'Review wind, hail, water, and other property exposures.'],
            ['fa-fire', 'Fire & Theft', 'Coverage for common serious property losses.'],
            ['fa-user-shield', 'Liability', 'Help for covered claims connected to the property.'],
            ['fa-list-check', 'Policy Fit', 'Match coverage to owner-occupied, rental, or special property use.']
        ],
        bulletsTitle: 'Property details we clarify',
        bullets: ['Property use and occupancy', 'Replacement cost versus actual cash value', 'Deductibles and exclusions', 'Available carrier options and discounts']
    },
    'life': {
        active: 'personal',
        heroImage: 'images/lifeinsurance_hero.png',
        icon: 'fa-heart-pulse',
        eyebrow: 'Life Insurance',
        title: 'Protection for the people who count on you.',
        intro: 'Help protect the people who depend on you financially.',
        quick: [
            ['fa-users', 'Family Support', 'Income replacement and household stability'],
            ['fa-house-chimney', 'Mortgage Help', 'Protection for major obligations'],
            ['fa-seedling', 'Future Planning', 'Coverage that supports long-term goals']
        ],
        cards: [
            ['fa-hourglass-half', 'Term Life', 'Affordable protection for a defined period.'],
            ['fa-heart', 'Whole Life', 'Lifetime coverage with potential cash value.'],
            ['fa-chart-line', 'Universal Life', 'Flexible permanent coverage options.'],
            ['fa-child-reaching', 'Family Needs', 'Support for childcare, education, and daily expenses.'],
            ['fa-file-invoice-dollar', 'Final Expenses', 'Help reduce the burden of end-of-life costs.'],
            ['fa-handshake-angle', 'Guidance', 'Compare options based on people, budget, and goals.']
        ],
        bulletsTitle: 'Life insurance conversations include',
        bullets: ['Who depends on your income', 'Debt, mortgage, and education needs', 'Coverage length and budget', 'Whether term or permanent coverage fits best']
    },
    'term-life': {
        active: 'personal',
        heroImage: 'images/termlife_hero.png',
        icon: 'fa-hourglass-half',
        eyebrow: 'Term Life Insurance',
        title: 'Straightforward coverage for the years that matter most.',
        intro: 'Affordable protection for the years your family needs it most.',
        quick: [
            ['fa-calendar-days', 'Set Term', 'Choose a coverage period'],
            ['fa-dollar-sign', 'Affordable', 'Often lower cost than permanent options'],
            ['fa-users', 'Family First', 'Designed around dependents and obligations']
        ],
        cards: [
            ['fa-house-chimney', 'Mortgage Protection', 'Help loved ones manage housing costs.'],
            ['fa-graduation-cap', 'Education Goals', 'Support future school or childcare needs.'],
            ['fa-briefcase', 'Income Replacement', 'Help replace lost household income.'],
            ['fa-coins', 'Budget Fit', 'Choose limits and terms that make sense.'],
            ['fa-layer-group', 'Convertible Options', 'Some policies may offer conversion features.'],
            ['fa-compass', 'Coverage Review', 'Adjust as life changes.']
        ],
        bulletsTitle: 'When term life may fit',
        bullets: ['You want protection for a specific time window', 'You need a larger death benefit on a budget', 'You have children, debts, or mortgage obligations', 'You want simple, understandable coverage']
    },
    'universal-life': {
        active: 'personal',
        heroImage: 'images/universallife_hero.png',
        icon: 'fa-chart-line',
        eyebrow: 'Universal Life Insurance',
        title: 'Flexible permanent life coverage.',
        intro: 'Flexible permanent coverage for long-term protection and planning.',
        quick: [
            ['fa-infinity', 'Permanent', 'Coverage designed for the long term'],
            ['fa-sliders', 'Flexible', 'Premium and benefit flexibility may be available'],
            ['fa-chart-line', 'Cash Value', 'Potential accumulation over time']
        ],
        cards: [
            ['fa-heart-pulse', 'Lifetime Protection', 'Coverage can last beyond a fixed term.'],
            ['fa-wallet', 'Premium Flexibility', 'Options may adapt as needs change.'],
            ['fa-piggy-bank', 'Cash Value', 'Policy value may build over time.'],
            ['fa-users', 'Legacy Planning', 'Support family or estate goals.'],
            ['fa-briefcase', 'Business Uses', 'May help with business continuation planning.'],
            ['fa-user-tie', 'Advice Matters', 'Policy design should be reviewed carefully.']
        ],
        bulletsTitle: 'We help compare',
        bullets: ['Permanent coverage goals', 'Premium expectations', 'Cash value illustrations', 'How universal life compares with term and whole life']
    },
    'whole-life': {
        active: 'personal',
        heroImage: 'images/wholelife_hero.png',
        icon: 'fa-heart',
        eyebrow: 'Whole Life Insurance',
        title: 'Lifetime coverage with steady structure.',
        intro: 'Permanent life coverage with predictable structure and potential cash value.',
        quick: [
            ['fa-infinity', 'Lifetime', 'Coverage designed not to expire'],
            ['fa-lock', 'Predictable', 'Stable premium structure'],
            ['fa-piggy-bank', 'Cash Value', 'Potential value over time']
        ],
        cards: [
            ['fa-heart', 'Permanent Protection', 'Coverage for long-term family needs.'],
            ['fa-file-invoice-dollar', 'Final Expenses', 'Help reduce costs for loved ones.'],
            ['fa-piggy-bank', 'Cash Value', 'Builds value according to policy terms.'],
            ['fa-users', 'Legacy', 'Support beneficiaries and family planning.'],
            ['fa-lock', 'Level Premiums', 'Predictability can help with budgeting.'],
            ['fa-scale-balanced', 'Compare Options', 'Review fit versus term or universal life.']
        ],
        bulletsTitle: 'Whole life may fit when',
        bullets: ['You want lifetime coverage', 'You value predictable premiums', 'You want potential cash value', 'You are planning for final expenses or legacy needs']
    },
    'annuities': {
        active: 'personal',
        heroImage: 'images/annuities_hero.png',
        icon: 'fa-piggy-bank',
        eyebrow: 'Annuities',
        title: 'Income planning for the years ahead.',
        intro: 'Turn savings into structured income for future planning.',
        quick: [
            ['fa-calendar-check', 'Income', 'Structured future payments'],
            ['fa-shield-halved', 'Stability', 'Options designed for predictability'],
            ['fa-compass', 'Planning', 'Fit depends on timeline and goals']
        ],
        cards: [
            ['fa-wallet', 'Retirement Income', 'Plan for income beyond working years.'],
            ['fa-clock', 'Deferred Options', 'Set money aside for future payout timing.'],
            ['fa-play', 'Immediate Options', 'Begin income sooner when appropriate.'],
            ['fa-chart-pie', 'Portfolio Role', 'Use as part of a broader retirement strategy.'],
            ['fa-user-shield', 'Risk Preferences', 'Match options to comfort and goals.'],
            ['fa-comments-dollar', 'Guided Review', 'Compare features, fees, and payout choices.']
        ],
        bulletsTitle: 'Annuity reviews include',
        bullets: ['Income timeline', 'Liquidity needs', 'Risk tolerance', 'Beneficiary and payout preferences']
    },
    'general-liability': {
        active: 'commercial',
        heroImage: 'images/generalliabiligy_hero.png',
        icon: 'fa-shield-halved',
        eyebrow: 'General Liability',
        title: 'Foundational protection for business risks.',
        intro: 'General liability insurance helps protect businesses from covered claims involving injury, property damage, and related legal expenses.',
        quick: [
            ['fa-person-falling-burst', 'Injury Claims', 'Customer or third-party injury exposure'],
            ['fa-house-damage', 'Property Damage', 'Damage to others’ property'],
            ['fa-scale-balanced', 'Legal Defense', 'Help with covered legal costs']
        ],
        cards: [
            ['fa-store', 'Customer-facing Risk', 'Protection for businesses that interact with customers.'],
            ['fa-screwdriver-wrench', 'Jobsite Exposure', 'Coverage for contractors and service businesses.'],
            ['fa-file-signature', 'Contract Requirements', 'Meet insurance requirements for clients or landlords.'],
            ['fa-scale-balanced', 'Legal Defense', 'Help respond to covered lawsuits.'],
            ['fa-handshake', 'Business Credibility', 'Proof of insurance can help win work.'],
            ['fa-layer-group', 'Bundling', 'Can pair with commercial auto, property, or BOP coverage.']
        ],
        bulletsTitle: 'We help clarify',
        bullets: ['Business operations and locations', 'Certificate requirements', 'Limits and deductibles', 'Whether extra commercial coverage is needed']
    },
    'workers-compensation': {
        active: 'commercial',
        heroImage: 'images/workerscomp_hero.png',
        icon: 'fa-helmet-safety',
        eyebrow: 'Workers Compensation',
        title: 'Protection for employees and employers.',
        intro: 'Workers compensation helps cover work-related injuries and supports compliance for businesses with employees.',
        quick: [
            ['fa-user-injured', 'Employee Injury', 'Medical and wage-related support'],
            ['fa-clipboard-check', 'Compliance', 'Coverage shaped around state requirements'],
            ['fa-briefcase', 'Business Stability', 'Support after workplace accidents']
        ],
        cards: [
            ['fa-kit-medical', 'Medical Care', 'Helps with medical costs for covered workplace injuries.'],
            ['fa-money-bill-wave', 'Lost Wages', 'May help replace a portion of lost income.'],
            ['fa-scale-balanced', 'Employer Protection', 'Helps reduce risk from workplace injury claims.'],
            ['fa-users-gear', 'Class Codes', 'Pricing depends on employee roles and risk.'],
            ['fa-chart-line', 'Payroll Review', 'Payroll estimates affect policy costs.'],
            ['fa-file-circle-check', 'Certificates', 'Provide proof of coverage when contracts require it.']
        ],
        bulletsTitle: 'Workers comp setup includes',
        bullets: ['Employee roles and payroll', 'State requirements', 'Prior claims history', 'Contract or certificate needs']
    },
    'bonds': {
        active: 'commercial',
        heroImage: 'images/bonds_hero.png',
        icon: 'fa-file-contract',
        eyebrow: 'Bonds',
        title: 'Bond support for business obligations.',
        intro: 'Bonds help businesses satisfy contractual, licensing, and compliance requirements by backing specific promises or obligations.',
        quick: [
            ['fa-file-signature', 'Contract Bonds', 'Support for project requirements'],
            ['fa-id-badge', 'License Bonds', 'Meet licensing or permit needs'],
            ['fa-handshake-angle', 'Surety Guidance', 'Match bond type to obligation']
        ],
        cards: [
            ['fa-file-contract', 'Surety Bonds', 'Support for obligations required by another party.'],
            ['fa-helmet-safety', 'Contractor Needs', 'Bonds may be required for certain jobs or bids.'],
            ['fa-id-card', 'License & Permit', 'Meet municipal, state, or industry requirements.'],
            ['fa-truck-moving', 'Transportation Bonds', 'Support certain commercial transportation obligations.'],
            ['fa-list-check', 'Application Review', 'Information needs vary by bond type.'],
            ['fa-comments-dollar', 'Carrier Comparison', 'Compare bond options and pricing when available.']
        ],
        bulletsTitle: 'Bond conversations include',
        bullets: ['Required bond type and amount', 'Obligee requirements', 'Business and owner information', 'Timeline and renewal needs']
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const mount = document.getElementById('dynamic-product-page');
    if (!mount) return;

    const key = document.body.dataset.product;
    const page = productPages[key];
    if (!page) return;

    document.title = `${page.eyebrow} | Assurance Total Protection`;
    document.body.dataset.active = page.active;

    const quickCards = page.quick.map(([icon, title, text]) => `
        <div class="col-md-4"><div class="product-quick-card"><i class="fa-solid ${icon}"></i><div><strong>${title}</strong><span>${text}</span></div></div></div>
    `).join('');

    const cards = page.cards.map(([icon, title, text]) => `
        <div class="product-info-card"><i class="fa-solid ${icon}"></i><h3>${title}</h3><p class="text-secondary mb-0">${text}</p></div>
    `).join('');

    const bullets = page.bullets.map(item => `
        <li><i class="fa-solid fa-check"></i><span>${item}</span></li>
    `).join('');
    const heroImageStyle = page.heroImage ? ` style="--product-hero-image: url('${page.heroImage}');"` : '';
    const heroClass = page.heroImage ? 'product-hero product-image-hero' : 'product-hero';
    const heroMark = page.heroImage ? '' : `
                    <div class="col-lg-4">
                        <div class="product-hero-mark"><i class="fa-solid ${page.icon}"></i></div>
                    </div>`;

    mount.innerHTML = `
        <section class="${heroClass}"${heroImageStyle}>
            <div class="container">
                <div class="row align-items-center g-5">
                    <div class="col-lg-8">
                        <div class="product-hero-copy">
                            <span class="badge bg-white text-dark px-3 py-2 rounded-pill mb-4 tracking-wide text-uppercase fw-bold shadow-sm">${page.eyebrow}</span>
                            <h1>${page.title}</h1>
                            <p class="mt-4">${page.intro}</p>
                            <div class="commercial-hero-actions">
                                <a class="btn btn-primary px-5 py-3 rounded-pill" href="contact-us.html#quote-form">Start a Quote →</a>
                                <a class="btn btn-outline-light px-5 py-3 rounded-pill fw-bold" href="#coverage">View Coverage →</a>
                            </div>
                        </div>
                    </div>
${heroMark}
                </div>
            </div>
        </section>
        <section class="product-quick-row">
            <div class="container"><div class="row g-3">${quickCards}</div></div>
        </section>
        <section class="product-section" id="coverage">
            <div class="container">
                <div class="row align-items-end mb-5 g-4">
                    <div class="col-lg-7">
                        <span class="section-kicker">Coverage Overview</span>
                        <h2 class="display-6 fw-bold text-primary mb-3">${page.eyebrow} that fits your needs.</h2>
                    </div>
                    <div class="col-lg-5">
                        <p class="text-secondary mb-0">A calmer page layout with the same Assurance design language: clear options, fewer distractions, and direct next steps.</p>
                    </div>
                </div>
                <div class="product-card-grid">${cards}</div>
            </div>
        </section>
        <section class="product-section product-section-soft">
            <div class="container">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-6">
                        <span class="section-kicker">${page.bulletsTitle}</span>
                        <h2 class="display-6 fw-bold text-primary mb-4">What we help you sort through.</h2>
                        <ul class="product-list">${bullets}</ul>
                    </div>
                    <div class="col-lg-6">
                        <div class="product-cta-band" id="quote-form">
                            <span class="section-kicker">Start Here</span>
                            <h2 class="fw-bold mb-3">Ready to compare options?</h2>
                            <p class="mb-4">Send the basics and an Assurance adviser will help match coverage to your needs.</p>
                            <a href="contact-us.html#quote-form" class="btn btn-primary px-5 py-3 rounded-pill">Request a Quote</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    `;
});
