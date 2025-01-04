import { Section } from '@/features/about/section';
import { Link } from '@/shared/ui/link';
import { Tag } from '@/shared/ui/tag';
import { CSSProperties } from 'react';

export function Work() {
  return (
    <div className="flex flex-col gap-16 md:gap-24">
      <div>
        <h1 className="animate-fade-in text-3xl font-bold tracking-tight text-foreground">
          Work
        </h1>
        <p
          className="animate-fade-in text-muted-foreground"
          style={{ '--index': 1 } as CSSProperties}
        >
          Here are some of the places I have worked.
        </p>
      </div>
      <div
        className="flex animate-fade-in flex-col gap-12"
        style={{ '--index': 2 } as CSSProperties}
      >
        <Section heading="2021 - Today" alignment="left">
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-foreground">
                Software Engineer II
              </h2>
              <h3 className="text-md tracking-tight text-muted-foreground">
                KCF Technologies
              </h3>
            </div>
            <p>
              I currently lead the development of a new cross-platform mobile
              app for KCF&apos;s{' '}
              <Link
                href="https://kcftech.com/solutions/smartdiagnostics/"
                underline
              >
                machine health monitoring platform
              </Link>{' '}
              that delivers real-time machine health insights and streamlines
              asset management. The app supports plant-floor teams with tools
              for issue resolution, hardware installation, and troubleshooting.
            </p>
            <p>
              Alongside mobile development, I contribute to the web app,
              building and maintaining key features to ensure intuitive and
              scalable interfaces. Notably, I implemented an issue management
              system to streamline workflows and foster collaboration that is
              now a core offering of the software. I also helped develop a
              unified design system to maintain consistency and efficiency
              across all applications.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <Tag label="React" href="https://react.dev" />
              <Tag label="React Native" href="https://reactnative.dev" />
              <Tag label="TypeScript" href="https://www.typescriptlang.org" />
              <Tag label="Expo" href="https://expo.dev" />
              <Tag
                label="Native iOS & Android"
                href="https://reactnative.dev/docs/turbo-native-modules-introduction"
              />
              <Tag label="SCSS" href="https://sass-lang.com" />
              <Tag
                label="C#"
                href="https://learn.microsoft.com/en-us/dotnet/csharp/"
              />
            </div>
          </div>
        </Section>

        <Section heading="2021 - 2021" alignment="left">
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-foreground">
                Software Engineer - Capstone Project
              </h2>
              <h3 className="text-md tracking-tight text-muted-foreground">
                Volvo
              </h3>
            </div>
            <p>
              Developed an automated solution using the{' '}
              <Link
                href="https://creopyson.readthedocs.io/en/latest/readme.html"
                underline
              >
                Creopyson
              </Link>{' '}
              Python library to streamline the conversion of 2D schematics into
              3D CAD models in{' '}
              <Link href="https://www.ptc.com/en/products/creo/parametric">
                Creo Parametric
              </Link>
              , eliminating manual updates. Designed an algorithm to optimize
              cable and fuel line routing based on spatial and environmental
              constraints, reducing repetitive engineering processes. The{' '}
              <Link
                href="https://sites.psu.edu/lfshowcasesp21/2021/04/29/routing-productivity-improvement/"
                underline
              >
                project
              </Link>{' '}
              is now being implemented in Volvo&apos;s system by an internal
              team.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <Tag label="Python" href="https://www.python.org" />
              <Tag
                label="Creo Parametric"
                href="https://www.ptc.com/en/products/creo/parametric"
              />
            </div>
          </div>
        </Section>

        <Section heading="2019 - 2021" alignment="left">
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-foreground">
                Co-Founder and Software Engineer
              </h2>
              <h3 className="text-md tracking-tight text-muted-foreground">
                Mule
              </h3>
            </div>
            <p>
              Mule was an innovative peer-to-peer delivery platform that
              empowered students to help each other by efficiently managing
              their time. I designed the UI/UX, developed the{' '}
              <Link
                href="https://apps.apple.com/us/app/mule-delivery/id1554136114"
                underline
              >
                iOS
              </Link>{' '}
              and{' '}
              <Link
                href="https://play.google.com/store/apps/details?id=com.themuleapp.app"
                underline
              >
                Android
              </Link>{' '}
              apps using <Link href="https://flutter.dev">Flutter</Link>, and
              built the backend with{' '}
              <Link href="https://expressjs.com">Express</Link> and{' '}
              <Link href="https://www.mongodb.com">MongoDB</Link>. I also
              implemented geolocation and routing with{' '}
              <Link href="https://mapsplatform.google.com">Google Maps</Link>,
              along with a{' '}
              <Link href="https://firebase.google.com">Firebase</Link>-based
              notification system.
            </p>
            <p>
              As a founder, I played a key role in pitching to investors and
              venture capitalists for pre-seed funding, conducting market
              research, and analyzing data to guide product decisions. My
              efforts focused on validating customer needs, refining the
              product, and driving its strategic growth through technical
              innovation and market insights.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <Tag label="Flutter" href="https://flutter.dev" />
              <Tag label="Node.js" href="https://nodejs.org" />
              <Tag label="Express" href="https://expressjs.com" />
              <Tag label="MobX" href="https://mobx.js.org" />
              <Tag label="MongoDB" href="https://www.mongodb.com" />
              <Tag label="Firebase" href="https://firebase.google.com" />
              <Tag
                label="Google Maps Platform"
                href="https://mapsplatform.google.com"
              />
            </div>
          </div>
        </Section>

        <Section heading="2018 - 2021" alignment="left">
          <div className="flex flex-col gap-6">
            <div>
              <h2 className="text-xl font-bold tracking-tight text-foreground">
                Co-Founder
              </h2>
              <h3 className="text-md tracking-tight text-muted-foreground">
                Blockchain@PSU
              </h3>
            </div>
            <p>
              I co-founded Blockchain@PSU, a student-run organization that grew
              to over 300 members, focused on training students in essential
              FinTech and blockchain skills. I led the planning and execution of
              technological projects and strategic initiatives to foster growth
              and engagement within the community. In addition to teaching an
              officially offered blockchain course at{' '}
              <Link href="https://psu.edu" underline>
                Penn State
              </Link>
              , I cultivated valuable partnerships with organizations, expanding
              the impact of the blockchain ecosystem at the university.
            </p>
            <div className="flex flex-wrap gap-3 text-sm">
              <Tag label="Blockchain" />
              <Tag label="dApps" />
              <Tag label="Solidity" href="https://soliditylang.org" />
              <Tag label="Truffle" href="https://archive.trufflesuite.com" />
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
