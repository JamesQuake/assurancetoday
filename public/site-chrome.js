'use strict';

document.addEventListener('DOMContentLoaded', () => {
    // Top tabs describe insurance sections only. General service/about pages
    // Intentionally leave both tabs unselected when no active navigation section applies.
    const active = document.body.classList.contains('product-page')
        ? (document.body.dataset.active || '')
        : '';
    const hasQuoteSection = Boolean(document.getElementById('quote-form'))
        || document.body.classList.contains('product-page');
    const quoteTarget = hasQuoteSection ? '#quote-form' : 'contact-us.html';
    const headerMount = document.getElementById('site-header');
    const footerMount = document.getElementById('site-footer');

    if (headerMount) {
        headerMount.innerHTML = `
            <div class="fixed-top w-100" style="z-index: 1050;">
                <div class="utility-bar bg-dark-blue d-none d-md-block pt-2 shadow-sm">
                    <div class="container-fluid px-lg-5">
                        <div class="row align-items-end">
                            <div class="col-4"></div>
                            <div class="col-4 d-flex justify-content-center">
                                <ul class="nav custom-premium-tabs" role="tablist">
                                    <li class="nav-item" role="presentation"><a class="nav-link ${active === 'personal' ? 'active' : ''}" href="personal.html">Personal</a></li>
                                    <li class="nav-item" role="presentation"><a class="nav-link ${active === 'commercial' ? 'active' : ''}" href="commercial-auto.html">Commercial</a></li>
                                </ul>
                            </div>
                            <div class="col-4 text-end pb-2">
                                <span class="text-white small tracking-wide"><i class="fa-solid fa-phone text-orange me-2"></i>Call us for a free quote: <a class="text-white text-decoration-none fw-bold fs-6 ms-1" href="tel:18884181200">(888) 418-1200</a></span>
                            </div>
                        </div>
                    </div>
                </div>
                <nav class="navbar navbar-expand-lg glass-nav">
                    <div class="container px-lg-4 py-1">
                        <a class="navbar-brand py-0" href="index.html"><img src="images/logo.png" alt="Assurance Total Protection" style="max-height: 45px; width: auto;"></a>
                        <button class="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar"><span class="navbar-toggler-icon"></span></button>
                        <div class="collapse navbar-collapse justify-content-end" id="mainNavbar">
                            <ul class="navbar-nav align-items-center gap-2 assurance-main-menu">
                                <li class="nav-item mobile-segment-nav">
                                    <div class="mobile-segment-grid">
                                        <a class="mobile-segment-btn ${active === 'personal' ? 'active' : ''}" href="personal.html">Personal</a>
                                        <a class="mobile-segment-btn ${active === 'commercial' ? 'active' : ''}" href="commercial-auto.html">Commercial</a>
                                    </div>
                                </li>
                                <li class="nav-item has-mega-menu">
                                    <button class="nav-link nav-menu-toggle fw-semibold px-3" type="button" aria-expanded="false">Insurance <i class="fa-solid fa-chevron-down ms-1 menu-chevron"></i></button>
                                    <div class="mega-menu-panel">
                                        <div class="mega-menu-inner">
                                            <div class="mega-menu-feature">
                                                <span class="mega-eyebrow">Assurance Total Protection</span>
                                                <h3>Insurance built around your next chapter.</h3>
                                                <p>Explore personal and commercial coverage with a team that helps you compare clearly and move confidently.</p>
                                                <a class="btn mega-quote-btn" href="${quoteTarget}">Get a Quote</a>
                                            </div>
                                            <div class="mega-menu-content">
                                                <div class="mega-category-grid">
                                                    <div class="mega-category">
                                                        <span class="mega-category-title">Auto</span>
                                                        <a href="automobile.html"><i class="fa-solid fa-car-side"></i><span>Automobile</span></a>
                                                        <a href="motorcycle.html"><i class="fa-solid fa-motorcycle"></i><span>Motorcycle</span></a>
                                                        <a href="sr_22.html"><i class="fa-solid fa-file-shield"></i><span>SR-22 Filing</span></a>
                                                    </div>
                                                    <div class="mega-category">
                                                        <span class="mega-category-title">Home</span>
                                                        <a href="homeowners.html"><i class="fa-solid fa-house-chimney"></i><span>Homeowners</span></a>
                                                        <a href="condo.html"><i class="fa-solid fa-building"></i><span>Condo</span></a>
                                                        <a href="renters.html"><i class="fa-solid fa-key"></i><span>Renters</span></a>
                                                        <a href="property.html"><i class="fa-solid fa-map-location-dot"></i><span>Property</span></a>
                                                    </div>
                                                    <div class="mega-category">
                                                        <span class="mega-category-title">Commercial</span>
                                                        <a href="commercial-auto.html"><i class="fa-solid fa-truck-moving"></i><span>Commercial Auto</span></a>
                                                        <a href="general-liability.html"><i class="fa-solid fa-shield-halved"></i><span>General Liability</span></a>
                                                        <a href="workers-compensation.html"><i class="fa-solid fa-helmet-safety"></i><span>Workers Compensation</span></a>
                                                        <a href="bonds.html"><i class="fa-solid fa-file-contract"></i><span>Surety Bonds</span></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class="nav-item has-submenu">
                                    <button class="nav-link nav-menu-toggle fw-semibold px-3" type="button" aria-expanded="false">Services <i class="fa-solid fa-chevron-down ms-1 menu-chevron"></i></button>
                                    <ul class="standard-submenu">
                                        <li><a href="pay-bill.html"><i class="fa-solid fa-credit-card"></i><span>Pay Bill</span></a></li>
                                        <li><a href="view-documents.html"><i class="fa-solid fa-folder-open"></i><span>View Documents</span></a></li>
                                        <li><a href="file-a-claim.html"><i class="fa-solid fa-file-circle-check"></i><span>File a Claim</span></a></li>
                                    </ul>
                                </li>
                                <li class="nav-item has-submenu">
                                    <button class="nav-link nav-menu-toggle fw-semibold px-3" type="button" aria-expanded="false">About Us <i class="fa-solid fa-chevron-down ms-1 menu-chevron"></i></button>
                                    <ul class="standard-submenu standard-submenu-wide">
                                        <li><a href="about-us.html"><i class="fa-solid fa-circle-info"></i><span>About Us</span></a></li>
                                        <li><a href="our-carriers.html"><i class="fa-solid fa-handshake"></i><span>Our Carriers</span></a></li>
                                        <li><a href="testimonials.html"><i class="fa-solid fa-star"></i><span>Testimonials</span></a></li>
                                        <li><a href="refer-a-friend.html"><i class="fa-solid fa-user-plus"></i><span>Refer a Friend</span></a></li>
                                        <li><a href="contact-us.html"><i class="fa-solid fa-envelope"></i><span>Contact Us</span></a></li>
                                    </ul>
                                </li>
                                <li class="nav-item nav-agent-action ms-lg-3 mt-3 mt-lg-0"><a href="contact-us.html#contact-details" class="btn btn-primary px-4 py-2 rounded-pill shadow-sm premium-hover">Find an Agent</a></li>
                                <li class="nav-item nav-quote-action mobile-quote-nav"><a href="contact-us.html#quote-form" class="btn mobile-start-quote-btn px-4 py-2 rounded-pill">Get a Quote</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>`;
    }

    if (footerMount) {
        footerMount.innerHTML = `
            <footer class="bg-navy-footer text-white py-5 position-relative">
                <div class="container py-4">
                    <div class="row g-5 align-items-center">
                        <div class="col-lg-4 col-md-6">
                            <img src="images/logo.png" alt="Assurance Total Protection" class="mb-4" style="max-height: 55px; width: auto;">
                            <p class="mb-2 text-white"><i class="fa-solid fa-location-dot me-2 opacity-75"></i> 4801 Southwick Dr SUITE 800<br><span class="ms-4">Matteson, IL 60443</span></p>
                            <p class="mb-2 text-white"><i class="fa-solid fa-phone me-2 opacity-75"></i> <a class="text-white text-decoration-none" href="tel:16302279000">630-227-9000</a></p>
                        </div>
                        <div class="col-lg-4 col-md-6">
                            <h5 class="fw-bold mb-4 text-uppercase tracking-wider states-gradient-text fs-4">States We Serve</h5>
                            <ul class="list-unstyled text-white">
                                <li class="mb-2 opacity-90">Illinois</li>
                                <li class="mb-2 opacity-90">Indiana</li>
                                <li class="mb-2 opacity-90">Wisconsin</li>
                            </ul>
                        </div>
                        <div class="col-lg-4 text-center text-lg-end">
                            <div class="footer-trust-panel d-inline-block text-center w-100">
                                <div class="footer-badge-row mb-4">
                                    <a href="https://www.trustedchoice.com/basic/agency-profile/1100372/assurance-total-protection/" target="_blank" rel="noopener noreferrer"><img src="images/tc.png" alt="Trusted Choice" class="footer-badge"></a>
                                    <a href="https://www.bbb.org/us/il/midlothian/profile/auto-insurance/assurance-total-protection-0654-88653293" target="_blank" rel="noopener noreferrer"><img src="images/bbb.png" alt="Better Business Bureau" class="footer-badge"></a>
                                    <a href="https://www.progressiveagent.com/" target="_blank" rel="noopener noreferrer"><img src="images/progressive-flo.png" alt="Progressive" class="footer-badge"></a>
                                </div>
                                <div class="d-flex justify-content-center gap-3 gap-md-4 mt-auto flex-wrap">
                                    <a href="#" class="social-circle-icon social-fb"><i class="fa-brands fa-facebook-f"></i></a>
                                    <a href="#" class="social-circle-icon social-li"><i class="fa-brands fa-linkedin-in"></i></a>
                                    <a href="#" class="social-circle-icon social-yt"><i class="fa-brands fa-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row mt-5 pt-4 border-top border-light border-opacity-25 text-center text-white-50">
                        <p class="small">&copy; 2026 Assurance Total Protection. All rights reserved. Coverage availability, terms, and conditions are subject to carrier underwriting and policy provisions.</p>
                    </div>
                </div>
            </footer>`;
    }
});
