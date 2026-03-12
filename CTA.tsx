"use client";

import { motion } from 'framer-motion';
import { Mail, ArrowRight, FileText } from 'lucide-react';

const CTA = () => {
    return (
        <section className="py-24 bg-dark-900 overflow-hidden relative" id="contact">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
                <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary-500 rounded-full blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-dark-800 rounded-[3rem] p-12 md:p-20 border border-white/10 text-center shadow-2xl relative overflow-hidden"
                >
                    {/* Decorative Ring */}
                    <div className="absolute -top-12 -right-12 w-48 h-48 border-[16px] border-primary-500/10 rounded-full" />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                            Bâtissons l'Industrie de <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-emerald-300">Demain.</span>
                        </h2>

                        <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto leading-relaxed">
                            TerfayaGreen Cement représente une opportunité unique d'allier performance industrielle, rentabilité financière et leadership écologique dans le Sud du Maroc. Rejoignez l'aventure.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="group px-10 py-5 bg-white text-dark-900 rounded-full font-bold text-lg hover:bg-slate-100 transition-all shadow-xl shadow-white/10 flex items-center gap-2"
                            >
                                <FileText className="w-5 h-5" />
                                Demander le Pitch Deck
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="px-10 py-5 bg-primary-600 text-white rounded-full font-bold text-lg hover:bg-primary-500 transition-all border border-primary-400/20 flex items-center gap-2"
                            >
                                <Mail className="w-5 h-5" />
                                Contacter l'Équipe
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </motion.button>
                        </div>

                        <div className="mt-16 pt-16 border-t border-white/5 grid grid-cols-2 md:grid-cols-4 gap-8">
                            <div className="text-center">
                                <div className="text-slate-500 text-xs uppercase tracking-widest mb-1">Status Projet</div>
                                <div className="text-emerald-400 font-bold">Phase Lancement</div>
                            </div>
                            <div className="text-center">
                                <div className="text-slate-500 text-xs uppercase tracking-widest mb-1">Région</div>
                                <div className="text-white font-bold">Terfaya, Maroc</div>
                            </div>
                            <div className="text-center">
                                <div className="text-slate-500 text-xs uppercase tracking-widest mb-1">Partenaires</div>
                                <div className="text-white font-bold">Public & Privé</div>
                            </div>
                            <div className="text-center">
                                <div className="text-slate-500 text-xs uppercase tracking-widest mb-1">Impact</div>
                                <div className="text-primary-400 font-bold">Triple Impact</div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
