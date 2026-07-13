import React from 'react';
import FadeUp from './FadeUp';

const OurStory = () => {
    return (
        <div>
            {/* Our Story */}

            <section className="max-w-7xl mx-auto px-5 py-20">

                <FadeUp>

                    <h2 className="text-4xl font-black text-center mb-14">
                        Our Journey
                    </h2>

                </FadeUp>


                <div className="relative border-l border-cyan-400/30 ml-5 space-y-10">


                    {
                        [
                            {
                                year: "2024",
                                title: "The Beginning",
                                desc: "Gadget Hub started with a simple vision to make premium technology accessible for everyone."
                            },
                            {
                                year: "2025",
                                title: "Growing Community",
                                desc: "We expanded our product collection and built a trusted community of technology lovers."
                            },
                            {
                                year: "2026",
                                title: "Future Ready",
                                desc: "We continue bringing the latest innovations and smart gadgets to our customers."
                            }
                        ].map((item, index) => (

                            <div key={index} className="relative pl-10">


                                <div className="absolute -left-[10px] top-2 w-5 h-5 bg-cyan-400 rounded-full shadow-lg shadow-cyan-400/50" />


                                <div className="bg-white/5 border border-white/10 rounded-3xl p-7">


                                    <span className="text-cyan-400 font-bold">
                                        {item.year}
                                    </span>


                                    <h3 className="text-2xl font-bold mt-2">
                                        {item.title}
                                    </h3>


                                    <p className="text-gray-400 mt-3 leading-7">
                                        {item.desc}
                                    </p>


                                </div>


                            </div>


                        ))
                    }


                </div>


            </section>
        </div>
    );
};

export default OurStory;