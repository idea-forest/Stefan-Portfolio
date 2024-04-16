import { motion } from "framer-motion";
import { RiBriefcaseLine } from "react-icons/ri";
import { useQuery } from "react-query";
import { getJobExperience } from "../../fetchers";
import { childrenAnimation } from "../../lib/motion";
import { TimelineItem } from "../elements";
import { ReactSVG } from "react-svg";

const JobTimeline = () => {
    const { data } = useQuery("job-experience", getJobExperience);

    if (!data) return null;

    return (
        <div className="job-experience">
            <h4 className="flex items-center">
                <ReactSVG
                    className="fill-current text-primary inline-block text-primary mr-2"
                    src={"/icons/workhistory.svg"}
                    beforeInjection={(svg) => {
                        svg.setAttribute("height", "30px");
                        svg.setAttribute("width", "30px");
                        svg.setAttribute("fill", "currentColor");
                    }}
                />
                Working Experience
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

export default JobTimeline;
