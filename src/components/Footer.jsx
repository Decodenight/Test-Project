import { Link } from 'react-router-dom';
import { FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn } from 'react-icons/fa';

const FooterSection = ({ title, links }) => (
  <div>
    <h3 className="text-sm font-bold text-black mb-4">{title}</h3>
    <ul className="space-y-3">
      {links.map((link) => (
        <li key={link}>
          <Link to="/" className="text-sm text-gray-600 hover:text-[#1264a3]">
            {link}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  const sections = {
    'WHY SLACK?': ['Slack vs. Email', 'Channels', 'Engagement', 'Scale', 'Watch the Demo'],
    'PRODUCT': ['Features', 'Integrations', 'Enterprise', 'Solutions', "What's New"],
    'RESOURCES': ['Partners', 'Developers', 'Community', 'Apps', 'Blog', 'Help Center', 'Events'],
    'COMPANY': ['About Us', 'Leadership', 'Investor Relations', 'News', 'Media Kit', 'Careers'],
  };

  return (
    <footer>
      <div className="bg-[#541554] text-white relative">
        <div className="max-w-[1200px] mx-auto px-5 pt-24 pb-16 text-center">
          <h2 className="text-4xl font-bold mb-8">Welcome to your new digital HQ</h2>
          <div className="flex justify-center gap-4">
            <button className="bg-white text-[#541554] px-8 py-3 rounded font-bold text-sm hover:bg-gray-100">
              TRY FOR FREE
            </button>
            <button className="border border-white text-white px-8 py-3 rounded font-bold text-sm hover:bg-[#4a154b]">
              TALK TO SALES
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 36" className="w-full h-auto fill-white">
            <path d="M1440 36H0V0c240 26.4 480 40 720 40s480-13.6 720-40v36z" />
          </svg>
        </div>
      </div>

      <div className="bg-white py-16">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            <div>
              <img
                src="https://a.slack-edge.com/bv1-10/slack_logo-ebd02d1.svg"
                alt="Slack"
                className="h-8 mb-8"
              />
            </div>
            {Object.entries(sections).map(([title, links]) => (
              <FooterSection key={title} title={title} links={links} />
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-gray-200 py-6">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <Link to="/status" className="hover:text-[#1264a3]">Status</Link>
              <Link to="/privacy" className="hover:text-[#1264a3]">Privacy</Link>
              <Link to="/terms" className="hover:text-[#1264a3]">Terms</Link>
              <button className="hover:text-[#1264a3]">Cookie Preferences</button>
              <Link to="/contact" className="hover:text-[#1264a3]">Contact Us</Link>
              <button className="hover:text-[#1264a3]">
                <span className="flex items-center gap-1">
                  <img src="https://a.slack-edge.com/bv1-10/globe-light-d3dbb27.svg" alt="" className="w-4 h-4" />
                  Change Region
                </span>
              </button>
            </div>

            <div className="flex items-center gap-6">
              <a href="https://slack.com/downloads" className="text-sm text-[#1264a3] hover:underline flex items-center gap-2">
                <img src="https://a.slack-edge.com/bv1-10/download-light-9e9c3c5.svg" alt="" className="w-4 h-4" />
                Download Slack
              </a>
              <div className="flex items-center gap-4">
                <a href="https://twitter.com/slackhq" className="text-gray-600 hover:text-[#1264a3]">
                  <FaTwitter size={20} />
                </a>
                <a href="https://www.facebook.com/slackhq" className="text-gray-600 hover:text-[#1264a3]">
                  <FaFacebookF size={20} />
                </a>
                <a href="https://www.youtube.com/slackhq" className="text-gray-600 hover:text-[#1264a3]">
                  <FaYoutube size={20} />
                </a>
                <a href="https://www.linkedin.com/company/slack" className="text-gray-600 hover:text-[#1264a3]">
                  <FaLinkedinIn size={20} />
                </a>
              </div>
            </div>
          </div>

          <p className="text-xs text-gray-600 mt-6">
            ©2024 Slack Technologies, LLC, a Salesforce company. All rights reserved. Various trademarks held by their respective owners.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;