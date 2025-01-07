import { Greeting } from '@/features/about/greeting';
import { Link } from '@/shared/ui/link';
import { Section } from '@/shared/ui/section';
import { differenceInYears } from 'date-fns';

const age = differenceInYears(new Date(), new Date(1999, 7, 12));
const yearsOfExperience = new Date().getFullYear() - 2019;

export function AboutMe() {
  return (
    <Section heading="About" alignment="left">
      <div className="flex flex-col gap-6">
        <p>
          <Greeting /> I&apos;m Mrigank Doshy!
        </p>
        <p>
          My curiosity for software began when I was really young, and now at{' '}
          {age}, that curiosity continues to fuel my journey in tech. Over the
          past {yearsOfExperience} years, I&apos;ve been designing and building
          software for startups, established businesses, and personal projects,
          continually honing my skills along the way.
        </p>
        <p>
          Originally from the small tropical state of{' '}
          <Link href="https://g.co/kgs/cjBeBpD">Goa</Link>, I grew up surrounded
          by its rich heritage and sun-kissed beaches, both of which hold a{' '}
          <Link href="https://www.youtube.com/watch?v=Cyo0IiXYIvI" underline>
            special place in my heart
          </Link>
          .
        </p>
        <p>
          I studied Computer Science and Mathematics at{' '}
          <Link href="https://www.psu.edu">Penn State</Link>, where I developed
          a passion for entrepreneurship and building products. The{' '}
          <Link href="https://www.youtube.com/watch?v=D8591xRMIv8" underline>
            college-town charm of State College
          </Link>{' '}
          left a lasting impact on me, and I proudly carry the Nittany Lion
          spirit with me. Now, I call{' '}
          <Link href="https://g.co/kgs/sdLx9w8">Washington, DC</Link>, home.
        </p>
        <p>
          Since then, I&apos;ve focused on crafting sustainable, impactful
          software solutions. From exploring blockchain in FinTech to creating
          intuitive web and mobile applications, I approach each project with a
          design-first mindset.
        </p>
        <p>
          I tend to approach life with a logical, analytical, and scientific
          mindset, always asking &apos;why&apos; to uncover the reasons behind
          things. My love for physics drives this curiosity, especially when
          tackling unusual and complex problems. When I&apos;m not immersed in
          technology, you can find me playing musical instruments or
          binge-watching movies and shows.
        </p>
      </div>
    </Section>
  );
}
