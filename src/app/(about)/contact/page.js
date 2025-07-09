import ContactForm from "@/src/components/Contact/ContactForm";
import LottieAnimation from "@/src/components/Contact/lottieanimation";
import siteMetadata from "@/src/utils/siteMetadata";

// we woold not use generateMetadata() here because we are not using dynamic routes, so we can just use Metadata object

//should be lower case
export const metadata =  {
  title: "Contact Me",
  description: `contact me for any queries or projects related to Cyber Security, Web Development, or AI. 
  Conect me through this form or email me at ${siteMetadata.email}`,
};

export default function contact() {
  return (
    <section
      className="w-full h-auto md:h-[75vh] border-b-2  border-solid border-dark dark:border-light flex flex-col md:flex-row items-center justify-center
        text-dark dark:text-light"
    >
      <div className="inline-block w-full sm:w-4/5  md:w-2/5 h-full md:border-r-2 border-solid border-dark dark:border-light">
        <LottieAnimation />
      </div>
      <div className="w-full md:w-3/5 flex flex-col item-start justify-center px-5 xs:px-10 md:px-16 pb-8">
        <h2 className="font-bold capitalize text-2xl xs:text-3xl sm:text-4xl">Let's Connect</h2>
        <ContactForm />
      </div>
    </section>
  );
} 
