"use client";

import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, BarChart, Bar, XAxis, YAxis, CartesianGrid } from 'recharts';
import { PiggyBank, Landmark, Building2, TrendingUp } from 'lucide-react';

const capexData = [
    { name: 'Apport Associés', value: 20, color: '#10b981', icon: <Building2 className="w-5 h-5" /> },
    { name: 'Subventions', value: 35, color: '#0ea5e9', icon: <Landmark className="w-5 h-5" /> },
    { name: 'Crédit Bancaire', value: 45, color: '#f59e0b', icon: <PiggyBank className="w-5 h-5" /> },
];

const projectionData = [
    { year: '2026', CA: 0, capacity: 0, phase: 'Construction' },
    { year: '2027', CA: 300, capacity: 50, phase: 'Lancement (50%)' },
    { year: '2028', CA: 450, capacity: 75, phase: 'Performance (75%)' },
    { year: '2029', CA: 540, capacity: 90, phase: 'Croisière (90%)' },
    { year: '2030', CA: 600, capacity: 100, phase: 'Optimisation (100%)' },
];

const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div className="bg-dark-800 p-4 rounded-xl border border-slate-700 shadow-xl">
                <p className="text-slate-300 font-medium mb-2">Année {label}</p>
                <p className="text-primary-500 font-bold text-lg">
                    {payload[0].value}M DH <span className="text-sm font-normal text-slate-400">Chiffre d'Affaires</span>
                </p>
                <p className="text-slate-400 text-sm mt-1">Capacité: {payload[0].payload.capacity}%</p>
                <p className="text-emerald-400 text-xs mt-2 italic">{payload[0].payload.phase}</p>
            </div>
        );
    }
    return null;
};

const Financials = () => {
    return (
        <section className="py-24 bg-dark-900 border-t border-white/5" id="finance">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl font-bold text-white mb-6"
                    >
                        Modèle Financier & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-emerald-300">Rentabilité</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-slate-400 max-w-3xl mx-auto"
                    >
                        Un montage financier robuste et équilibré, conçu pour maximiser la rentabilité tout en minimisant l'exposition aux risques. TerfayaGreen bénéficie d'un soutien institutionnel exceptionnel, transformant les atouts géographiques de la région en avantages financiers mesurables.
                    </motion.p>
                </div>

                <div className="mb-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-gradient-to-br from-dark-800 to-dark-900 p-6 rounded-3xl border border-white/5 shadow-xl flex flex-col items-center text-center"
                    >
                        <span className="text-slate-500 text-sm uppercase tracking-wider mb-2 font-medium">Investissement Total (CapEx)</span>
                        <span className="text-4xl font-black text-white">350 <span className="text-primary-500">M DH</span></span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-gradient-to-br from-dark-800 to-dark-900 p-6 rounded-3xl border border-white/5 shadow-xl flex flex-col items-center text-center"
                    >
                        <span className="text-slate-500 text-sm uppercase tracking-wider mb-2 font-medium">Prix de Vente Cible</span>
                        <span className="text-4xl font-black text-white">55 <span className="text-emerald-500">DH / Sac</span></span>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-gradient-to-br from-dark-800 to-dark-900 p-6 rounded-3xl border border-white/5 shadow-xl flex flex-col items-center text-center"
                    >
                        <span className="text-slate-500 text-sm uppercase tracking-wider mb-2 font-medium">Marge Énergétique</span>
                        <span className="text-4xl font-black text-white">+40 <span className="text-amber-500">% Éco.</span></span>
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* CAPEX Breakdown */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-dark-800 p-8 rounded-3xl border border-white/5 shadow-2xl"
                    >
                        <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <Landmark className="text-primary-500" /> Structure du Financement
                        </h3>

                        <div className="h-64 w-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <PieChart>
                                    <Pie
                                        data={capexData}
                                        cx="50%"
                                        cy="50%"
                                        innerRadius={60}
                                        outerRadius={90}
                                        paddingAngle={5}
                                        dataKey="value"
                                    >
                                        {capexData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.color} />
                                        ))}
                                    </Pie>
                                    <Tooltip
                                        contentStyle={{ backgroundColor: '#1f2937', borderColor: '#374151', borderRadius: '0.75rem', color: '#f1f5f9' }}
                                        itemStyle={{ color: '#f1f5f9' }}
                                    />
                                </PieChart>
                            </ResponsiveContainer>
                        </div>

                        <div className="mt-8 space-y-4">
                            {capexData.map((item, idx) => (
                                <div key={idx} className="flex justify-between items-center p-4 rounded-xl bg-dark-900 border border-white/5">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg" style={{ backgroundColor: `${item.color}20`, color: item.color }}>
                                            {item.icon}
                                        </div>
                                        <span className="text-slate-200 font-medium">{item.name}</span>
                                    </div>
                                    <span className="text-xl font-bold" style={{ color: item.color }}>{item.value}%</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-200 text-sm">
                            <p className="flex items-start gap-2">
                                <TrendingUp className="w-5 h-5 shrink-0 mt-0.5" />
                                <span><strong>Atout Majeur :</strong> Un différé bancaire de 2 ans a été négocié, couplé à un soutien régional massif. TerfayaGreen n'est pas seulement une usine, c'est le moteur de la transition industrielle du Sud. Notre rentabilité est sécurisée par un coût de l'énergie maîtrisé et une infrastructure logistique en pleine expansion.</span>
                            </p>
                        </div>
                    </motion.div>

                    {/* 5-Year Projection */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-dark-800 p-8 rounded-3xl border border-white/5 shadow-2xl h-full flex flex-col"
                    >
                        <h3 className="text-2xl font-bold text-white mb-2 flex items-center gap-3">
                            <TrendingUp className="text-primary-500" /> Projections sur 5 Ans
                        </h3>
                        <p className="text-slate-400 mb-8 text-sm">Basé sur un prix de vente de 55 DH/Sac (50kg) et la montée de capacité.</p>

                        <div className="flex-1 min-h-[400px] w-full mt-4">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={projectionData} margin={{ top: 20, right: 30, left: 20, bottom: 50 }}>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" vertical={false} />
                                    <XAxis dataKey="year" stroke="#9ca3af" axisLine={false} tickLine={false} dy={15} />
                                    <YAxis stroke="#9ca3af" axisLine={false} tickLine={false} tickFormatter={(v) => `${v}M`} width={60} />
                                    <Tooltip content={<CustomTooltip />} cursor={{ fill: '#374151', opacity: 0.4 }} />
                                    <Bar dataKey="CA" fill="#10b981" radius={[4, 4, 0, 0]} barSize={40}>
                                        {projectionData.map((entry, index) => (
                                            <Cell key={`cell-${index}`} fill={entry.CA === 0 ? '#374151' : (index === 4 ? '#059669' : '#10b981')} />
                                        ))}
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Financials;
