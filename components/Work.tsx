"use client"

import { Card } from "@/components/Card";

export const Work = () => {
    return (
        <div id="work" className="min-h-screen bg-gray-50 flex flex-col items-center">
            {/* Projects Heading */}
            <div className="bg-black text-white w-full py-8 text-center shadow-md">
                <h1 className="text-5xl font-bold">Projects</h1>
                <p className="text-lg mt-2">Explore some of my best works showcasing development skills and creativity.</p>
            </div>

            {/* Projects Section */}
            <div className="flex flex-wrap justify-center gap-8 py-12 px-6 w-full max-w-7xl">
                {/* Card 1 */}
                <Card 
                    title="Shadow Marketing" 
                    description="Built a platform for a marketing agency to offer various marketing services to companies.Integrated SMTP for automated email notifications upon user form submission." 
                    gitLink="https://github.com/ansh-pachauri/Shadow-Marketing.git"
                    demoLink="https://shadowmarketingllc.com/"
                    imageSrc="/shadow.png"
                />

                {/* Card 2 */}
                <Card 
                    title="BrainOPedia" 
                    description="Built a tool to organize bookmarked tweets and YouTube videos.Enabled sharing of collections between users."
                    gitLink="https://github.com/ansh-pachauri/Second-Brain.git"
                    demoLink="#"
                    imageSrc="/brain.png"
                />

                {/* Card 3 */}
                <Card 
                    title="Chat Application" 
                    description="Real-time WebSocket chat application enabling seamless one-on-one conversations."
                    gitLink="https://github.com/ansh-pachauri/Chat-app.git"
                    demoLink="#"
                    imageSrc="/chat.png"
                />

                {/* Card 4 */}
                <Card 
                    title="Video Chat Application" 
                    description="A real-time WebRTC video chat application for seamless one-on-one conversation using socket.io."
                    gitLink="https://github.com/ansh-pachauri/Video-Call.git"
                    demoLink="#"
                    imageSrc="/video-call.png"
                />
            </div>
        </div>
    );
};
