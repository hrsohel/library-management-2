import HomeForm from "@/components/HomeForm";

const page = () => {

  return (
    <>
      <div className="home-main h-[93vh] flex items-center justify-center flex-col">
        <div className="flex gap-2 sm:text-8xl text-5xl text-white font-normal mt-0">
          <span>I</span>
          <span style={{ transform: "rotateZ(-45deg)" }}>C</span>
          <span>E</span>
        </div>
        <div className='sm:px-0 px-2 md:w-auto w-full'>
          <HomeForm />
        </div>
      </div>
    </>
  );
};

export default page;