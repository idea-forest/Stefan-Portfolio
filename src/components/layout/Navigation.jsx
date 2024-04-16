import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();

  return (
    <nav className="flex-grow px-5 text-center">
      <ul className="mb-0 inline-flex list-none gap-7 pl-0">
        <li className="inline-block align-middle">
          <ScrollLink
            activeClass="!text-primary"
            to="section-home"
            spy={true}
            smooth="easeInQuad"
            offset={-74}
            duration={1000}
            className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary"
          >
            Home
            <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
          </ScrollLink>
        </li>
        <li className="inline-block align-middle">
          <ScrollLink
            activeClass="!text-primary"
            to="section-skills"
            spy={true}
            smooth="easeInQuad"
            offset={-74}
            duration={1000}
            className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary"
          >
            Skills
            <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
          </ScrollLink>
        </li>
        {/* <li className="inline-block align-middle">
          <ScrollLink
            activeClass="!text-primary"
            to="section-resume"
            spy={true}
            smooth="easeInQuad"
            offset={-74}
            duration={1000}
            className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary"
          >
            Resume
            <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
          </ScrollLink>
        </li> */}
        <li className="inline-block align-middle">
          <ScrollLink
            activeClass="!text-primary"
            to="section-portfolios"
            spy={true}
            smooth="easeInQuad"
            offset={-74}
            duration={1000}
            className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary"
          >
            Portfolio
            <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
          </ScrollLink>
        </li>
        <li className="inline-block align-middle">
          <ScrollLink
            activeClass="!text-primary"
            to="section-contact"
            spy={true}
            smooth="easeInQuad"
            offset={-74}
            duration={1000}
            className="group relative inline-block cursor-pointer py-6 text-sm font-medium uppercase tracking-wider text-heading before:text-primary"
          >
            Contact
            <span className="absolute left-0 top-auto bottom-5 inline-block h-px w-full origin-top-right scale-0 bg-primary align-middle transition-transform duration-500 group-hover:origin-top-left group-hover:scale-100"></span>
          </ScrollLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
