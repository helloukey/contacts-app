import { useState, useEffect } from "react";

type Props = {};
const useOTP = (props: Props) => {
  const [OTP, setOTP] = useState<null | number>(null);

  useEffect(() => {
    const otp = Math.floor(Math.random() * 1000000);
    setOTP(otp);
  }, []);

  return { OTP };
};
export default useOTP;
