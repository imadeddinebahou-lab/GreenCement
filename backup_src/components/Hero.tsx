import { motion } from 'framer-motion';
import { Leaf, TrendingUp, Handshake, ChevronDown } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative h-screen w-full overflow-hidden bg-dark-900">
            {/* Spline 3D Scene Background (Placeholder for actual Spline embed) */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-b from-dark-900/40 via-dark-900/60 to-dark-900/95 z-10" />
                <img
                    src="/vision-background.jpg"
                    alt="Terfaya Project Vision - Cement Factory with Renewable Energy"
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="relative z-20 h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-8 max-w-4xl"
                >
                    <div className="flex items-center justify-center space-x-3 text-primary-500 mb-6">
                        <Leaf className="w-8 h-8" />
                        <span className="text-xl font-semibold tracking-wider uppercase">TerfayaGreen Cement</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                        L'Industrie Lourde, <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-emerald-300">
                            Propulsée par la Nature.
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
                        Une unité de production de ciment stratégique à Terfaya, alliant performance industrielle de pointe (100 t/h) et électricité 100% renouvelable.
                    </p>

                    <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-primary-600 text-white rounded-full font-medium text-lg hover:bg-primary-500 transition-colors shadow-lg shadow-primary-500/25 flex items-center gap-2"
                        >
                            <TrendingUp className="w-5 h-5" />
                            Découvrir le Projet
                        </motion.button>
                        <motion.button
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-white/10 text-white backdrop-blur-md rounded-full font-medium text-lg hover:bg-white/20 transition-colors border border-white/10 flex items-center gap-2"
                        >
                            <Handshake className="w-5 h-5" />
                            Espace Investisseur
                        </motion.button>
                    </div>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-slate-400"
            >
                <ChevronDown className="w-8 h-8 opacity-70" />
            </motion.div>
        </div>
    );
};

export default Hero;
