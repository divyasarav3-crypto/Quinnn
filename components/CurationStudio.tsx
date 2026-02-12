
import React, { useState } from 'react';
import { GoogleGenAI, Type } from "@google/genai";

interface CurationResult {
  stylingConcept: string;
  items: Array<{
    name: string;
    reason: string;
    myntraSearchQuery: string;
  }>;
  closingNote: string;
}

const CurationStudio: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<CurationResult | null>(null);
  const [sources, setSources] = useState<any[]>([]);

  const handleCurate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    setResult(null);
    setSources([]);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: `Act as Quinn Foster, a high-end personal stylist. 
        A client has asked: "${prompt}". 
        Provide an intentional, calm styling curation that pulls from items available on Myntra. 
        Focus on quality, silhouette, and timelessness.`,
        config: {
          tools: [{ googleSearch: {} }],
          responseMimeType: "application/json",
          responseSchema: {
            type: Type.OBJECT,
            properties: {
              stylingConcept: {
                type: Type.STRING,
                description: "A 2-3 sentence editorial philosophy for this specific outfit/request."
              },
              items: {
                type: Type.ARRAY,
                items: {
                  type: Type.OBJECT,
                  properties: {
                    name: { type: Type.STRING },
                    reason: { type: Type.STRING, description: "Why Quinn chose this for the client." },
                    myntraSearchQuery: { type: Type.STRING, description: "The specific keywords to find this on Myntra." }
                  },
                  required: ["name", "reason", "myntraSearchQuery"]
                }
              },
              closingNote: { type: Type.STRING }
            },
            required: ["stylingConcept", "items", "closingNote"]
          }
        },
      });

      const data = JSON.parse(response.text || "{}");
      setResult(data);
      
      // Extract grounding sources if available
      if (response.candidates?.[0]?.groundingMetadata?.groundingChunks) {
        setSources(response.candidates[0].groundingMetadata.groundingChunks);
      }
    } catch (error) {
      console.error("Curation error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="studio" className="py-24 md:py-40 px-8 md:px-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Input Side */}
          <div className="lg:col-span-5">
            <span className="text-[11px] uppercase tracking-[0.3em] text-soft mb-6 block">Digital Curation Studio</span>
            <h2 className="text-4xl md:text-5xl serif mb-8 leading-tight">Consult with <br /><span className="italic">Quinn's Digital Twin</span></h2>
            <p className="text-soft leading-relaxed mb-12 font-light">
              Describe your occasion, your mood, or the silhouette you're pursuing. Our AI, trained on Quinn's editorial philosophy, will curate a selection of pieces available on Myntra for your review.
            </p>
            
            <form onSubmit={handleCurate} className="space-y-8">
              <div className="relative">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="e.g., A minimalist ensemble for a morning in the gallery, followed by a seaside lunch."
                  className="w-full bg-transparent border-b border-neutral-300 py-4 outline-none focus:border-neutral-800 transition-colors serif text-xl resize-none min-h-[120px]"
                />
              </div>
              <button 
                disabled={isLoading}
                className={`px-12 py-5 bg-[#2D2D2D] text-white text-[11px] uppercase tracking-[0.2em] transition-all duration-500 ${isLoading ? 'opacity-50 cursor-wait' : 'hover:bg-neutral-800'}`}
              >
                {isLoading ? 'Consulting the archives...' : 'Request Curation'}
              </button>
            </form>
          </div>

          {/* Results Side */}
          <div className="lg:col-span-7 bg-[#F9F8F6] p-8 md:p-16 relative min-h-[500px] flex flex-col justify-center">
            {!result && !isLoading && (
              <div className="text-center">
                <p className="serif italic text-neutral-400 text-lg">Your curated selection will appear here.</p>
              </div>
            )}

            {isLoading && (
              <div className="space-y-8 animate-pulse">
                <div className="h-4 bg-neutral-200 w-3/4"></div>
                <div className="h-4 bg-neutral-200 w-1/2"></div>
                <div className="space-y-4 pt-8">
                  <div className="h-20 bg-neutral-200 w-full"></div>
                  <div className="h-20 bg-neutral-200 w-full"></div>
                </div>
              </div>
            )}

            {result && (
              <div className="animate-fade-in">
                <h3 className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-6">The Styling Concept</h3>
                <p className="text-2xl serif leading-relaxed mb-12 italic text-neutral-700">
                  "{result.stylingConcept}"
                </p>
                
                <div className="space-y-12">
                  <h3 className="text-xs uppercase tracking-[0.3em] text-neutral-400 mb-6 border-b border-neutral-200 pb-4">Myntra Finds</h3>
                  {result.items.map((item, idx) => (
                    <div key={idx} className="group">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="serif text-xl">{item.name}</h4>
                        <a 
                          href={`https://www.myntra.com/${encodeURIComponent(item.myntraSearchQuery)}`} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[10px] uppercase tracking-widest text-neutral-400 hover:text-neutral-800 transition-colors flex items-center gap-2"
                        >
                          Find on Myntra 
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                        </a>
                      </div>
                      <p className="text-sm text-soft font-light leading-relaxed">
                        {item.reason}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="mt-16 pt-8 border-t border-neutral-200">
                  <p className="text-xs italic text-soft">{result.closingNote}</p>
                </div>

                {sources.length > 0 && (
                  <div className="mt-8">
                    <p className="text-[10px] uppercase tracking-widest text-neutral-300 mb-2">Grounding Sources</p>
                    <div className="flex flex-wrap gap-4">
                      {sources.map((src, i) => (
                        src.web && (
                          <a key={i} href={src.web.uri} target="_blank" className="text-[9px] text-neutral-400 hover:text-neutral-600 underline">
                            {src.web.title || 'Source'}
                          </a>
                        )
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurationStudio;
