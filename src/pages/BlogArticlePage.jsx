import React from 'react';
import { 
  Calendar, 
  User, 
  Clock, 
  Tag, 
  ArrowLeft, 
  Share2, 
  CheckCircle2, 
  Phone, 
  MapPin, 
  ChevronRight,
  Search,
  ExternalLink,
  ShieldCheck,
  Sparkles,
  BarChart3,
  Globe,
  Check
} from 'lucide-react';
import { BLOG_POSTS } from '../data/blogData';
import { HOSPITAL_INFO } from '../data/dentalData';
import './BlogArticlePage.css';

export default function BlogArticlePage({ setActivePage, openAppointmentModal }) {
  const article = BLOG_POSTS[0]; // The uploaded PDF article

  return (
    <article className="blog-article-page">
      {/* Article Breadcrumbs & Top Banner */}
      <section className="article-hero-section">
        <div className="container">
          <div className="article-breadcrumbs">
            <button className="breadcrumb-link-btn" onClick={() => setActivePage('home')}>
              Home
            </button>
            <ChevronRight size={14} />
            <button className="breadcrumb-link-btn" onClick={() => setActivePage('blog')}>
              Blogs
            </button>
            <ChevronRight size={14} />
            <span className="breadcrumb-current">Digital Marketing Strategy</span>
          </div>

          <div className="article-category-badge">
            <Tag size={13} /> {article.category}
          </div>

          <h1 className="article-hero-title">
            {article.title}
          </h1>

          <p className="article-hero-subtitle">
            {article.subtitle}
          </p>

          <div className="article-meta-row">
            <div className="meta-item">
              <User size={15} />
              <span>By <strong>{article.author}</strong></span>
            </div>
            <div className="meta-item">
              <Calendar size={15} />
              <span>{article.date}</span>
            </div>
            <div className="meta-item">
              <Clock size={15} />
              <span>{article.readTime}</span>
            </div>
            <div className="meta-item keyword-tag">
              <Search size={14} />
              <span>Primary Keyword: <strong>{article.primaryKeyword}</strong></span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="section-padding article-body-section">
        <div className="container article-layout-grid">
          {/* Main Article Body */}
          <div className="article-content-container">
            {/* Featured Image */}
            <div className="article-featured-image-box">
              <img 
                src={article.image} 
                alt="Digital marketing strategy for dental clinics landing page"
                className="article-featured-img" 
              />
              <span className="image-caption-text">
                Modern dental clinic digital marketing — from online search to appointment booking
              </span>
            </div>

            {/* Introduction */}
            <section className="article-section">
              <h2 className="article-h2">Introduction</h2>
              <p>
                In today's digital world, many people search online before choosing a dentist. They look for 
                nearby dental clinics, compare available treatments, read reviews and check clinic websites 
                before booking an appointment.
              </p>
              <p>
                A professional website combined with an effective <strong>digital marketing strategy for dental clinics</strong> can help a clinic improve its online visibility, build trust and encourage more appointment enquiries.
              </p>
              <p>
                A well-designed dental clinic landing page should provide clear information about treatments, 
                dentists, clinic location and appointment booking. However, creating a website alone is not 
                enough. Clinics also need keyword research, local SEO, useful content, social media marketing 
                and regular performance tracking.
              </p>
              <p>
                This report presents a practical digital marketing strategy for <strong>{HOSPITAL_INFO.name}</strong> to strengthen its 
                online presence and connect with potential patients.
              </p>

              {/* Key Highlights Callout */}
              <div className="highlights-callout-card">
                <h3 className="callout-heading">
                  <Sparkles size={18} className="text-primary" /> Key Highlights
                </h3>
                <ul className="article-bullets">
                  {article.keyHighlights.map((hl, idx) => (
                    <li key={idx}>
                      <CheckCircle2 size={16} className="text-primary flex-shrink" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>

            {/* 1. Target Audience and Patient Personas */}
            <section className="article-section">
              <h2 className="article-h2">1. Target Audience and Patient Personas</h2>
              <p>
                A target audience is the group of people a dental clinic wants to reach through its marketing 
                activities. Patient personas help the clinic understand their needs, concerns and treatment 
                interests.
              </p>

              <div className="persona-grid">
                <div className="persona-card">
                  <div className="persona-num">1.1</div>
                  <h4>Families and Adults</h4>
                  <p>Families may need routine dental check-ups, professional cleaning, fillings and general dental care.</p>
                  <div className="persona-approach">
                    <strong>Marketing approach:</strong> Share preventive dental care tips, information about available services and easy appointment booking options.
                  </div>
                </div>

                <div className="persona-card">
                  <div className="persona-num">1.2</div>
                  <h4>Parents and Children</h4>
                  <p>Parents often search for child-friendly dental care, oral hygiene guidance and preventive treatments for their children.</p>
                  <div className="persona-approach">
                    <strong>Marketing approach:</strong> Publish educational content about children's oral hygiene and explain available pediatric dental services if offered by the clinic.
                  </div>
                </div>

                <div className="persona-card">
                  <div className="persona-num">1.3</div>
                  <h4>Patients with Dental Pain</h4>
                  <p>People experiencing toothache or other dental discomfort may search for a nearby dentist and quick appointment information.</p>
                  <div className="persona-approach">
                    <strong>Marketing approach:</strong> Display accurate contact details, clinic hours and appointment options prominently.
                  </div>
                </div>

                <div className="persona-card">
                  <div className="persona-num">1.4</div>
                  <h4>Patients Interested in Cosmetic Dentistry</h4>
                  <p>Some patients may be interested in teeth whitening, smile improvement or other cosmetic dental services.</p>
                  <div className="persona-approach">
                    <strong>Marketing approach:</strong> Provide factual treatment explanations, information about consultation requirements and details of the services actually offered.
                  </div>
                </div>
              </div>

              <div className="persona-card mt-3">
                <div className="persona-num">1.5</div>
                <h4>Patients Seeking Specialized Treatments</h4>
                <p>Patients may search for root canal treatment, braces, aligners, dental implants or other specialized procedures.</p>
                <div className="persona-approach">
                  <strong>Marketing approach:</strong> Create dedicated service pages explaining the procedure, its suitability, the consultation process and frequently asked questions.
                </div>
              </div>

              <div className="important-point-box">
                <strong>Important Point:</strong> Different patient groups have different needs. Tailoring website content to these needs helps visitors find relevant information more easily.
              </div>
            </section>

            {/* 2. SEO Keyword Research for Dental Clinics */}
            <section className="article-section">
              <h2 className="article-h2">2. SEO Keyword Research for Dental Clinics</h2>
              <p>
                Keyword research identifies the words and phrases people use when searching for dental 
                services online. Using relevant terms naturally can help the clinic's website appear for 
                appropriate searches.
              </p>

              <h3 className="article-h3">2.1 Recommended Dental SEO Keywords</h3>
              <div className="table-responsive">
                <table className="content-table">
                  <thead>
                    <tr>
                      <th>Keyword category</th>
                      <th>Example keywords</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Primary keyword</strong></td>
                      <td>Digital marketing for dental clinics</td>
                    </tr>
                    <tr>
                      <td>General services</td>
                      <td>Dental clinic in Tirupati</td>
                    </tr>
                    <tr>
                      <td>Local search</td>
                      <td>Dentist near me</td>
                    </tr>
                    <tr>
                      <td>Treatment-related</td>
                      <td>Root canal treatment in Tirupati</td>
                    </tr>
                    <tr>
                      <td>Cosmetic dentistry</td>
                      <td>Teeth whitening in Tirupati</td>
                    </tr>
                    <tr>
                      <td>Orthodontics</td>
                      <td>Braces and aligners in Tirupati</td>
                    </tr>
                    <tr>
                      <td>Appointment intent</td>
                      <td>Book a dental appointment in Tirupati</td>
                    </tr>
                    <tr>
                      <td>Informational</td>
                      <td>How to maintain healthy teeth</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="table-footnote">
                <em>Note: Location-based keywords specify Tirupati for verified clinic relevance. Treatment-specific keywords apply to verified services offered by Dr. P. Firoz Babu.</em>
              </p>

              <h3 className="article-h3">2.2 How to Use Keywords</h3>
              <ul className="article-checklist">
                <li>Include the primary keyword in the blog title and introduction.</li>
                <li>Use secondary keywords in relevant headings and paragraphs.</li>
                <li>Add location-based terms to appropriate service pages.</li>
                <li>Write descriptive meta titles and meta descriptions.</li>
                <li>Add useful internal links to the services, doctors and contact pages.</li>
                <li>Write accurate image alt text describing each image.</li>
              </ul>

              <div className="tip-box">
                <strong>SEO Tip:</strong> Repeat the primary keyword naturally throughout the article. Do not force it into every paragraph or use keyword stuffing. Google Keyword Planner can help identify keyword ideas and estimated search demand. Google Trends can help compare interest in different search terms over time.
              </div>
            </section>

            {/* 3. Competitor Analysis */}
            <section className="article-section">
              <h2 className="article-h2">3. Competitor Analysis</h2>
              <p>
                Competitor analysis helps a dental clinic understand how other clinics attract patients online and 
                identify opportunities to improve its own marketing strategy.
              </p>

              <div className="steps-container">
                <div className="step-row">
                  <span className="step-badge">3.1</span>
                  <div>
                    <h4>Identify Local Competitors</h4>
                    <p>Search Google for phrases such as “dental clinic in Tirupati” and “dentist near Municipal Office Junction.” Identify nearby clinics that offer similar services and serve the same target audience.</p>
                  </div>
                </div>

                <div className="step-row">
                  <span className="step-badge">3.2</span>
                  <div>
                    <h4>Compare Website Quality</h4>
                    <p>Review competitors' websites to understand how they present their treatments, dentists, clinic location, contact details and appointment booking options.</p>
                  </div>
                </div>

                <div className="step-row">
                  <span className="step-badge">3.3</span>
                  <div>
                    <h4>Analyze SEO Performance</h4>
                    <p>Observe the keywords competitors appear to target, the quality of their service pages and whether they publish useful dental health content.</p>
                  </div>
                </div>

                <div className="step-row">
                  <span className="step-badge">3.4</span>
                  <div>
                    <h4>Review Google Business Profiles</h4>
                    <p>Compare publicly visible information such as business categories, opening hours, photographs, services and review responses.</p>
                  </div>
                </div>

                <div className="step-row">
                  <span className="step-badge">3.5</span>
                  <div>
                    <h4>Compare Social Media Content</h4>
                    <p>Review the types of posts competitors publish, such as oral hygiene tips, dentist introductions, educational videos and clinic updates.</p>
                  </div>
                </div>
              </div>

              <h3 className="article-h3 mt-4">Competitor Analysis Table</h3>
              <div className="table-responsive">
                <table className="content-table">
                  <thead>
                    <tr>
                      <th>Area</th>
                      <th>What to evaluate</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><strong>Website</strong></td>
                      <td>Design, navigation and mobile usability</td>
                    </tr>
                    <tr>
                      <td><strong>SEO</strong></td>
                      <td>Relevant keywords and service pages</td>
                    </tr>
                    <tr>
                      <td><strong>Local SEO</strong></td>
                      <td>Business profile accuracy and local visibility</td>
                    </tr>
                    <tr>
                      <td><strong>Content</strong></td>
                      <td>Educational blogs and treatment explanations</td>
                    </tr>
                    <tr>
                      <td><strong>Social media</strong></td>
                      <td>Posting frequency, engagement and content quality</td>
                    </tr>
                    <tr>
                      <td><strong>Appointment booking</strong></td>
                      <td>Ease of contacting the clinic</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="takeaway-box">
                <strong>Key Takeaway:</strong> The goal is not simply to copy competitors. It is to identify gaps and provide a more useful, trustworthy and convenient experience for potential patients.
              </div>
            </section>

            {/* 4. Content Strategy for a Dental Clinic */}
            <section className="article-section">
              <h2 className="article-h2">4. Content Strategy for a Dental Clinic</h2>
              <p>
                Content marketing involves publishing useful information that helps patients understand dental 
                health and available treatments. A consistent content strategy can improve engagement, support SEO and answer common 
                questions before a patient visits the clinic.
              </p>

              <div className="content-strategy-grid">
                <div className="strategy-card">
                  <h4>4.1 Educational Blog Posts</h4>
                  <p>Publish articles on topics such as:</p>
                  <ul>
                    <li>How to Maintain Healthy Teeth and Gums</li>
                    <li>Common Causes of Tooth Sensitivity</li>
                    <li>When Should You Visit a Dentist?</li>
                    <li>Understanding Root Canal Treatment</li>
                    <li>Tips for Children's Oral Hygiene</li>
                  </ul>
                  <small><em>All medical information should be reviewed for accuracy by a qualified dental professional.</em></small>
                </div>

                <div className="strategy-card">
                  <h4>4.2 Service Pages</h4>
                  <p>Create separate pages for the clinic's actual services. Each page should explain the treatment, who may need it, the consultation process and how to book an appointment.</p>
                </div>

                <div className="strategy-card">
                  <h4>4.3 Dentist and Clinic Introduction</h4>
                  <p>Introduce the dentists using verified qualifications, experience and areas of practice. Use genuine clinic and team photographs.</p>
                </div>

                <div className="strategy-card">
                  <h4>4.4 Frequently Asked Questions</h4>
                  <p>Answer common questions about appointment booking, clinic hours, consultation procedures, available treatments and location.</p>
                </div>
              </div>

              <div className="visual-content-box">
                <h4>4.5 Visual Content</h4>
                <p>Use simple infographics, short educational videos and clear photographs to make information easier to understand.</p>
                <div className="important-point-box">
                  <strong>Important Point:</strong> Dental content should educate rather than make exaggerated treatment claims or promise guaranteed results.
                </div>
              </div>
            </section>

            {/* 5. Landing Page Recommendations */}
            <section className="article-section">
              <h2 className="article-h2">5. Landing Page Recommendations</h2>
              <p>
                A dental clinic landing page should help visitors understand the clinic's services and make it 
                easy to request an appointment.
              </p>

              <div className="landing-recommendations-list">
                <div className="rec-item">
                  <strong>5.1 Clear Headline:</strong> Use a direct headline explaining the clinic's offering (e.g., “Your Dental Care Starts Here — Book an Appointment Today”).
                </div>
                <div className="rec-item">
                  <strong>5.2 Treatment Information:</strong> Present available services clearly, with links to detailed treatment pages where appropriate.
                </div>
                <div className="rec-item">
                  <strong>5.3 Dentist Information:</strong> Display verified dentist names, qualifications, professional photographs and relevant specialties.
                </div>
                <div className="rec-item">
                  <strong>5.4 Appointment Booking Form:</strong> Keep the form simple. Collect only necessary information, such as a patient's name, preferred contact method and appointment preference.
                </div>
                <div className="rec-item">
                  <strong>5.5 Visible Call-to-Action Buttons:</strong> Use clear buttons such as <em>Book an Appointment</em>, <em>Call the Clinic</em>, <em>Explore Dental Services</em>, and <em>Get Directions</em>.
                </div>
                <div className="rec-item">
                  <strong>5.6 Clinic Location and Contact Details:</strong> Display the verified address, phone number, opening hours and directions.
                </div>
                <div className="rec-item">
                  <strong>5.7 Mobile-Friendly Design:</strong> Make sure visitors can read the content, tap the contact buttons and submit the form easily on mobile devices.
                </div>
                <div className="rec-item">
                  <strong>5.8 Trust and Privacy:</strong> Provide accurate clinic information, a clear privacy notice and secure handling of appointment enquiries.
                </div>
              </div>

              <div className="takeaway-box">
                <strong>Key Recommendation:</strong> Place the appointment CTA and contact details where visitors can find them easily without scrolling through the entire page.
              </div>
            </section>

            {/* 6. Google Business Profile Ideas */}
            <section className="article-section">
              <h2 className="article-h2">6. Google Business Profile Ideas</h2>
              <p>
                Google Business Profile can help patients discover a dental clinic through relevant Google 
                Search and Maps results.
              </p>

              <div className="gbp-grid">
                <div className="gbp-item">
                  <strong>6.1 Complete Business Information:</strong> Enter the clinic's correct name, address, phone number, opening hours and website link.
                </div>
                <div className="gbp-item">
                  <strong>6.2 Choose the Appropriate Category:</strong> Select the most accurate primary business category (e.g., Dental Clinic, Orthodontist, Dentist) and add relevant categories only when they genuinely describe the clinic.
                </div>
                <div className="gbp-item">
                  <strong>6.3 Add Genuine Photographs:</strong> Upload clear photographs of the clinic exterior, reception, treatment areas and dental team, subject to appropriate permissions.
                </div>
                <div className="gbp-item">
                  <strong>6.4 Keep Service Details Updated:</strong> List the dental services actually provided and ensure descriptions are accurate.
                </div>
                <div className="gbp-item">
                  <strong>6.5 Publish Useful Updates:</strong> Share occasional updates about clinic hours, oral health awareness, new services and general dental education.
                </div>
                <div className="gbp-item">
                  <strong>6.6 Manage Reviews Professionally:</strong> Respond politely to public reviews. Protect patient confidentiality and avoid revealing personal or medical details. Follow applicable professional rules when requesting reviews.
                </div>
              </div>

              <div className="important-point-box">
                <strong>Important Point:</strong> Keep the clinic's Google Business Profile accurate and up to date. Never add promotional keywords to the business name if they are not part of its real-world name.
              </div>
            </section>

            {/* 7. Social Media Marketing Plan */}
            <section className="article-section">
              <h2 className="article-h2">7. Social Media Marketing Plan</h2>
              <p>
                Social media helps dental clinics educate audiences, introduce their team and maintain 
                communication with existing and potential patients.
              </p>

              <div className="social-channels-row">
                <div className="social-channel-box">
                  <Instagram size={22} className="text-primary" />
                  <h4>7.1 Instagram</h4>
                  <p>Post oral health tips, short educational reels, clinic updates and introductions to the dental team.</p>
                </div>
                <div className="social-channel-box">
                  <Facebook size={22} className="text-primary" />
                  <h4>7.2 Facebook</h4>
                  <p>Share educational articles, clinic announcements, appointment information and relevant community health content.</p>
                </div>
              </div>

              <h3 className="article-h3 mt-3">7.3 Short Educational Videos</h3>
              <p>Create videos answering common questions, such as proper brushing techniques, flossing tips and the importance of regular dental check-ups.</p>

              <h3 className="article-h3 mt-3">7.4 Suggested Weekly Content Calendar</h3>
              <div className="table-responsive">
                <table className="content-table">
                  <thead>
                    <tr>
                      <th>Day</th>
                      <th>Content idea</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Monday</td><td>Oral hygiene tip</td></tr>
                    <tr><td>Tuesday</td><td>Dental service explainer</td></tr>
                    <tr><td>Wednesday</td><td>Short educational reel</td></tr>
                    <tr><td>Thursday</td><td>Dentist or clinic introduction</td></tr>
                    <tr><td>Friday</td><td>Frequently asked dental question</td></tr>
                    <tr><td>Saturday</td><td>Clinic update or appointment information</td></tr>
                    <tr><td>Sunday</td><td>Weekly oral health reminder</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="table-footnote"><em>This is a sample schedule. The clinic can adjust the frequency based on available resources and audience engagement.</em></p>

              <h3 className="article-h3 mt-3">7.5 Engagement Strategy</h3>
              <p>Respond to general questions professionally, provide accurate contact information and direct individual medical concerns to a qualified dentist.</p>
              
              <div className="takeaway-box">
                <strong>Key Point:</strong> Consistent, useful and trustworthy content is more valuable than posting frequently without a clear purpose.
              </div>
            </section>

            {/* 8. Key Performance Indicators (KPIs) */}
            <section className="article-section">
              <h2 className="article-h2">8. Key Performance Indicators (KPIs)</h2>
              <p>
                Key Performance Indicators help a dental clinic measure whether its marketing activities are 
                achieving their objectives.
              </p>

              <h3 className="article-h3">8.1 Important Marketing Metrics</h3>
              <div className="table-responsive">
                <table className="content-table">
                  <thead>
                    <tr>
                      <th>KPI</th>
                      <th>What it measures</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td>Website traffic</td><td>Number of website visitors</td></tr>
                    <tr><td>Organic clicks</td><td>Visits from unpaid search results</td></tr>
                    <tr><td>Search impressions</td><td>How often the website appears in search results</td></tr>
                    <tr><td>Click-through rate (CTR)</td><td>Percentage of impressions generating clicks</td></tr>
                    <tr><td>Appointment enquiries</td><td>Number of booking requests received</td></tr>
                    <tr><td>Landing page conversion rate</td><td>Percentage of visitors completing a desired action</td></tr>
                    <tr><td>Cost per lead</td><td>Advertising spend divided by leads</td></tr>
                    <tr><td>Booked appointments</td><td>Number of appointments scheduled</td></tr>
                    <tr><td>Appointment attendance rate</td><td>Percentage of scheduled appointments attended</td></tr>
                    <tr><td>Social media engagement</td><td>Interactions with published content</td></tr>
                  </tbody>
                </table>
              </div>

              <h3 className="article-h3 mt-4">8.2 Important Formulas</h3>
              <div className="formulas-grid">
                <div className="formula-card">
                  <span className="formula-name">Click-through rate (CTR)</span>
                  <code>CTR = (Clicks ÷ Impressions) × 100</code>
                </div>
                <div className="formula-card">
                  <span className="formula-name">Landing page conversion rate</span>
                  <code>Conversion Rate = (Conversions ÷ Visitors) × 100</code>
                </div>
                <div className="formula-card">
                  <span className="formula-name">Cost per lead (CPL)</span>
                  <code>CPL = Advertising Spend ÷ Number of Leads</code>
                </div>
                <div className="formula-card">
                  <span className="formula-name">Appointment attendance rate</span>
                  <code>Attendance Rate = (Appointments Attended ÷ Appointments Scheduled) × 100</code>
                </div>
              </div>

              <h3 className="article-h3 mt-4">8.3 Performance Tracking</h3>
              <p>
                Review selected KPIs monthly and compare them with previous periods. Identify which pages 
                and channels produce relevant enquiries, where visitors leave the booking process, and which content 
                attracts useful engagement. Use aggregate reporting where possible, and handle patient and health-related 
                information carefully.
              </p>
              <div className="important-point-box">
                <strong>Important Point:</strong> Measure real appointment outcomes wherever possible, not just website visits, likes or clicks.
              </div>
            </section>

            {/* 9. Digital Marketing Tools */}
            <section className="article-section">
              <h2 className="article-h2">9. Digital Marketing Tools</h2>
              <p>The following tools support the dental clinic marketing strategy:</p>

              <div className="tools-grid">
                <div className="tool-card">
                  <strong>Google Docs:</strong> Prepare the marketing report, content calendar, keyword list and campaign plans.
                </div>
                <div className="tool-card">
                  <strong>Google Keyword Planner:</strong> Find keyword ideas and estimated search demand for dental services.
                </div>
                <div className="tool-card">
                  <strong>Google Trends:</strong> Compare search interest in dental topics and related keywords over time.
                </div>
                <div className="tool-card">
                  <strong>ChatGPT:</strong> Brainstorm blog topics, prepare initial drafts, organize content calendars and generate caption ideas. Review all dental and medical information before publishing.
                </div>
                <div className="tool-card">
                  <strong>Canva:</strong> Design blog images, infographics, social media posts, presentation slides and marketing reports.
                </div>
              </div>
              <p className="mt-2 text-muted">
                <em>These tools help organize marketing activities and produce content efficiently, but the clinic should verify facts, protect patient information and follow applicable professional advertising rules.</em>
              </p>
            </section>

            {/* 10. Recommended Action Plan */}
            <section className="article-section">
              <h2 className="article-h2">10. Recommended Action Plan</h2>

              <div className="action-plan-timeline">
                <div className="timeline-stage">
                  <div className="stage-pill">Stage 1: Research</div>
                  <ul>
                    <li>Identify target audiences and patient personas.</li>
                    <li>Research relevant local and treatment-specific keywords.</li>
                    <li>Analyze nearby competitors.</li>
                    <li>Review the existing website and its appointment booking process.</li>
                  </ul>
                </div>

                <div className="timeline-stage">
                  <div className="stage-pill">Stage 2: Website Optimization</div>
                  <ul>
                    <li>Improve headings, service descriptions and contact details.</li>
                    <li>Add verified dentist profiles and genuine clinic photographs.</li>
                    <li>Create clear appointment booking options.</li>
                    <li>Check mobile usability and page loading speed.</li>
                  </ul>
                </div>

                <div className="timeline-stage">
                  <div className="stage-pill">Stage 3: Content and Local Marketing</div>
                  <ul>
                    <li>Update the Google Business Profile.</li>
                    <li>Publish useful dental health articles.</li>
                    <li>Prepare an Instagram and Facebook content calendar.</li>
                    <li>Improve relevant local search visibility.</li>
                  </ul>
                </div>

                <div className="timeline-stage">
                  <div className="stage-pill">Stage 4: Measurement and Improvement</div>
                  <ul>
                    <li>Configure website analytics and enquiry tracking.</li>
                    <li>Monitor website traffic and appointment enquiries.</li>
                    <li>Review conversion rates and cost per lead where paid advertising is used.</li>
                    <li>Improve the website and content based on actual results.</li>
                  </ul>
                </div>
              </div>
            </section>

            {/* Conclusion and Call to Action */}
            <section className="article-section">
              <h2 className="article-h2">Conclusion</h2>
              <p>
                A successful digital marketing strategy for dental clinics combines target audience research, 
                relevant SEO keywords, competitor analysis, useful content, Google Business Profile 
                optimization, social media marketing and performance measurement.
              </p>
              <p>
                For <strong>{HOSPITAL_INFO.name}</strong>, these activities can help potential patients discover relevant dental services, 
                understand the clinic's offering and request appointments more conveniently.
              </p>
              <p>
                By focusing on accurate information, patient-friendly content, local visibility and measurable 
                marketing outcomes, the clinic can build a stronger digital presence and continuously improve 
                its marketing strategy.
              </p>

              {/* Call to Action Card */}
              <div className="article-final-cta-card">
                <h3>Take the Next Step Toward Better Dental Care</h3>
                <p>
                  Contact <strong>{HOSPITAL_INFO.name}</strong> to learn about available services and appointment options with <strong>{HOSPITAL_INFO.doctor.name}</strong>.
                </p>
                <div className="article-cta-btns">
                  <button className="btn btn-primary btn-lg" onClick={openAppointmentModal}>
                    <Calendar size={18} /> Book an Appointment
                  </button>
                  <button className="btn btn-secondary btn-lg" onClick={() => setActivePage('contact')}>
                    <Phone size={18} /> Contact the Clinic
                  </button>
                </div>
              </div>
            </section>

            {/* Author Footer */}
            <div className="article-author-box card">
              <div className="author-avatar-badge">VG</div>
              <div>
                <h4>About {article.author}</h4>
                <p>Digital Marketing Specialist & Healthcare Content Contributor • Published on {article.date}</p>
                <span className="author-clinic-link">
                  Published for <strong>{HOSPITAL_INFO.name}</strong> • Tirupati, Andhra Pradesh
                </span>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="article-sidebar">
            {/* Quick Appointment Box */}
            <div className="sidebar-widget card appointment-widget">
              <div className="widget-header">
                <Calendar size={20} className="text-primary" />
                <h4>Schedule Consultation</h4>
              </div>
              <p>Consult directly with <strong>{HOSPITAL_INFO.doctor.name}</strong> for Braces, Implants & Root Canals.</p>
              <button className="btn btn-primary w-full" onClick={openAppointmentModal}>
                Book Appointment
              </button>
              <a href={`tel:${HOSPITAL_INFO.phoneRaw}`} className="sidebar-call-link">
                <Phone size={14} /> {HOSPITAL_INFO.phone}
              </a>
            </div>

            {/* Clinic Info Widget */}
            <div className="sidebar-widget card">
              <h4>Verified Clinic Location</h4>
              <p className="sidebar-loc-text">
                <MapPin size={16} className="text-primary inline-icon" />
                {HOSPITAL_INFO.shortAddress}
              </p>
              <div className="sidebar-hours">
                <strong>Hours:</strong> Mon - Sat: 10AM - 8:30PM | Sun: 10AM - 1:30PM
              </div>
              <button 
                className="btn btn-outline btn-sm w-full mt-2" 
                onClick={() => setActivePage('contact')}
              >
                Directions & Map
              </button>
            </div>

            {/* Popular Treatments Quick Links */}
            <div className="sidebar-widget card">
              <h4>Key Treatments</h4>
              <ul className="sidebar-links-list">
                <li><button onClick={() => setActivePage('treatments')}>Braces & Aligners</button></li>
                <li><button onClick={() => setActivePage('treatments')}>Dental Implants</button></li>
                <li><button onClick={() => setActivePage('treatments')}>Root Canal Treatment</button></li>
                <li><button onClick={() => setActivePage('treatments')}>Teeth Whitening</button></li>
              </ul>
            </div>

            {/* Back to All Blogs Button */}
            <button 
              className="btn btn-secondary w-full"
              onClick={() => setActivePage('blog')}
            >
              <ArrowLeft size={16} /> Back to All Articles
            </button>
          </aside>
        </div>
      </section>
    </article>
  );
}
