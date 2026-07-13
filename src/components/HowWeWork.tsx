import React from 'react';

const HowWeWork = () => {
    return (
        <div>
            <section className="max-w-7xl mx-auto px-5 py-20">


                <h2 className="text-4xl font-black text-center mb-12">
                    How We Serve You
                </h2>


                <div className="grid md:grid-cols-4 gap-6">


                    {
                        [
                            "Browse Latest Gadgets",
                            "Choose Your Favorite Device",
                            "Secure Payment",
                            "Fast Delivery"
                        ].map((item, index) => (


                            <div
                                key={index}
                                className="
rounded-3xl
bg-white/5
border border-white/10
p-7
text-center
">


                                <div className="
w-12 h-12
mx-auto
rounded-full
bg-cyan-400/20
text-cyan-400
flex items-center justify-center
font-black
text-xl
">

                                    {index + 1}

                                </div>


                                <h3 className="mt-5 font-bold">
                                    {item}
                                </h3>


                            </div>


                        ))
                    }


                </div>


            </section>
        </div>
    );
};

export default HowWeWork;