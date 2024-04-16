import {
    RiMailFill,
    RiGithubFill,
    RiLinkedinBoxFill,
    RiTelegramFill,    
    RiDiscordFill
} from "react-icons/ri";

const SocialIcons = ({ data, rounded }) => {
    if (!data) return null;

    return (
        <ul className="mb-0 inline-flex list-none flex-wrap pl-0 sm:gap-6 justify-center" style={{gap: "30px"}}>
            {data.email && (
                <li className="inline-block align-middle">
                    <a
                        href={data.email}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative inline-block h-20 w-20 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body ${
                            rounded ? "rounded-full" : "rounded"
                        }`}
                    >
                        <span className="front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full">
                            <RiMailFill className="inline-block" size={"2em"} />
                        </span>
                        <span className="back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0">
                            <RiMailFill className="inline-block" size={"2em"}  />
                        </span>
                    </a>
                </li>
            )}
            {data.github && (
                <li className="inline-block align-middle">
                    <a
                        href={data.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative inline-block h-20 w-20 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body ${
                            rounded ? "rounded-full" : "rounded"
                        }`}
                    >
                        <span className="front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full ">
                            <RiGithubFill className="inline-block" size={"2em"}  />
                        </span>
                        <span className="back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0">
                            <RiGithubFill className="inline-block" size={"2em"}  />
                        </span>
                    </a>
                </li>
            )}
            {data.linkedin && (
                <li className="inline-block align-middle">
                    <a
                        href={data.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative inline-block h-20 w-20 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body ${
                            rounded ? "rounded-full" : "rounded"
                        }`}
                    >
                        <span className="front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full">
                            <RiLinkedinBoxFill className="inline-block" size={"2em"}  />
                        </span>
                        <span className="back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0">
                            <RiLinkedinBoxFill className="inline-block" size={"2em"}  />
                        </span>
                    </a>
                </li>
            )}
             {data.telegram && (
                <li className="inline-block align-middle">
                    <a
                        href={data.telegram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative inline-block h-20 w-20 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body ${
                            rounded ? "rounded-full" : "rounded"
                        }`}
                    >
                        <span className="front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full">
                            <RiTelegramFill className="inline-block" size={"2em"}  />
                        </span>
                        <span className="back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0">
                            <RiTelegramFill className="inline-block" size={"2em"}  />
                        </span>
                    </a>
                </li>
            )}
            {data.discord && (
                <li className="inline-block align-middle">
                    <a
                        href={data.discord}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative inline-block h-20 w-20 overflow-hidden border border-white border-opacity-10 text-center align-middle text-lg leading-none text-body ${
                            rounded ? "rounded-full" : "rounded"
                        }`}
                    >
                        <span className="front relative left-0 top-0 flex h-full w-full translate-y-0 transform items-center justify-center rounded bg-grey transition-all duration-500 group-hover:-translate-y-full">
                            <RiDiscordFill className="inline-block" size={"2em"}  />
                        </span>
                        <span className="back absolute left-0 top-0 flex h-full w-full translate-y-full items-center justify-center rounded bg-primary text-grey transition-all duration-500 group-hover:translate-y-0">
                            <RiDiscordFill className="inline-block" size={"2em"}  />
                        </span>
                    </a>
                </li>
            )}
        </ul>
    );
};

export default SocialIcons;
