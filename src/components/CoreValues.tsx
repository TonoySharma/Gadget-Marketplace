import React from 'react';

const CoreValues = () => {
    return (
        <div>
            <section className="max-w-7xl mx-auto px-5 py-20">


                <h2 className="text-4xl font-black text-center mb-12">
                    Our Core Values
                </h2>


                <div className="grid md:grid-cols-3 gap-7">


                    {
                        [
                            {
                                title: "Innovation",
                                desc: "We always bring modern technology and future-ready products."
                            },
                            {
                                title: "Trust",
                                desc: "Customer satisfaction and product authenticity are our priority."
                            },
                            {
                                title: "Excellence",
                                desc: "We focus on delivering premium quality service."
                            }

                        ].map((item, index) => (


                            <div
                                key={index}
                                className="
bg-gradient-to-br 
from-white/10 
to-transparent
border border-white/10
rounded-3xl
p-8
hover:-translate-y-2
transition
">


                                <h3 className="text-2xl font-bold text-cyan-400">
                                    {item.title}
                                </h3>


                                <p className="text-gray-400 mt-4 leading-7">
                                    {item.desc}
                                </p>


                            </div>


                        ))
                    }


                </div>


            </section>
        </div>
    );
};

export default CoreValues;