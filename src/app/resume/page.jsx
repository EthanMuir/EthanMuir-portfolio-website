import Resumer from "src/app/resume/public/resumer.png"
import Image from "next/image";
export const metadata = {
    title: 'Resume',
    description: 'resume page'
}

export default function Resume()
{
    return (
        <main className=" bg-gray-1000">
            <div className="pt-10">
               <Image src={Resumer} height={20} width={741}  className=" rounded-xl rounded-b-xl mx-auto"/>
            </div>
        </main>

    ) 
    
}