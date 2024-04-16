import { motion } from "framer-motion";
import { RiBookLine } from "react-icons/ri";
import { useQuery } from "react-query";
import { getEducationBackground } from "../../fetchers";
import { childrenAnimation } from "../../lib/motion";
import { TimelineItem } from "../elements";
import { ReactSVG } from "react-svg";

const EducationTimeline = () => {
    const { data } = useQuery("education-background", getEducationBackground);

    if (!data) return null;

    return (
        <div className="education-timeline">
            <h4 className="flex items-center">
                <ReactSVG
                    className="fill-current text-primary inline-block text-primary mr-2"
                    src={"/icons/school.svg"}
                    beforeInjection={(svg) => {
                        svg.setAttribute("height", "30px");
                        svg.setAttribute("width", "30px");
                        svg.setAttribute("fill", "currentColor");
                    }}
                />
                Educational Qualification
            </h4>
            {data?.map((timeline, index) => (
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 * index }}
                    variants={childrenAnimation}
                    className="timeline-wrap"
                    key={timeline.id}
                >
                    <TimelineItem timeline={timeline} />
                </motion.div>
            ))}
        </div>
    );
};

export default EducationTimeline;
