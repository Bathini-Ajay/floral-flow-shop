
import { useState } from 'react';
import { Product } from '../types';
import { useCart } from '../hooks/useCart';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { ShoppingCart, Plus } from 'lucide-react';
import { useToast } from '../hooks/use-toast';

interface ProductCardProps {
  product: Product;
  showAddToCart?: boolean;
}

const ProductCard = ({ product, showAddToCart = true }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = async () => {
    setIsLoading(true);
    addToCart(product);
    toast({
      title: "Added to cart!",
      description: `${product.name} has been added to your cart.`,
    });
    setIsLoading(false);
  };

  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 border-pink-100 hover:border-pink-200">
      <div className="relative overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        {!product.inStock && (
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <span className="text-white font-medium">Out of Stock</span>
          </div>
        )}
      </div>
      
      <CardContent className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-serif text-lg font-semibold text-gray-800 line-clamp-1">
            {product.name}
          </h3>
          <span className="text-pink-600 font-bold text-lg">${product.price}</span>
        </div>
        
        <p className="text-gray-600 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>
        
        {showAddToCart && (
          <Button
            onClick={handleAddToCart}
            disabled={!product.inStock || isLoading}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white transition-colors"
            size="sm"
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                <span>Adding...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <ShoppingCart className="h-4 w-4" />
                <span>Add to Cart</span>
              </div>
            )}
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ProductCard;
