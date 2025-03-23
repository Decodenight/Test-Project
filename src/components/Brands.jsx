const Brands = () => {
  const brands = [
    { name: 'Fox', logo: 'https://a.slack-edge.com/e2fa17/marketing/img/logos/company/_foxcorporation.png' },
    { name: 'Lonely Planet', logo: 'https://a.slack-edge.com/ce67d/marketing/img/logos/company/logo-lonely-planet.png' },
    { name: 'Intuit', logo: 'https://a.slack-edge.com/ce67d/marketing/img/logos/company/logo-intuit.png' },
    { name: 'Carvana', logo: 'https://a.slack-edge.com/ce67d/marketing/img/logos/company/logo-carvana.png' },
    { name: 'Kiva', logo: 'https://a.slack-edge.com/ce67d/marketing/img/logos/company/logo-kiva.png' },
    { name: 'Target', logo: 'https://a.slack-edge.com/ce67d/marketing/img/logos/company/logo-target-corporation.png' }
  ];

  return (
    <div className="bg-white py-14">
      <div className="max-w-[1600px] mx-auto px-5">
        <div className="grid grid-cols-3 md:grid-cols-6 gap-x-12 gap-y-8 items-center">
          {brands.map((brand) => (
            <div key={brand.name} className="flex justify-center">
              <img
                className="h-8 md:h-10 object-contain grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-200"
                src={brand.logo}
                alt={brand.name}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brands;