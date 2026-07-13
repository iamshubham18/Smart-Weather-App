import { TailSpin } from "react-loader-spinner";

function Loading() {
  return (
    <TailSpin
      height={22}
      width={22}
      color="#ffffff"
      ariaLabel="loading"
    />
  );
}

export default Loading;