
import "./dashboard-globals.css";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'

import type { Metadata } from "next";
import StudentSideNavbar from "@/components/sideNavBar/StudentSideNavbar";

config.autoAddCss = false

export const metadata: Metadata = {
    title: "Student-Dashboard"
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen flex">
            {/* left side */}
            <div className="w-[14%] md:w-[8%] lg:w-[16%] xl:w-[14%] bg-base-200 p-4">
                <StudentSideNavbar />
            </div>
            {/* Right side */}
            <div className=" w-[86%] md:w-[92%] lg:w-[84%] xl:w-[86%]  overflow-scroll"

                style={{
                    backgroundImage: "url('/images/3000WP.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }
                }
            >
                {children}
            </div >

        </div>
    );
}
