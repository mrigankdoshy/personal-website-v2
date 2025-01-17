import { gear } from '@/features/gear/data';
import { GearItem } from '@/features/gear/gear-item';
import { BlurReveal, BlurRevealContent } from '@/shared/ui/blur-reveal';

export function Gear() {
  const categories = [...new Set(gear.map((item) => item.category))].sort();

  return (
    <BlurReveal className="flex flex-col gap-16 md:gap-24">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground">
            <BlurRevealContent>Gear</BlurRevealContent>
          </h1>
          <p className="text-muted-foreground">
            <BlurRevealContent>
              A glimpse into the gear I trust every day.
            </BlurRevealContent>
          </p>
        </div>
        <p className="max-w-lg text-pretty text-muted-foreground">
          <BlurRevealContent>
            A curated collection of apps, tools, and essentials I personally use
            and recommend to create, stay productive, and feel good about.
          </BlurRevealContent>
        </p>
      </div>
      {categories.map((category, index) => (
        <BlurRevealContent key={index}>
          <section className="flex flex-col gap-8">
            <h2 className="text-muted-foreground">{category}</h2>
            <ul className="animated-list -mx-6 grid snap-x snap-mandatory scroll-pl-6 auto-cols-[100%] grid-flow-col grid-rows-3 flex-nowrap gap-x-3 gap-y-8 overflow-x-scroll px-6 md:grid md:grid-flow-row md:grid-cols-2 md:grid-rows-none md:gap-x-6 md:overflow-auto">
              {gear.map((item, index) => {
                if (item.category === category) {
                  return (
                    <GearItem
                      key={index}
                      name={item.name}
                      description={item.description}
                      image={item.image}
                      link={item.link}
                    />
                  );
                } else {
                  return null;
                }
              })}
            </ul>
          </section>
        </BlurRevealContent>
      ))}
    </BlurReveal>
  );
}
