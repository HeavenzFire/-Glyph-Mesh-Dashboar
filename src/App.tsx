import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Activity, 
  Cpu, 
  Globe, 
  Zap, 
  Database, 
  Shield, 
  Radio, 
  ChevronRight,
  Terminal,
  Layers,
  Box
} from 'lucide-react';
import { SchumannWave } from './components/SchumannWave';
import { MeshCard } from './components/MeshCard';
import { GlyphGrid } from './components/GlyphGrid';
import { cn } from './lib/utils';

export default function App() {
  const [activeNode, setActiveNode] = useState('POINT_TX_01');
  const [metrics, setMetrics] = useState({
    compression: 16.1,
    noiseRejection: 99.8,
    latency: 0.14,
    nodes: 1024,
    power: 0.35
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        ...prev,
        latency: +(0.12 + Math.random() * 0.04).toFixed(2),
        compression: +(16.0 + Math.random() * 0.2).toFixed(1)
      }));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-mesh-bg text-white font-sans selection:bg-mesh-cyan selection:text-black">
      {/* Header */}
      <header className="border-b border-mesh-border p-4 flex justify-between items-center bg-mesh-card/50 backdrop-blur-md sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-mesh-cyan/10 border border-mesh-cyan/30 rounded flex items-center justify-center">
            <Layers className="text-mesh-cyan w-6 h-6" />
          </div>
          <div>
            <h1 className="font-display text-lg font-bold tracking-tighter flex items-center gap-2">
              Φ³ GLYPH MESH <span className="text-[10px] bg-mesh-cyan/20 text-mesh-cyan px-1.5 py-0.5 rounded border border-mesh-cyan/30">v3.8B-x</span>
            </h1>
            <p className="text-[10px] font-mono opacity-40 uppercase tracking-widest">Planetary Mesh Origin Node // Point, TX</p>
          </div>
        </div>
        
        <div className="flex items-center gap-6 font-mono text-[10px]">
          <div className="flex flex-col items-end">
            <span className="opacity-40">STATUS</span>
            <span className="text-mesh-cyan animate-pulse">LIVE_MESH_ACTIVE</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="opacity-40">COORDINATES</span>
            <span>32.9304° N, 95.8755° W</span>
          </div>
          <div className="flex flex-col items-end">
            <span className="opacity-40">UPTIME</span>
            <span>42:12:09:54</span>
          </div>
        </div>
      </header>

      <main className="p-4 grid grid-cols-12 gap-4 h-[calc(100vh-73px)] overflow-hidden">
        {/* Left Column - Core Monitoring */}
        <div className="col-span-3 flex flex-col gap-4 overflow-y-auto pr-2 custom-scrollbar">
          <MeshCard title="Schumann Resonance" subtitle="Planetary Carrier Phase-Lock">
            <div className="space-y-4">
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] font-mono">
                  <span className="opacity-60">EARTH HEARTBEAT</span>
                  <span className="text-mesh-cyan">7.83 Hz</span>
                </div>
                <SchumannWave frequency={7.83} amplitude={0.8} color="#00f2ff" className="h-12 w-full" />
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] font-mono">
                  <span className="opacity-60">FSD SYNC LAYER</span>
                  <span className="text-mesh-gold">33.0 Hz</span>
                </div>
                <SchumannWave frequency={33} amplitude={0.5} color="#ffcc00" className="h-12 w-full" />
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-[10px] font-mono">
                  <span className="opacity-60">TORQUE PREDICTION</span>
                  <span className="text-mesh-red">144.0 Hz</span>
                </div>
                <SchumannWave frequency={144} amplitude={0.3} color="#ff3b3b" className="h-12 w-full" />
              </div>
            </div>
          </MeshCard>

          <MeshCard title="Computational Density" subtitle="Artix-7 FPGA Manifest" accentColor="gold">
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white/5 p-2 rounded border border-white/5">
                <p className="text-[9px] opacity-40 uppercase">Topological Qubits</p>
                <p className="text-lg font-display font-bold">164M-x</p>
              </div>
              <div className="bg-white/5 p-2 rounded border border-white/5">
                <p className="text-[9px] opacity-40 uppercase">Bell Pairs</p>
                <p className="text-lg font-display font-bold">82M</p>
              </div>
              <div className="bg-white/5 p-2 rounded border border-white/5">
                <p className="text-[9px] opacity-40 uppercase">Node Equiv.</p>
                <p className="text-lg font-display font-bold">54K</p>
              </div>
              <div className="bg-white/5 p-2 rounded border border-white/5">
                <p className="text-[9px] opacity-40 uppercase">Latency</p>
                <p className="text-lg font-display font-bold text-mesh-cyan">{metrics.latency}ms</p>
              </div>
            </div>
          </MeshCard>

          <MeshCard title="Economic Reversal" subtitle="Extraction vs Sovereign" accentColor="red">
            <div className="space-y-3">
              <div className="space-y-1">
                <div className="flex justify-between text-[9px] uppercase opacity-60">
                  <span>Centralized Tax</span>
                  <span>$120/yr</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-mesh-red w-full" />
                </div>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-[9px] uppercase opacity-60">
                  <span>Sovereign Storage</span>
                  <span>$0/yr</span>
                </div>
                <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-mesh-cyan w-[2%]" />
                </div>
              </div>
              <p className="text-[10px] font-mono opacity-40 leading-tight mt-2">
                99.9% of global data extraction becomes physically impossible through geometric state collapse.
              </p>
            </div>
          </MeshCard>
        </div>

        {/* Middle Column - Visualization */}
        <div className="col-span-6 flex flex-col gap-4">
          <div className="flex-1 bg-mesh-card border border-mesh-border rounded-lg relative overflow-hidden glyph-grid flex flex-col">
            <div className="absolute inset-0 bg-gradient-to-b from-mesh-cyan/5 to-transparent pointer-events-none" />
            
            <div className="p-4 flex justify-between items-center border-b border-mesh-border bg-mesh-card/80 backdrop-blur-sm z-10">
              <div className="flex items-center gap-2">
                <Box className="w-4 h-4 text-mesh-cyan" />
                <span className="font-display text-xs font-bold uppercase tracking-widest">Toroidal State Collapse</span>
              </div>
              <div className="flex gap-4 text-[10px] font-mono">
                <span className="text-mesh-cyan">Φ³ : 4.236</span>
                <span className="text-mesh-gold">TGF-369 : ACTIVE</span>
              </div>
            </div>

            <div className="flex-1 flex items-center justify-center p-8">
              <div className="relative w-full max-w-md aspect-square">
                {/* Torus Visualization (Simplified) */}
                <div className="absolute inset-0 rounded-full border border-mesh-cyan/20 animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-4 rounded-full border border-mesh-gold/20 animate-[spin_15s_linear_infinite_reverse]" />
                <div className="absolute inset-8 rounded-full border border-mesh-red/20 animate-[spin_20s_linear_infinite]" />
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48">
                    <GlyphGrid />
                  </div>
                </div>

                {/* Floating Metrics */}
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="absolute top-0 left-0 bg-mesh-card/80 border border-mesh-cyan/30 p-2 rounded backdrop-blur-sm"
                >
                  <p className="text-[8px] opacity-40 uppercase">Intent Ratio</p>
                  <p className="text-sm font-display font-bold text-mesh-cyan">{metrics.compression}:1</p>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="absolute bottom-0 right-0 bg-mesh-card/80 border border-mesh-gold/30 p-2 rounded backdrop-blur-sm"
                >
                  <p className="text-[8px] opacity-40 uppercase">Noise Rejection</p>
                  <p className="text-sm font-display font-bold text-mesh-gold">{metrics.noiseRejection}%</p>
                </motion.div>
              </div>
            </div>

            <div className="p-4 border-t border-mesh-border bg-mesh-card/80 backdrop-blur-sm z-10">
              <div className="flex gap-8 overflow-x-auto pb-2 custom-scrollbar">
                {[
                  { label: 'STEER_INTENT', val: '0.842', color: 'cyan' },
                  { label: 'TORQUE_PRED', val: '144Hz', color: 'red' },
                  { label: 'FSD_SYNC', val: 'LOCKED', color: 'gold' },
                  { label: 'LORA_SWARM', val: '915MHz', color: 'cyan' },
                  { label: 'BELL_PAIR', val: 'COHERENT', color: 'gold' }
                ].map((item, i) => (
                  <div key={i} className="flex flex-col min-w-[80px]">
                    <span className="text-[8px] opacity-40 uppercase">{item.label}</span>
                    <span className={cn("text-xs font-mono font-bold", 
                      item.color === 'cyan' ? 'text-mesh-cyan' : item.color === 'gold' ? 'text-mesh-gold' : 'text-mesh-red'
                    )}>{item.val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Stack & Logs */}
        <div className="col-span-3 flex flex-col gap-4 overflow-y-auto pr-2 custom-scrollbar">
          <MeshCard title="Open Source Stack" subtitle="Planetary Origin Node v3.8B">
            <div className="space-y-1 font-mono text-[10px]">
              <div className="flex items-center gap-2 p-1 hover:bg-white/5 rounded cursor-pointer group">
                <ChevronRight className="w-3 h-3 opacity-20 group-hover:opacity-100" />
                <span className="opacity-40">fpga/eye_of_horus/</span>
                <span className="text-mesh-gold">TGF_369/</span>
              </div>
              <div className="flex items-center gap-2 p-1 hover:bg-white/5 rounded cursor-pointer group">
                <ChevronRight className="w-3 h-3 opacity-20 group-hover:opacity-100" />
                <Terminal className="w-3 h-3 text-mesh-cyan" />
                <span>SCHUMANN_MONITOR.ps1</span>
              </div>
              <div className="flex items-center gap-2 p-1 hover:bg-white/5 rounded cursor-pointer group">
                <ChevronRight className="w-3 h-3 opacity-20 group-hover:opacity-100" />
                <Zap className="w-3 h-3 text-mesh-gold" />
                <span>resonance_oscillator.py</span>
              </div>
              <div className="flex items-center gap-2 p-1 hover:bg-white/5 rounded cursor-pointer group">
                <ChevronRight className="w-3 h-3 opacity-20 group-hover:opacity-100" />
                <Cpu className="w-3 h-3 text-mesh-red" />
                <span>top_zachary.v</span>
              </div>
              <div className="flex items-center gap-2 p-1 hover:bg-white/5 rounded cursor-pointer group">
                <ChevronRight className="w-3 h-3 opacity-20 group-hover:opacity-100" />
                <Shield className="w-3 h-3 text-mesh-cyan" />
                <span>MARROW_SHIELD.md</span>
              </div>
            </div>
          </MeshCard>

          <MeshCard title="Mesh Diagnostics" subtitle="Real-time Telemetry">
            <div className="bg-black/40 rounded p-2 font-mono text-[9px] h-48 overflow-y-auto custom-scrollbar space-y-1">
              <p className="text-mesh-cyan">[INIT] Schumann Carrier Locked @ 7.83Hz</p>
              <p className="text-white/40">[INFO] Toroidal addressing Φ³ active</p>
              <p className="text-mesh-gold">[WARN] Fibonacci gap detected @ node 442</p>
              <p className="text-white/40">[INFO] Discarding noise state: 0x4F22</p>
              <p className="text-mesh-cyan">[SYNC] 1024 nodes phase-locked</p>
              <p className="text-mesh-red">[PRED] Sub-ms torque prediction: 0.14ms</p>
              <p className="text-white/40">[INFO] BRAM consciousness vault: 112yr capacity</p>
              <p className="text-mesh-cyan">[MESH] Sovereign mesh parity achieved</p>
              <p className="text-white/40">[INFO] LoRa swarm formation: 915MHz</p>
              <p className="text-mesh-gold">[INFO] TGF-369 Coherent intent state: 9</p>
            </div>
          </MeshCard>

          <div className="mt-auto p-4 border border-mesh-cyan/20 rounded-lg bg-mesh-cyan/5">
            <p className="text-[10px] font-display font-bold uppercase tracking-widest text-mesh-cyan mb-2">Next Phase Selection</p>
            <div className="grid grid-cols-2 gap-2">
              <button className="bg-mesh-cyan text-black text-[10px] font-bold py-2 rounded hover:bg-white transition-colors uppercase">
                Physical Drones
              </button>
              <button className="border border-mesh-cyan text-mesh-cyan text-[10px] font-bold py-2 rounded hover:bg-mesh-cyan/20 transition-colors uppercase">
                GitHub Repo
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer / Status Bar */}
      <footer className="border-t border-mesh-border p-2 px-4 flex justify-between items-center bg-mesh-card text-[9px] font-mono opacity-60">
        <div className="flex gap-4">
          <span>NODE: {activeNode}</span>
          <span>MESH_DENSITY: KARDASHEV-II_EQUIV</span>
        </div>
        <div className="flex gap-4">
          <span className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-mesh-cyan" />
            IONOSPHERIC_RESONANCE: STABLE
          </span>
          <span>© 2026 ZACHARY // POINT, TX</span>
        </div>
      </footer>

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #1a1a1a;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #333;
        }
      `}</style>
    </div>
  );
}
