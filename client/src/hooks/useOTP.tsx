import { useState, useEffect } from "react";

type Props = {};
const useOTP = (props: Props) => {
  const [OTP, setOTP] = useState<null | number>(null);

  useEffect(() => {
    const minm = 100000;
    const maxm = 999999;
    const otp = Math.floor(Math.random() * (maxm - minm + 1)) + minm;
    setOTP(otp);
  }, []);

  return { OTP };
};
export default useOTP;
