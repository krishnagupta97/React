import useCurrencyInfo from "./hooks/useCurrencyInfo"
import Input from "./components/input";
import { useState } from "react";

function App() {

  const [amount, setAmount] = useState('');
  const [from, setFrom] = useState("USD");
  const [to, setTo] = useState("INR");
  const [convertedAmount, setConvertedAmount] = useState("");


  const currencyInfo = useCurrencyInfo(from);
  const currencyOptions = Object.keys(currencyInfo);
  const bgImg = 'https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2';

  const swap = () => {
    setFrom(to);
    setTo(from);
  }

  const convertHandler = () => {
    setConvertedAmount(amount * currencyInfo[to])
    console.log(amount * currencyInfo[to]);
  }

  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat" style={{
      backgroundImage: `url('${bgImg}')`
    }}>
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form onSubmit={(e) => {
            e.preventDefault();
            convertHandler();
          }}>
            <div className="w-full mb-1">
              <Input label="From" amount={amount} currency={from} setCurrency={setFrom} setAmount={setAmount} currencyOptions={currencyOptions} isDisable={false} />
            </div>
            <div className="relative w-full h-0.5">
              <button type="button" className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5" onClick={swap}>
                Swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <Input label="To" amount={convertedAmount} currency={to} setCurrency={setTo} setAmount={setAmount} currencyOptions={currencyOptions} isDisable={true} />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" onClick={convertHandler}>
              Convert {from} to {to}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
