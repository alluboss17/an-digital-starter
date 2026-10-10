'use client';

import { FormEvent, useEffect, useState } from 'react';

const business = {
  name: 'Apex Construction & Renovations',
  shortName: 'APEX',
  location: 'Greater London',
  email: 'hello@andigitalstudio.com',
};

const services = [
  {
    number: '01',
    title: 'Home Extensions',
    text: 'Single-storey, rear and side-return extensions presented around space, light and practical family living.',
  },
  {
    number: '02',
    title: 'Loft Conversions',
    text: 'A clear service journey for turning unused roof space into bedrooms, offices and better everyday living.',
  },
  {
    number: '03',
    title: 'Full Refurbishments',
    text: 'Whole-home renovation positioning with scope, sequencing and communication explained before a homeowner enquires.',
  },
  {
    number: '04',
    title: 'Kitchens & Interiors',
    text: 'A premium way to present interior upgrades, finish quality and the detail that separates one contractor from another.',
  },
];

const projects = [
  {
    title: 'Rear Extension',
    location: 'South London · Example project',
    tag: 'Extension',
    image:
      'https://images.unsplash.com/photo-1754063257992-bb9eabdbdd86?auto=format&fit=crop&fm=jpg&q=80&w=1600',
  },
  {
    title: 'Kitchen Rework',
    location: 'Greater London · Example project',
    tag: 'Interior',
    image:
      'https://images.unsplash.com/photo-1772016608838-d8d467da27e8?auto=format&fit=crop&fm=jpg&q=80&w=1600',
  },
  {
    title: 'Loft Conversion',
    location: 'North London · Example project',
    tag: 'Loft',
    image:
      'https://images.unsplash.com/photo-1768321916128-c242ca443253?auto=format&fit=crop&fm=jpg&q=80&w=1600',
  },
];

const process = [
  {
    step: '01',
    title: 'Understand the project',
    text: 'Start with the property, the space you want to improve and the outcome you need.',
  },
  {
    step: '02',
    title: 'Define the scope',
    text: 'Turn the brief into a clear written scope so expectations, exclusions and next steps are easier to understand.',
  },
  {
    step: '03',
    title: 'Plan the work',
    text: 'Agree access, sequencing and key milestones before work begins.',
  },
  {
    step: '04',
    title: 'Build & communicate',
    text: 'Keep the project moving with a clear point of contact and regular progress updates.',
  },
];

const faqs = [
  {
    question: 'What should I include when asking for a quote?',
    answer:
      'A short description of the work, your postcode, a rough timeframe and any drawings or reference images you already have. A real contractor website can collect these details before the first call.',
  },
  {
    question: 'Can a contractor website connect to WhatsApp or email?',
    answer:
      'Yes. A production version can route enquiries to the contractor’s preferred inbox, WhatsApp Business number, CRM or another approved workflow.',
  },
  {
    question: 'Can the services and coverage areas be changed?',
    answer:
      'Yes. This is a reusable demonstration template. Services, locations, project photography, credentials, reviews and contact details should all be replaced with verified client information.',
  },
  {
    question: 'Is Apex a real contractor?',
    answer:
      'No. Apex Construction & Renovations is a concept business used to demonstrate the quality and conversion structure AN Digital Studio can build for UK trades businesses.',
  },
];

function ArrowIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="icon"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M5 12h14" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="icon"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="icon"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="icon"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className="icon"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="m6 6 12 12M18 6 6 18" />
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const revealItems = document.querySelectorAll<HTMLElement>('[data-reveal]');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px',
      }
    );

    revealItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';

    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const submitDemoQuote = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = new FormData(event.currentTarget);
    const name = String(form.get('name') || '');
    const postcode = String(form.get('postcode') || '');
    const service = String(form.get('service') || '');
    const details = String(form.get('details') || '');

    const subject = encodeURIComponent('Contractor demo website enquiry');
    const body = encodeURIComponent(
      [
        'Hello AN Digital Studio,',
        '',
        'I tested the Apex contractor demo and would like to discuss a website like this.',
        '',
        `Name: ${name}`,
        `Postcode / area: ${postcode}`,
        `Service selected: ${service}`,
        `Project details: ${details}`,
      ].join('\n')
    );

    window.location.href = `mailto:${business.email}?subject=${subject}&body=${body}`;
  };

  return (
    <main>
      <div className="demo-bar">
        <div className="site-shell demo-bar-inner">
          <span>AN Digital Studio concept website</span>
          <span className="demo-bar-separator" aria-hidden="true" />
          <span>Example business content only</span>
        </div>
      </div>

      <header className="site-header">
        <div className="site-shell nav-wrap">
          <a href="#top" className="brand" aria-label={`${business.name} home`}>
            <span className="brand-mark">A</span>
            <span className="brand-copy">
              <strong>{business.shortName}</strong>
              <span>Construction + Renovations</span>
            </span>
          </a>

          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#process">Process</a>
            <a href="#faq">FAQ</a>
          </nav>

          <div className="nav-actions">
            <a href="#quote" className="nav-phone">
              <PhoneIcon />
              <span>Request a quote</span>
            </a>

            <button
              type="button"
              className="menu-button"
              onClick={() => setMenuOpen((current) => !current)}
              aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="mobile-menu">
            <nav className="site-shell mobile-menu-inner" aria-label="Mobile navigation">
              {[
                ['Services', '#services'],
                ['Projects', '#projects'],
                ['Process', '#process'],
                ['FAQ', '#faq'],
                ['Request a quote', '#quote'],
              ].map(([label, href]) => (
                <a key={href} href={href} onClick={() => setMenuOpen(false)}>
                  <span>{label}</span>
                  <ArrowIcon />
                </a>
              ))}
            </nav>
          </div>
        )}
      </header>

      <section id="top" className="hero">
        <div className="hero-media" aria-hidden="true">
          <div
            className="hero-photo"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1754063257992-bb9eabdbdd86?auto=format&fit=crop&fm=jpg&q=82&w=2200')",
            }}
          />
          <div className="hero-overlay" />
          <div className="blueprint-grid" />
        </div>

        <div className="site-shell hero-inner">
          <div className="hero-copy">
            <div className="eyebrow hero-eyebrow">
              <span className="eyebrow-dot" />
              London contractor website concept
            </div>

            <h1>
              Build more than space.
              <span>Build confidence.</span>
            </h1>

            <p className="hero-lead">
              A premium contractor website concept for home extensions, loft
              conversions and renovations — designed to make the work feel
              organised before the first conversation.
            </p>

            <div className="hero-actions">
              <a href="#quote" className="button button-primary">
                Request a project quote
                <ArrowIcon />
              </a>

              <a href="#projects" className="button button-ghost">
                View example projects
              </a>
            </div>

            <p className="hero-note">
              Concept business for demonstration. Real client sites should use
              verified credentials, reviews and project photography.
            </p>
          </div>

          <div className="hero-card-wrap">
            <article className="hero-card">
              <div>
                <span className="hero-card-label">Project approach</span>
                <h2>Clear scope. Clear communication.</h2>
              </div>

              <ul>
                <li>
                  <CheckIcon />
                  Written project scope
                </li>
                <li>
                  <CheckIcon />
                  Defined milestones
                </li>
                <li>
                  <CheckIcon />
                  Progress updates
                </li>
              </ul>

              <div className="hero-card-meta">
                <span>Example coverage</span>
                <strong>{business.location}</strong>
              </div>
            </article>
          </div>
        </div>

        <div className="site-shell hero-bottom">
          <div>
            <strong>Extensions</strong>
            <span>More usable space</span>
          </div>
          <div>
            <strong>Loft conversions</strong>
            <span>Make the roof work harder</span>
          </div>
          <div>
            <strong>Renovations</strong>
            <span>Refresh the whole home</span>
          </div>
          <div>
            <strong>Interiors</strong>
            <span>Finish with intention</span>
          </div>
        </div>
      </section>

      <section className="intro-section section">
        <div className="site-shell intro-grid">
          <div data-reveal>
            <div className="eyebrow">A better first impression</div>
            <h2 className="section-title">
              Your workmanship can be excellent.
              <span>Your website should make that obvious.</span>
            </h2>
          </div>

          <div className="intro-copy" data-reveal>
            <p>
              Homeowners are comparing contractors before they ever make a
              phone call. A strong site should explain what you do, where you
              work, how the process feels and what the next step is.
            </p>

            <p>
              This template is intentionally built around those decisions:
              service clarity, project presentation, mobile usability and one
              obvious enquiry path.
            </p>

            <a href="#services" className="text-link">
              Explore the structure
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <section id="services" className="section services-section">
        <div className="site-shell">
          <div className="section-heading-row" data-reveal>
            <div>
              <div className="eyebrow">Core services</div>
              <h2 className="section-title compact">
                Show homeowners exactly
                <span>what you are built to do.</span>
              </h2>
            </div>

            <p>
              Every client version can be narrowed to the contractor’s actual
              services and service areas.
            </p>
          </div>

          <div className="service-grid">
            {services.map((service) => (
              <article className="service-card" key={service.number} data-reveal>
                <span className="service-number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <span className="service-line" />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section projects-section">
        <div className="site-shell">
          <div className="projects-heading" data-reveal>
            <div>
              <div className="eyebrow">Project presentation</div>
              <h2 className="section-title compact">
                Let the work
                <span>carry the proof.</span>
              </h2>
            </div>

            <p>
              These are stock photographs used only for this concept demo. Real
              contractor sites should replace them with verified project
              photography.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project, index) => (
              <article
                className={`project-card project-card-${index + 1}`}
                key={project.title}
                data-reveal
              >
                <div
                  className="project-image"
                  style={{ backgroundImage: `url('${project.image}')` }}
                  role="img"
                  aria-label={`${project.title} concept project image`}
                >
                  <div className="project-image-overlay" />
                  <span className="project-tag">{project.tag}</span>
                </div>

                <div className="project-info">
                  <div>
                    <h3>{project.title}</h3>
                    <p>{project.location}</p>
                  </div>
                  <span className="project-arrow" aria-hidden="true">
                    <ArrowIcon />
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="process" className="section process-section">
        <div className="site-shell process-grid">
          <div className="process-intro" data-reveal>
            <div className="eyebrow">How the project moves</div>
            <h2 className="section-title compact">
              A professional process
              <span>before the first tool arrives.</span>
            </h2>

            <p>
              Strong contractor websites do not only show finished rooms. They
              reduce uncertainty by explaining what happens next.
            </p>
          </div>

          <div className="process-list">
            {process.map((item) => (
              <article className="process-item" key={item.step} data-reveal>
                <span>{item.step}</span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="proof-section">
        <div className="site-shell proof-grid">
          <div className="proof-card proof-card-dark" data-reveal>
            <span className="proof-kicker">For a real client build</span>
            <h2>Replace claims with evidence.</h2>
            <p>
              Add only verified reviews, real accreditations, correct insurance
              details, genuine project photography and service areas the
              business actually covers.
            </p>
          </div>

          <div className="proof-card proof-card-light" data-reveal>
            <span className="proof-kicker">Conversion essentials</span>
            <ul>
              <li>
                <CheckIcon />
                Tap-to-call or WhatsApp on mobile
              </li>
              <li>
                <CheckIcon />
                Real projects close to the target customer
              </li>
              <li>
                <CheckIcon />
                One clear quote path on every page
              </li>
              <li>
                <CheckIcon />
                Fast loading and readable mobile layouts
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section id="faq" className="section faq-section">
        <div className="site-shell faq-grid">
          <div className="faq-intro" data-reveal>
            <div className="eyebrow">Frequently asked</div>
            <h2 className="section-title compact">
              Answer the questions
              <span>before they become objections.</span>
            </h2>
          </div>

          <div className="faq-list" data-reveal>
            {faqs.map((faq) => (
              <details key={faq.question}>
                <summary>
                  <span>{faq.question}</span>
                  <span className="faq-plus" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="quote" className="quote-section">
        <div className="site-shell quote-grid">
          <div className="quote-copy" data-reveal>
            <div className="eyebrow eyebrow-light">Project enquiry</div>
            <h2>Make the next step feel simple.</h2>
            <p>
              This demonstration form creates an email to AN Digital Studio.
              Production client sites can connect the same interface to the
              contractor’s email, WhatsApp, CRM or approved form provider.
            </p>

            <div className="quote-contact">
              <span>Demo enquiries</span>
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </div>
          </div>

          <form className="quote-form" onSubmit={submitDemoQuote} data-reveal>
            <div className="form-row">
              <label>
                Your name
                <input
                  type="text"
                  name="name"
                  placeholder="Alex Morgan"
                  required
                />
              </label>

              <label>
                Postcode / area
                <input
                  type="text"
                  name="postcode"
                  placeholder="SW18"
                  required
                />
              </label>
            </div>

            <label>
              What are you planning?
              <select name="service" defaultValue="" required>
                <option value="" disabled>
                  Select a service
                </option>
                <option>Home extension</option>
                <option>Loft conversion</option>
                <option>Full refurbishment</option>
                <option>Kitchen / interior</option>
                <option>Something else</option>
              </select>
            </label>

            <label>
              Tell us a little about the project
              <textarea
                name="details"
                rows={5}
                placeholder="What would you like to change, and when are you hoping to start?"
                required
              />
            </label>

            <button type="submit" className="button button-accent form-button">
              Prepare demo enquiry
              <ArrowIcon />
            </button>

            <p className="form-note">
              Demo only. No contractor booking is created by this form.
            </p>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-shell footer-top">
          <div>
            <a href="#top" className="brand footer-brand">
              <span className="brand-mark">A</span>
              <span className="brand-copy">
                <strong>{business.shortName}</strong>
                <span>Construction + Renovations</span>
              </span>
            </a>

            <p>
              Concept contractor website created to demonstrate a premium,
              conversion-focused build for UK trades businesses.
            </p>
          </div>

          <div className="footer-links">
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#process">Process</a>
            <a href="#faq">FAQ</a>
          </div>
        </div>

        <div className="site-shell footer-bottom">
          <span>
            © {new Date().getFullYear()} Apex concept website. Example content
            only.
          </span>

          <a
            href="https://www.andigitalstudio.com"
            target="_blank"
            rel="noreferrer"
          >
            Designed & built by AN Digital Studio
            <ArrowIcon />
          </a>
        </div>
      </footer>
    </main>
  );
}
