/**
 * Assurance Total Protection - Front-End Logic Controller
 * Premium Architecture
 */

document.addEventListener('DOMContentLoaded', () => {
    
    const menuItems = document.querySelectorAll('.has-mega-menu, .has-submenu');
    let utilityBar = document.querySelector('.utility-bar');
    let pinnedMenu = null;
    const heroSection = document.querySelector('.hero-section');
    const heroVideo = document.querySelector('.hero-video-stage iframe');

    if (heroSection && heroVideo) {
        const revealHeroVideo = () => {
            window.setTimeout(() => heroSection.classList.add('is-video-loaded'), 1400);
        };

        heroVideo.addEventListener('load', revealHeroVideo, { once: true });
        window.setTimeout(() => heroSection.classList.add('is-video-loaded'), 6500);
    }

    const updateUtilityBar = () => {
        utilityBar = utilityBar || document.querySelector('.utility-bar');
        if (!utilityBar) return;
        const hideAfter = Math.max(utilityBar.scrollHeight, 36);
        document.body.classList.toggle('utility-bar-hidden', window.scrollY > hideAfter);
    };

    updateUtilityBar();
    window.setTimeout(updateUtilityBar, 0);
    window.addEventListener('scroll', updateUtilityBar, { passive: true });
    window.addEventListener('resize', updateUtilityBar);

    const closeMenu = (item) => {
        item.classList.remove('menu-open');
        const button = item.querySelector('.nav-menu-toggle');
        if (button) button.setAttribute('aria-expanded', 'false');
    };

    const closeAllMenus = () => menuItems.forEach(closeMenu);

    const openMenu = (item) => {
        menuItems.forEach((other) => {
            if (other !== item) closeMenu(other);
        });
        item.classList.add('menu-open');
        const button = item.querySelector('.nav-menu-toggle');
        if (button) button.setAttribute('aria-expanded', 'true');
    };

    menuItems.forEach((item) => {
        const toggle = item.querySelector('.nav-menu-toggle');
        const panel = item.querySelector('.mega-menu-panel, .standard-submenu');
        let closeTimer = null;
        if (!toggle) return;

        const clearCloseTimer = () => {
            if (!closeTimer) return;
            window.clearTimeout(closeTimer);
            closeTimer = null;
        };

        const openOnHover = () => {
            if (window.innerWidth < 992) return;
            clearCloseTimer();
            pinnedMenu = null;
            openMenu(item);
        };

        item.addEventListener('mouseenter', openOnHover);
        item.addEventListener('pointerenter', openOnHover);
        toggle.addEventListener('mouseenter', openOnHover);
        toggle.addEventListener('mouseover', openOnHover);

        item.addEventListener('mouseleave', () => {
            if (window.innerWidth < 992) return;
            clearCloseTimer();
            if (pinnedMenu && pinnedMenu !== item) {
                openMenu(pinnedMenu);
            } else if (!pinnedMenu) {
                closeTimer = window.setTimeout(() => closeMenu(item), 180);
            }
        });

        if (panel) {
            panel.addEventListener('mouseenter', () => {
                if (window.innerWidth < 992) return;
                clearCloseTimer();
                openMenu(item);
            });

            panel.addEventListener('mouseleave', () => {
                if (window.innerWidth < 992 || pinnedMenu === item) return;
                clearCloseTimer();
                closeTimer = window.setTimeout(() => closeMenu(item), 120);
            });
        }

        toggle.addEventListener('click', (event) => {
            event.preventDefault();
            clearCloseTimer();
            const isPinnedOpen = item.classList.contains('menu-open') && pinnedMenu === item;

            if (isPinnedOpen) {
                pinnedMenu = null;
                closeMenu(item);
            } else {
                pinnedMenu = item;
                openMenu(item);
            }
        });
    });

    const insurancePreviews = {
        'automobile.html': {
            category: 'Auto',
            title: 'Automobile Insurance',
            description: 'Coverage options for your vehicle, passengers, liability, and everyday driving risks.',
            image: 'images/automobile_hero.png',
            position: 'right center'
        },
        'motorcycle.html': {
            category: 'Auto',
            title: 'Motorcycle Insurance',
            description: 'Protection designed for your bike, riding gear, liability, and life on the open road.',
            image: 'images/motorcycle_hero.png',
            position: 'right center'
        },
        'sr_22.html': {
            category: 'Auto',
            title: 'SR-22 Filing',
            description: 'Get help securing coverage and filing the proof of insurance required by your state.',
            image: 'images/sr22_hero.png',
            position: 'right center'
        },
        'homeowners.html': {
            category: 'Home',
            title: 'Homeowners Insurance',
            description: 'Protect your home, belongings, liability, and the place where life happens.',
            image: 'images/homeowners_hero.png',
            position: 'right center'
        },
        'condo.html': {
            category: 'Home',
            title: 'Condo Insurance',
            description: 'Coverage for your unit, personal property, liability, and gaps left by the association policy.',
            image: 'images/condo_hero.png',
            position: 'right center'
        },
        'renters.html': {
            category: 'Home',
            title: 'Renters Insurance',
            description: 'Affordable protection for your belongings, personal liability, and temporary living expenses.',
            image: 'images/renters_hero.png',
            position: 'right center'
        },
        'property.html': {
            category: 'Home',
            title: 'Property Insurance',
            description: 'Flexible protection for buildings, contents, liability, and a range of property uses.',
            image: 'images/property_hero.png',
            position: 'right center'
        },
        'commercial-auto.html': {
            category: 'Commercial',
            title: 'Commercial Auto',
            description: 'Coverage for work vehicles, trucks, vans, fleets, drivers, and business operations on the road.',
            image: 'images/truck_hero1.jpg',
            position: '54% center'
        },
        'general-liability.html': {
            category: 'Commercial',
            title: 'General Liability',
            description: 'Help protect your business from covered claims involving injuries and property damage.',
            image: 'images/generalliabiligy_hero.png',
            position: 'right center'
        },
        'workers-compensation.html': {
            category: 'Commercial',
            title: 'Workers Compensation',
            description: 'Coverage that supports employees and your business after a covered workplace injury.',
            image: 'images/workerscomp_hero.png',
            position: 'right center'
        },
        'bonds.html': {
            category: 'Commercial',
            title: 'Surety Bonds',
            description: 'Bond solutions that help meet contractual, licensing, and business obligations.',
            image: 'images/bonds_hero.png',
            position: 'right center'
        }
    };

    document.querySelectorAll('.mega-menu-panel').forEach((panel) => {
        const feature = panel.querySelector('.mega-menu-feature');
        const links = panel.querySelectorAll('.mega-category a[href]');
        if (!feature || !links.length) return;

        const eyebrow = feature.querySelector('.mega-eyebrow');
        const title = feature.querySelector('h3');
        const description = feature.querySelector('p');
        const original = {
            eyebrow: eyebrow?.textContent || '',
            title: title?.textContent || '',
            description: description?.textContent || ''
        };

        const resetPreview = () => {
            links.forEach((item) => item.classList.remove('is-preview-active'));
            feature.classList.remove('is-page-preview');
            feature.style.removeProperty('background-image');
            feature.style.removeProperty('background-position');
            if (eyebrow) eyebrow.textContent = original.eyebrow;
            if (title) title.textContent = original.title;
            if (description) description.textContent = original.description;
        };

        const showPreview = (link) => {
            if (window.innerWidth < 992) return;
            const href = link.getAttribute('href');
            const preview = insurancePreviews[href];
            if (!preview) return;

            links.forEach((item) => item.classList.toggle('is-preview-active', item === link));
            feature.classList.add('is-page-preview');
            feature.style.backgroundImage = `linear-gradient(180deg, rgba(3, 20, 36, 0.28), rgba(3, 20, 36, 0.94)), url("${preview.image}")`;
            feature.style.backgroundPosition = preview.position || 'center';
            if (eyebrow) eyebrow.textContent = preview.category;
            if (title) title.textContent = preview.title;
            if (description) description.textContent = preview.description;
        };

        links.forEach((link) => {
            link.addEventListener('mouseenter', () => showPreview(link));
            link.addEventListener('focus', () => showPreview(link));
        });

        window.addEventListener('resize', () => {
            if (window.innerWidth < 992 && feature.classList.contains('is-page-preview')) {
                resetPreview();
            }
        });
    });

    document.addEventListener('click', (event) => {
        if (!event.target.closest('.assurance-main-menu')) {
            pinnedMenu = null;
            closeAllMenus();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            pinnedMenu = null;
            closeAllMenus();
        }
    });

    const navbarCollapse = document.getElementById('mainNavbar');
    if (navbarCollapse) {
        navbarCollapse.addEventListener('hidden.bs.collapse', () => {
            pinnedMenu = null;
            closeAllMenus();
        });

        navbarCollapse.addEventListener('click', (event) => {
            const destination = event.target.closest('a[href]');
            if (!destination || window.innerWidth >= 992) return;

            pinnedMenu = null;
            closeAllMenus();

            if (window.bootstrap?.Collapse) {
                window.bootstrap.Collapse
                    .getOrCreateInstance(navbarCollapse, { toggle: false })
                    .hide();
            } else {
                navbarCollapse.classList.remove('show');
                document.querySelector('[data-bs-target="#mainNavbar"]')
                    ?.setAttribute('aria-expanded', 'false');
            }
        });
    }

    window.addEventListener('resize', () => {
        pinnedMenu = null;
        closeAllMenus();
    });

});
