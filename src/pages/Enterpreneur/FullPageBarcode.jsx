import { useEffect, useRef } from "react";
import JsBarcode from "jsbarcode";

const FullPageBarcode = () => {
  const barcodeRef = useRef(null);

  useEffect(() => {
    JsBarcode(barcodeRef.current, "ORDER-987654321", {
      format: "CODE128",
      width: 5,
      height: window.innerHeight,
      displayValue: false,
    });
  }, []);

  return (
    <div className="w-screen h-screen">
      <svg ref={barcodeRef}></svg>
    </div>
  );
};

export default FullPageBarcode;
