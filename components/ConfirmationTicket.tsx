interface ConfirmationTicketProps {
  ticketName: string;
  price: number;
  quantity: number;
  onQuantityChange: (newQuantity: number) => void;
}

export default function ConfirmationTicket({
  ticketName,
  price,
  quantity,
  onQuantityChange,
}: ConfirmationTicketProps) {
  const decreaseQuantity = () => {
    if (quantity > 0) {
      onQuantityChange(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    onQuantityChange(quantity + 1);
  };
  return (
    <div className="grid grid-cols-3 py-4 px-4 items-center hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors duration-150">
      <div className="text-gray-900 dark:text-white font-medium">
        {ticketName}
      </div>
      <div className="flex items-center justify-center">
        <button
          onClick={decreaseQuantity}
          disabled={quantity <= 0}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-200 ${
            quantity <= 0
              ? "bg-gray-100 dark:bg-gray-700 cursor-not-allowed"
              : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600"
          }`}
        >
          <span
            className={`${
              quantity <= 0
                ? "text-gray-400 dark:text-gray-500"
                : "text-gray-600 dark:text-gray-300"
            }`}
          >
            -
          </span>
        </button>
        <span className="mx-4 text-gray-900 dark:text-white font-medium w-6 text-center">
          {quantity}
        </span>
        <button
          onClick={increaseQuantity}
          className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 flex items-center justify-center transition-colors duration-200"
        >
          <span className="text-gray-600 dark:text-gray-300">+</span>
        </button>
      </div>
      <div className="text-right text-gray-900 dark:text-white font-medium">
        <span className="text-sm text-gray-500 dark:text-gray-400 mr-1">€</span>
        {(price * quantity).toFixed(2)}
      </div>
    </div>
  );
}
