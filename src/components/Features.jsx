import { Link } from 'react-router-dom';

const TrustedCompanies = () => (
  <div className="py-16 border-b border-gray-200">
    <div className="max-w-[1200px] mx-auto px-5">
      <p className="text-center text-sm uppercase tracking-wider text-gray-500 mb-8">
        TRUSTED BY COMPANIES ALL OVER THE WORLD
      </p>
      <div className="flex flex-wrap justify-center items-center gap-12">
        <img
          src="https://1000logos.net/wp-content/uploads/2017/08/Airbnb-Logo.png"
          alt="Airbnb"
          className="h-8"
        />
        <img
          src="https://gpm.nasa.gov/sites/default/files/NASA-Logo-Large.jpg"
          alt="NASA"
          className="h-11"
        />
        <img
          src="https://freelogopng.com/images/all_img/1659761297uber-icon.png"
          alt="Uber"
          className="h-11"
        />
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Target_logo.svg/648px-Target_logo.svg.png"
          alt="Target"
          className="h-11"
        />
        <img
          src="https://1000logos.net/wp-content/uploads/2017/04/New-York-Times-logo-768x432.png"
          alt="New York Times"
          className="h-11"
        />
        <img
          src="https://freelogopng.com/images/all_img/1659110030etsy-icon-png.png"
          alt="Etsy"
          className="h-11"
        />
      </div>
    </div>
  </div>
);

const Features = () => {
  return (
    <>
      <TrustedCompanies />
      <div className="max-w-[1200px] mx-auto px-5 py-16">
        <div className="flex flex-col lg:flex-row items-center gap-16 mb-24">
          <div className="lg:w-1/2">
            <img
              src=""
              alt="Bring your team together"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-[#1d1c1d] mb-4">
              Bring your team together
            </h2>
            <p className="text-lg text-[#454245] mb-4">
              At the heart of Slack are channels: organized spaces for everyone
              and everything you need for work. In channels, it's easier to
              connect across departments, offices, time zones and even other
              companies.
            </p>
            <Link
              to="/features/channels"
              className="text-[#1264a3] hover:underline inline-flex items-center"
            >
              Learn more about channels →
            </Link>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 mb-24">
          <div className="lg:w-1/2">
            <img
              src=""
              alt="Choose how you want to work"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-[#1d1c1d] mb-4">
              Choose how you want to work
            </h2>
            <p className="text-lg text-[#454245] mb-4">
              In Slack, you've got all the flexibility to work when, where and
              how it's best for you. You can easily chat, send audio and video
              clips, or join a huddle to talk things through live.
            </p>
            <Link
              to="/features/flexibility"
              className="text-[#1264a3] hover:underline inline-flex items-center"
            >
              Learn more about flexible communication →
            </Link>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/2">
            <img
              src=""
              alt="Move faster with your tools in one place"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-4xl font-bold text-[#1d1c1d] mb-4">
              Move faster with your tools in one place
            </h2>
            <p className="text-lg text-[#454245] mb-4">
              With your other work apps connected to Slack, you can work faster
              by switching tabs less. And with powerful tools like Workflow
              Builder, you can automate away routine tasks.
            </p>
            <Link
              to="/features/integrations"
              className="text-[#1264a3] hover:underline inline-flex items-center"
            >
              Learn more about the Slack platform →
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;