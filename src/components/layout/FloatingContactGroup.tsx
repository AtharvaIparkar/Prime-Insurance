'use client';

import { usePathname } from 'next/navigation';
import { FloatingCallButton } from "@/components/ui/FloatingContactButton";
import { FloatingWhatsAppButton } from "@/components/ui/FloatingWhatsAppButton";
import { FloatingInstagramButton } from "@/components/ui/FloatingInstagramButton";

export default function FloatingContactGroup() {
    const pathname = usePathname();
    const isAdminPage = pathname.startsWith('/admin');

    if (isAdminPage) return null;

    return (
        <div className="fixed bottom-8 right-8 z-50 flex flex-row items-center space-x-4">
            <FloatingInstagramButton />
            <FloatingWhatsAppButton />
            <FloatingCallButton />
        </div>
    );
}
