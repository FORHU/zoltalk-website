import { Navbar } from '@/features/landing/components/Navbar';
import { Footer } from '@/features/landing/components/Footer';
import { ProductDetails } from '@/features/landing/components/ProductDetails';

export default function ProductPage() {
  return (
    <div className="min-h-screen bg-zt-canvas pt-3">
      <Navbar />
      <ProductDetails />
      <Footer />
    </div>
  );
}
