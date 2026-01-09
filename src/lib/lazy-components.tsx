import dynamic from 'next/dynamic';

// Loading component for better UX
const LoadingSpinner = () => (
  <div className="flex items-center justify-center py-12">
    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#59B4E9]"></div>
  </div>
);

// Lazy load heavy components with loading states
export const LazyServiceCarousel = dynamic(
  () => import('@/components/ServiceCarousel'),
  {
    loading: () => <LoadingSpinner />,
    ssr: true,
  }
);

export const LazyClients = dynamic(
  () => import('@/components/Clients'),
  {
    loading: () => <LoadingSpinner />,
    ssr: true,
  }
);

export const LazyTestimonials = dynamic(
  () => import('@/components/Testimonials'),
  {
    loading: () => <LoadingSpinner />,
    ssr: true,
  }
);

export const LazyCTASection = dynamic(
  () => import('@/components/CTASection'),
  {
    loading: () => <LoadingSpinner />,
    ssr: true,
  }
);

export const LazyScrollToTop = dynamic(
  () => import('@/components/ScrollToTop'),
  {
    loading: () => null,
    ssr: false, // This component is client-side only
  }
);
