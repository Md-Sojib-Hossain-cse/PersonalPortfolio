import About from "@/modules/home/About";
import Banner from "@/modules/home/Banner";
import Blogs from "@/modules/home/Blogs";
import Contact from "@/modules/home/Contact";
import Projects from "@/modules/home/Projects";
import WhyShouldHireMe from "@/modules/home/WhyHireMe";

const HomePage = () => {
  return (
    <div className="min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <Banner></Banner>
      <About></About>
      <WhyShouldHireMe></WhyShouldHireMe>
      <Projects></Projects>
      <Blogs></Blogs>
      <Contact></Contact>
    </div>
  );
};

export default HomePage;
