import { Metadata } from 'next';

interface SEOOptions {
    title: string;
    description: string;
    canonical?: string;
    ogImage?: string;
    ogType?: 'website' | 'article';
}

export function constructMetadata({
    title,
    description,
    canonical,
    ogImage = '/logo.png',
    ogType = 'website',
}: SEOOptions): Metadata {
    const siteName = 'Prime Insurance Services';
    const fullTitle = `${title} | ${siteName}`;

    return {
        title: fullTitle,
        description,
        metadataBase: new URL('https://primehospitalsolutions.com'), // Updated placeholder
        alternates: {
            canonical: canonical,
        },
        openGraph: {
            title: fullTitle,
            description,
            type: ogType,
            images: [
                {
                    url: ogImage,
                },
            ],
            siteName,
        },
        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description,
            images: [ogImage],
        },
        robots: {
            index: true,
            follow: true,
        },
    };
}
