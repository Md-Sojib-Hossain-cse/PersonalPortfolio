// import AOS from "aos";
// import "aos/dist/aos.css";
// AOS.init();

import SectionTitle from "@/components/ui/sectionTitle";

const Blogs = () => {
  return (
    <section id="blogs" className="px-4 md:px-6">
      <SectionTitle heading="Blogs"></SectionTitle>
      <h3 data-aos="fade-up" data-aos-delay="200">
        No blogs available write now...
      </h3>
    </section>
  );
};

export default Blogs;
