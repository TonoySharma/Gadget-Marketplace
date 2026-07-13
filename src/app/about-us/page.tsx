import {
    FaRocket,
    FaShieldAlt,
    FaTruck,
    FaHeadset,
    FaCheckCircle,
    FaUsers,
    FaMobileAlt,
    FaAward,
} from "react-icons/fa";

import FadeUp from "@/components/FadeUp";
import OurStory from "@/components/OurStory";
import HowWeWork from "@/components/HowWeWork";
import CoreValues from "@/components/CoreValues";


const AboutPage = () => {


    const features = [
        {
            icon: <FaCheckCircle />,
            title: "Authentic Products",
            description:
                "We provide 100% genuine smartphones and gadgets from trusted brands.",
        },
        {
            icon: <FaTruck />,
            title: "Fast Delivery",
            description:
                "Quick and secure delivery service to bring your gadgets faster.",
        },
        {
            icon: <FaShieldAlt />,
            title: "Secure Shopping",
            description:
                "Your information and transactions are always safe with us.",
        },
        {
            icon: <FaHeadset />,
            title: "24/7 Support",
            description:
                "Our support team is always ready to help you anytime.",
        },
    ];


    const stats = [
        {
            icon: <FaUsers />,
            number: "10K+",
            title: "Happy Customers",
        },
        {
            icon: <FaMobileAlt />,
            number: "500+",
            title: "Premium Gadgets",
        },
        {
            icon: <FaAward />,
            number: "50+",
            title: "Trusted Brands",
        },
        {
            icon: <FaRocket />,
            number: "24/7",
            title: "Customer Support",
        },
    ];



    return (
        <main className="min-h-screen bg-slate-950 text-white">


            {/* Hero Section */}

            <section className="relative py-24 px-5 overflow-hidden">


                <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-cyan-500/20 blur-[150px] rounded-full" />


                <FadeUp className="relative max-w-5xl mx-auto text-center">


                    <span className="inline-block px-5 py-2 rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20 text-sm">
                        About Gadget Hub
                    </span>


                    <h1 className="text-4xl md:text-6xl font-black mt-6 leading-tight">

                        Empowering Your
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                            {" "}Digital Lifestyle
                        </span>

                    </h1>


                    <p className="mt-6 text-gray-400 max-w-3xl mx-auto text-lg leading-8">

                        Gadget Hub is a modern technology marketplace where you can
                        discover premium smartphones, smart devices, and innovative
                        gadgets with confidence.

                    </p>


                </FadeUp>


            </section>





            {/* Who We Are */}

            <section className="max-w-7xl mx-auto px-5 py-16">


                <FadeUp className="grid md:grid-cols-2 gap-10 items-center">


                    <div>

                        <h2 className="text-4xl font-bold mb-5">
                            Who We Are
                        </h2>


                        <p className="text-gray-400 leading-8">

                            At Gadget Hub, we believe technology should make life
                            smarter, faster, and more connected. We carefully select
                            premium gadgets from trusted brands to provide the best
                            shopping experience.

                        </p>


                        <p className="text-gray-400 leading-8 mt-4">

                            Our mission is to make advanced technology accessible
                            for everyone with quality products and excellent service.

                        </p>

                    </div>




                    <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl">


                        <FaMobileAlt className="text-5xl text-cyan-400 mb-5"/>


                        <h3 className="text-2xl font-bold mb-3">
                            Our Mission
                        </h3>


                        <p className="text-gray-400">

                            Deliver authentic technology products with a simple,
                            secure, and enjoyable shopping experience.

                        </p>


                    </div>


                </FadeUp>


            </section>






            {/* Stats */}

            <section className="max-w-7xl mx-auto px-5 py-16">


                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">


                    {
                        stats.map((item,index)=>(

                            <FadeUp key={index}>

                                <div className="bg-white/5 border border-white/10 rounded-3xl p-6 text-center hover:-translate-y-2 transition">


                                    <div className="text-3xl text-cyan-400 flex justify-center mb-4">
                                        {item.icon}
                                    </div>


                                    <h3 className="text-3xl font-black">
                                        {item.number}
                                    </h3>


                                    <p className="text-gray-400 mt-2">
                                        {item.title}
                                    </p>


                                </div>


                            </FadeUp>

                        ))
                    }


                </div>


            </section>







            {/* Why Choose Us */}

            <section className="max-w-7xl mx-auto px-5 py-16">


                <FadeUp>

                    <h2 className="text-4xl font-bold text-center mb-12">
                        Why Choose Us?
                    </h2>


                </FadeUp>



                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">


                    {
                        features.map((feature,index)=>(

                            <FadeUp key={index}>


                                <div className="bg-white/5 border border-white/10 rounded-3xl p-7 hover:border-cyan-400/40 transition">


                                    <div className="text-4xl text-cyan-400 mb-5">
                                        {feature.icon}
                                    </div>


                                    <h3 className="text-xl font-bold mb-3">
                                        {feature.title}
                                    </h3>


                                    <p className="text-gray-400 text-sm leading-7">
                                        {feature.description}
                                    </p>


                                </div>


                            </FadeUp>

                        ))
                    }


                </div>


            </section>






            {/* CTA */}

            <section className="max-w-5xl mx-auto px-5 py-20">


                <FadeUp>


                    <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-white/10 rounded-[40px] p-10 text-center">


                        <h2 className="text-4xl font-black">
                            Ready To Explore Future Technology?
                        </h2>


                        <p className="text-gray-400 mt-4">
                            Discover the latest gadgets and upgrade your digital lifestyle.
                        </p>


                    </div>


                </FadeUp>


            </section>
            <OurStory></OurStory>
            <HowWeWork></HowWeWork>
            <CoreValues></CoreValues>


        </main>
    );
};


export default AboutPage;