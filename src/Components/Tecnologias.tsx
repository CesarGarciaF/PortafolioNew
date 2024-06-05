import { RiReactjsLine } from "react-icons/ri";
import { RiAngularjsFill } from "react-icons/ri";
import { DiMongodb } from "react-icons/di";
import { RiHtml5Fill } from "react-icons/ri";
import { RiCss3Fill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";

export const Tecnologias = () => {
return (
    <div className="border-b border-neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl">Tecnologías</h1>        
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiAngularjsFill className="text-7xl text-red-600"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiHtml5Fill className="text-7xl text-orange-700"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiCss3Fill className="text-7xl text-blue-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssFill className="text-7xl text-cyan-500"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <DiMongodb className="text-7xl text-green-800"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <SiExpress className="text-7xl text-green-800"/>
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
                <FaNode className="text-7xl text-green-800"/>
            </div>
        </div>
    </div>
)
}
export default Tecnologias;
