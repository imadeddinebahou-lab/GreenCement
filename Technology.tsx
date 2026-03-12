"use client";

import { motion } from 'framer-motion';
import { Cog, CheckCircle2 } from 'lucide-react';

const specs = [
    { label: "Capacité de Production", value: "80 - 100 t/h" },
    { label: "Finesse du Clinker", value: "3500 cm²/g" },
    { label: "Économie d'Énergie", value: "20% à 40%" },
    { label: "Humidité Acceptée", value: "Jusqu'à 15%" },
];

const features = [
    "Intègre concassage, séchage, broyage et sélection en une seule unité compacte.",
    "Dispositif de butée unique évitant le contact direct métal-sur-métal (usure réduite).",
    "Séparation immédiate du produit fini évitant le sur-broyage inutile.",
    "Système fonctionnant en dépression : aucune émission de poussière."
];

const Technology = () => {
    return (
        <section className="py-24 bg-dark-800 border-t border-white/5" id="technology">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="flex flex-col lg:flex-row gap-16 items-center">

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="flex-1 w-full space-y-8"
                    >
                        <div>
                            <div className="flex items-center gap-3 text-emerald-400 mb-4 font-medium tracking-wider uppercase text-sm">
                                <Cog className="w-5 h-5 animate-spin-slow" />
                                Technologie de Pointe
                            </div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Broyeur Vertical <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-200 to-slate-400">LM39-3N</span>
                            </h2>
                            <p className="text-lg text-slate-400">
                                L'allié parfait pour une cimenterie à dominante renouvelable. Ce broyeur de dernière génération allie une capacité industrielle massive à une efficacité énergétique hors norme, réduisant la consommation électrique de 20% à 40% par rapport aux systèmes à boulets traditionnels.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {specs.map((spec, i) => (
                                <div key={i} className="bg-dark-900 border border-white/5 p-4 rounded-2xl">
                                    <div className="text-slate-400 text-sm mb-1">{spec.label}</div>
                                    <div className="text-xl font-bold text-white">{spec.value}</div>
                                </div>
                            ))}
                        </div>

                        <div className="space-y-3 pt-4">
                            {features.map((feature, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
                                    <p className="text-slate-300">{feature}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="flex-1 w-full h-[600px] bg-dark-900 rounded-3xl border border-white/10 overflow-hidden relative shadow-2xl flex items-center justify-center p-8"
                    >
                        {/* 
                Placeholder for the actual Spline 3D Scene of the LM39-3N Vertical Mill.
                We use a robust placeholder since we don't have a specific scene URL from the user yet.
             */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 bg-gradient-to-br from-dark-800 to-dark-900">
                            <div className="w-32 h-32 rounded-full border-4 border-dashed border-emerald-500/30 flex items-center justify-center mb-6 animate-[spin_10s_linear_infinite]">
                                <Cog className="w-16 h-16 text-emerald-500/50" />
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-2">Visualisation 3D Interactive</h3>
                            <p className="text-slate-400 max-w-sm">
                                Modèle interactif Spline du Broyeur LM39-3N (Alimentation, Broyage, Air Chaud). <br /><br />
                                <span className="text-emerald-400 text-sm italic">Espace réservé pour la scène Spline générée.</span>
                            </p>
                        </div>

                        {/* If a spline URL is provided later, uncomment and use this: 
            <Spline scene="YOUR_SPLINE_SCENE_URL_HERE" /> 
            */}
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default Technology;
