import { motion } from 'framer-motion';
import { Users, Sprout, TrendingUp, Zap } from 'lucide-react';

const impacts = [
    {
        icon: <Sprout className="w-8 h-8 text-emerald-400" />,
        title: "Écologique",
        description: "Réduction massive de l'empreinte carbone grâce à une alimentation hybride (Éolien/Solaire) et un broyeur haute efficacité énergétique.",
    },
    {
        icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
        title: "Économique",
        description: "Compétitivité accrue face aux cimenteries traditionnelles. L'énergie, représentant 41% des coûts, est maîtrisée avec les renouvelables.",
    },
    {
        icon: <Users className="w-8 h-8 text-amber-400" />,
        title: "Social & Régional",
        description: "Création directe d'emplois locaux, transfert de technologies avancées et dynamisation de la région de Terfaya comme pôle industriel vert.",
    }
];

const RegionalImpact = () => {
    return (
        <section className="py-24 bg-dark-900 overflow-hidden relative" id="impact">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-900/20 via-dark-900 to-dark-900 z-0" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        Le Mix Énergétique : <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Le Cœur de la Stratégie</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-400 max-w-3xl mx-auto"
                    >
                        Dans l'industrie cimentière, l'énergie représente traditionnellement <strong className="text-white">41% des coûts de production</strong>. Notre implantation à Terfaya n'est pas fortuite : elle permet une hybridation Solaire/Éolien qui transforme cette contrainte en un atout majeur.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {impacts.map((impact, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="bg-dark-800/80 backdrop-blur-sm p-8 rounded-3xl border border-white/5 hover:border-emerald-500/30 transition-colors group relative overflow-hidden"
                        >
                            <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/5 rounded-full blur-2xl group-hover:bg-emerald-500/10 transition-colors" />

                            <div className="p-4 bg-dark-900 rounded-2xl w-max mb-6 shadow-inner border border-white/5">
                                {impact.icon}
                            </div>
                            <h3 className="text-xl font-bold text-white mb-4">{impact.title}</h3>
                            <p className="text-slate-400 leading-relaxed">{impact.description}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="mt-16 bg-gradient-to-r from-emerald-900/50 to-dark-800 p-8 md:p-12 rounded-3xl border border-emerald-500/20 flex flex-col md:flex-row items-center justify-between gap-8"
                >
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
                            <Zap className="text-yellow-400 w-6 h-6" />
                            Terfaya : Un Partenaire Stratégique
                        </h3>
                        <p className="text-emerald-100/80 text-lg">
                            Ce projet ne se contente pas d'être rentable ; il s'intègre parfaitement dans la vision de développement des provinces du Sud. En associant la région, TerfayaGreen devient un fleuron industriel garantissant le soutien local institutionnel.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default RegionalImpact;
