import { MyLoader } from "@/components/Shared/Ui/MyLoader";

const LoadingPage = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <MyLoader />
    </div>
  );
};

export default LoadingPage;
