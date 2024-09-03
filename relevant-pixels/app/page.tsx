
import Header from "./components/header";
import Personal from "./components/personal";
import Creative from "./components/creative";
import SideMenu from "./components/side";
import Facts from "./components/facts";

interface MenuItem {
  name: string;
  path: string;
}

const menuItems: MenuItem[] = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Contact', path: '/contact' },
];

export default function Home(): JSX.Element {
  return (
    <div className="">
      
      <main className="flex min-h-screen flex-col items-center justify-between">
        <Header/>
        <section className="w-full bg-customGreen dark:bg-customGreen py-8 sm:py-10">
          <div className="text-center text-black dark:text-black">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">Contact</h2>
            <p className="text-center text-black dark:text-black px-10 sm:px-12 text-lg sm:text-md"> Email: qpham2594@gmail.com </p>
          </div>
        </section>
        <div className="w-full">
          <section className="w-full bg-customGreen dark:bg-customGreen py-12 sm:py-20">
            <div className="w-full px-0">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-8 dark:text-black">
                Mission
              </h2>
              <p className="text-center text-black dark:text-black px-10 sm:px-12 text-lg sm:text-md">
                Trends may be fun, but functionality should be priority. My promise to myself and my job is to create websites that are not only aesthetically pleasing, but also functional and inclusive for others. <br/><br/>
                <i>“Design is not just what it looks like and feels like. Design is how it works.”</i> - Steve Jobs
              </p>
            </div>
          </section>
          <div className="w-full wave-divider bg-customGreen dark:bg-customGreen">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full transform rotate-180"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="fill-customDarkGreen dark:fill-customDarkGreen"
              ></path>
            </svg>
          </div>

          <section className="w-full bg-customDarkGreen dark:bg-customDarkGreen py-12 sm:py-12">
            <div className="w-full px-0">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 bg-customDarkGreen text-white dark:text-white">
                Fun Facts
              </h2>
              <div className="text-center">
                <Facts/>
              </div>
            </div>
          </section>  

          <div className="w-full wave-divider bg-customDarkGreen dark:bg-customDarkGreen">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full transform rotate-180"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="fill-customGreen dark:fill-customGreen"
              ></path>
            </svg>
          </div>

          <section className="w-full bg-customGreen dark:bg-customGreen py-12 sm:py-20">
            <div className="w-full px-0">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 dark:text-black">
                Why hire new grads or junior developers? 
              </h2>
            </div>
          </section>  
        </div>

        <div className="w-full">
          <section className="w-full bg-customGreen dark:bg-customGreen py-8 sm:py-10">
            <div className="w-full px-0">
              <p className="text-left text-gray-700 dark:text-black px-10 sm:px-12 text-lg sm:text-md">
              Hiring new grads or junior developers brings significant value to a company. We come with fresh perspectives, a strong eagerness to learn, and a mindset that embraces the latest technologies and trends. Our adaptability and willingness to grow make us quick learners and easier to mold within a company. With a solid foundational knowledge from our recent education, we approach problems with creativity and innovation.
              <br/><br/> Moreover, new grads like us tend to be highly motivated and driven. We are eager to contribute and prove ourselves, bringing enthusiasm and energy to the team. Investing in junior talent also offers long-term benefits—with proper mentoring and guidance, employers can shape us into skilled professionals who are aligned with the company’s culture and goals. Additionally, the growth of senior developers relies on a steady investment in junior developers; without nurturing new talent, the field risks stagnation.
              <br/><br/> Finally, hiring new grads is an opportunity to build a diverse and balanced team. Our fresh ideas challenge conventional approaches, driving innovation and fostering a learning culture that benefits everyone.
              </p>
            </div>
          </section>

          <div className="w-full wave-divider bg-customGreen dark:bg-customGreen">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full transform rotate-180"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="fill-customDarkGreen dark:fill-customDarkGreen"
              ></path>
            </svg>
          </div>

          <section className="w-full bg-customDarkGreen dark:bg-customDarkGreen py-12 sm:py-20">
            <div className="w-full px-0">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-10 text-white dark:text-white">
                Personal and Academic Projects
              </h2>
            </div>
          </section> 

          <section className="w-full bg-customDarkGreen dark:bg-customDarkGreen py-10 sm:py-6">
            <div className="w-full px-0">
              <p className="text-center text-black dark:text-black">
              </p>
              <Personal/>
            </div>
          </section>

          <div className="w-full wave-divider bg-customDarkGreen dark:bg-customDarkGreen">
            <svg
              data-name="Layer 1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1200 120"
              preserveAspectRatio="none"
              className="w-full transform rotate-180"
            >
              <path
                d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
                className="fill-customGreen dark:fill-customGreen"
              ></path>
            </svg>
          </div>

          <section className="w-full bg-customGreen dark:bg-customGreen py-12 sm:py-20">
            <div className="w-full px-0">
              <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4 sm:mb-8 dark:text-black">
                Creative Projects
              </h2>
            </div>
          </section>  

          <section className="w-full bg-customGreen dark:bg-customGreen py-10 sm:py-6">
            <div className="w-full px-0">
              <Creative/>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
