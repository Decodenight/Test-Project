const Stats = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-[1200px] mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1d1c1d] mb-4">
            Teams large and small rely on Slack
          </h2>
          <p className="text-lg text-[#454245]">
            Slack securely scales up to support collaboration at the world's
            biggest companies.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-16 mb-16">
          <div className="text-center">
            <div className="text-5xl font-bold text-[#541554] mb-4">85%</div>
            <p className="text-[#454245]">
              of users say Slack has improved communication*
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-[#541554] mb-4">86%</div>
            <p className="text-[#454245]">
              feel their ability to work remotely has improved*
            </p>
          </div>
          <div className="text-center">
            <div className="text-5xl font-bold text-[#541554] mb-4">88%</div>
            <p className="text-[#454245]">
              feel more connected to their teams*
            </p>
          </div>
        </div>

        <div className="flex justify-center gap-4 mb-16">
          <button className="bg-[#541554] text-white px-6 py-3 rounded font-bold text-sm hover:bg-[#4a154b]">
            MEET SLACK FOR ENTERPRISE
          </button>
          <button className="border border-[#541554] text-[#541554] px-6 py-3 rounded font-bold text-sm hover:border-[#4a154b] hover:text-[#4a154b]">
            TALK TO SALES
          </button>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16 bg-[#f4ede4] rounded-lg p-8">
          <div className="lg:w-1/3">
            <img
              src="https://www.t-mobile.com/news/_admin/uploads/2023/01/nr-article-Freier-03-1-9-23-1.png"
              alt="T-Mobile"
              className="h-60 mb-4"
            />
          </div>
          <div className="lg:w-2/3">
            <blockquote className="text-xl italic text-[#1d1c1d] mb-4">
              "We were able to create a large virtual network of employees that
              can communicate as though they are together. There was a lot of
              disruption in terms of where we worked, but in terms of how we
              worked—very little disruption."
            </blockquote>
            <p className="font-bold text-[#1d1c1d]">Mark Smith</p>
            <p className="text-[#454245]">Technical Lead, T-Mobile</p>
            <a
              href="/customer-stories"
              className="text-[#1264a3] hover:underline mt-4 inline-block"
            >
              See more customer stories →
            </a>
          </div>
        </div>

        <div className="text-center">
          <p className="text-xs text-[#696969]">
            * Based on 2,707 survey responses from weekly Slack users in the US,
            UK, Australia and Canada with a ± 2% margin of error at 95% CI
            (December 2021)
          </p>
        </div>
      </div>
    </div>
  );
};

export default Stats;