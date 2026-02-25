"use client";

import { usePathname } from "next/navigation";
import { FloatingInstagramButton } from "./ui/FloatingInstagramButton";
import { FloatingWhatsAppButton } from "./ui/FloatingWhatsAppButton";
import { FloatingCallButton } from "./ui/FloatingContactButton";
import CookieConsent from "./CookieConsent";

export default function FloatingControls() {
    const pathname = usePathname();

    // Hide all floating UI on admin routes
    if (pathname.startsWith("/admin")) return null;

    return (
        <>
            <CookieConsent />
            <div className="fixed bottom-8 right-8 z-50 flex flex-row items-center space-x-4">
                <FloatingInstagramButton />
                <FloatingWhatsAppButton />
                <FloatingCallButton />
            </div>
        </>
    );
}
