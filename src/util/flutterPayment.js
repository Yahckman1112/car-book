
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";



export function Payment(price){
    
  const config = {
    public_key: process.env.REACT_APP_FLUTTER_API_KEY,
    tx_ref: Date.now(),
    amount: price,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: 'adeniran@gmail.com',
      phone_number: '08146283237',
      name: 'Adeniran Yaqub',
    },
    text: "Book Now",
    customizations: {
      title: "Therapy",
      description: "Payment for therapy",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  const handlePayment = () => {
    handleFlutterPayment({
      callback: (response) => {
        console.log(response);
        if (response.status === "successful") {
          window.location.href = "https://calendly.com/friendnpaldev/flutter";
        } else {
          alert("Transaction fail");
        }
        closePaymentModal(); // this will close the modal programmatically
      },
      onClose: () => {},
    });
  };
return handlePayment
}