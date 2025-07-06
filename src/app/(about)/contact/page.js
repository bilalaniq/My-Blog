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
      className="w-full h-[75vh] border-b-2  border-solid border-dark flex flex-row items-center justify-center
        text-dark"
    >
      <div className="inline-block w-2/5 h-full border-r-2 border-solid border-dark">
        <LottieAnimation />
      </div>
      <div className="w-3/5 flex flex-col item-start justify-center px-16 pb-8">
        <h2 className="font-bold capitalize text-4xl">Let's Connect</h2>
        <ContactForm />
      </div>
    </section>
  );
}
