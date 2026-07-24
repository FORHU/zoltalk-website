import { SectionCard } from '../components/SectionCard';
import { AccordionRow } from '../components/AccordionRow';

export function WhyWeNeedIt() {
  return (
    <SectionCard bg="white" className="py-24 px-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="text-center lg:text-left">
          <div className="inline-block bg-zt-coral/10 px-4 py-2 rounded-full mb-8">
            <span className="text-zt-coral font-zt-utility text-xs uppercase tracking-[0.08em]">
              THE SOLUTION STARTS HERE
            </span>
          </div>
          <h2 className="font-zt-display font-semibold text-[clamp(2rem,4vw,3.5rem)] leading-[1.1] text-zt-ink">
            Crash Preventative Hotline
          </h2>
          <p className="text-zt-ink/70 font-zt-body text-lg mt-6 max-w-xl leading-relaxed">
            The automotive culture of the 5G/AI era needs a new platform, not just better driving.
            Loneliness and tiredness while driving are a dangerous combination.
          </p>

          {/* Accordion */}
          <div className="mt-12 flex flex-col gap-3 text-left">
            <AccordionRow
              label="75% — Loneliness of driving"
              detail="Most drivers spend the majority of their time on the road completely alone, with no one to talk to and nothing keeping them alert."
            />
            <AccordionRow
              label="90% — Loneliness alone"
              detail="The vast majority of trips are made solo, removing the natural conversation that keeps a passenger-accompanied driver awake."
            />
            <AccordionRow
              label="67% — Tired driving"
              detail="Two out of three drivers admit to getting behind the wheel while fatigued — often without realizing how impaired they already are."
            />
          </div>
        </div>

        <div className="relative h-[480px]">
          <div className="absolute top-0 left-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-lg transform rotate-2">
            <img
              src="/images/why-need/why-need-1.png"
              alt="Driver alone on a long, empty highway at dusk"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 right-0 w-2/3 h-2/3 rounded-3xl overflow-hidden shadow-lg transform -rotate-2 z-10">
            <img
              src="/images/why-need/why-need-2.png"
              alt="Driver alone on a long, quiet road"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </SectionCard>
  );
}
