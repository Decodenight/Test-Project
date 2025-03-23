import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleMobileMenu } from '../store/uiSlice';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';

const Navbar = () => {
  const dispatch = useDispatch();
  const isMobileMenuOpen = useSelector((state) => state.ui.isMobileMenuOpen);

  return (
    <nav className="bg-white fixed w-full z-50 top-0 left-0 border-b border-gray-200">
      <div className="max-w-[1600px] mx-auto px-5">
        <div className="flex justify-between items-center h-[65px]">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex-shrink-0">
              <img
                className="h-[25px] w-auto"
                src="https://a.slack-edge.com/bv1-10/slack_logo-ebd02d1.svg"
                alt="Slack"
              />
            </Link>
            <div className="hidden lg:flex items-center space-x-6">
              <Link to="/product" className="text-[15px] text-gray-700 hover:text-[#1264a3] font-medium">
                Product
              </Link>
              <Link to="/enterprise" className="text-[15px] text-gray-700 hover:text-[#1264a3] font-medium">
                Enterprise
              </Link>
              <Link to="/resources" className="text-[15px] text-gray-700 hover:text-[#1264a3] font-medium">
                Resources
              </Link>
              <Link to="/pricing" className="text-[15px] text-gray-700 hover:text-[#1264a3] font-medium">
                Pricing
              </Link>
            </div>
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <button className="text-gray-700 hover:text-[#1264a3]">
              <FaSearch size={16} />
            </button>
            <Link to="/signin" className="text-[15px] text-gray-700 hover:text-[#1264a3] font-medium">
              Sign in
            </Link>
            <button className="text-[#541554] hover:text-[#1264a3] text-[13px] font-bold px-3">
              TALK TO SALES
            </button>
            <button className="bg-[#541554] text-white text-[13px] font-bold px-4 py-2 rounded hover:bg-[#4a154b]">
              TRY FOR FREE
            </button>
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => dispatch(toggleMobileMenu())}
              className="p-2 text-gray-600"
            >
              {isMobileMenuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white">
          <div className="px-4 pt-2 pb-3 space-y-2">
            <Link to="/product" className="block py-2 text-base text-gray-700">
              Product
            </Link>
            <Link to="/enterprise" className="block py-2 text-base text-gray-700">
              Enterprise
            </Link>
            <Link to="/resources" className="block py-2 text-base text-gray-700">
              Resources
            </Link>
            <Link to="/pricing" className="block py-2 text-base text-gray-700">
              Pricing
            </Link>
            <Link to="/signin" className="block py-2 text-base text-gray-700">
              Sign in
            </Link>
            <div className="pt-4 space-y-4">
              <button className="w-full text-left text-[#541554] font-bold py-2">
                TALK TO SALES
              </button>
              <button className="w-full bg-[#541554] text-white font-bold py-3 px-4 rounded">
                TRY FOR FREE
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;