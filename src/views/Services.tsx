import FAQ from "../components/home/servicespagecomponent/FAQ";
import OurBlog from "../components/home/servicespagecomponent/OurBlog";
import Servicebanner from "../components/home/servicespagecomponent/Servicebanner";
import ServiceOfferings from "../components/home/servicespagecomponent/ServiceOfferings";

const Services = () => {
  return (
    <>
      <Servicebanner />
      <ServiceOfferings />
      <FAQ />
      <OurBlog />
    </>
  );
};

export default Services;
