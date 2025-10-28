import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const CheckoutSuccess = () => {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
  }, [clearCart]);

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-accent/10 mb-6">
          <CheckCircle className="h-12 w-12 text-accent" />
        </div>
        
        <h1 className="text-4xl font-bold mb-4">Order Successful!</h1>
        
        <p className="text-lg text-muted-foreground mb-8">
          Thank you for your purchase. Your order has been confirmed and will be shipped within 2-3 business days.
        </p>

        <div className="space-y-3">
          <Link to="/products">
            <Button size="lg" className="w-full">
              Continue Shopping
            </Button>
          </Link>
          <Link to="/">
            <Button variant="outline" size="lg" className="w-full">
              Back to Home
            </Button>
          </Link>
        </div>

        <p className="text-sm text-muted-foreground mt-8">
          A confirmation email has been sent to your email address.
        </p>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
