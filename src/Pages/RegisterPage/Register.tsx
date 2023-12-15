import HeadHook from "../../components/common/HeadHook";
import logo from "../../assets/logo/logo.png";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};
const Register = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  return (
    <div>
      <HeadHook
        description="User application using typscript"
        keywords="Reactjs, Typescript, Tailwindcss"
        author="Safayet Nur"
        title="Stack-Signup"
      />
      <div
        className="w-[444px] h-[576px] border-[1px] border-[#EEEEEE] rounded-[16px] mx-auto my-[5%]"
        style={{ boxShadow: "0 20px 24px -4px rgba(16, 24, 40, 0.08)" }}
      >
        <div className="ps-[62px] pt-[52px]">
          <div className="flex justify-start items-start gap-[10px]">
            <img src={logo} alt="logo" height={40} />
            <h2 className="font-bold text-[28px] text-[#4E5D78]">Stack</h2>
          </div>
          <p className="pt-[20px] text-[#404040] font-semibold text-xl">
            Sign up to join with Stack
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="pt-[52px]">
            <div className="form-control">
              <label className="text-[#344054] font-medium text-[14px] pb-[6px]">
                Email
              </label>
              <input
                type="text"
                placeholder="Enter Email"
                className="input input-bordered !rounded-[8px] w-full max-w-xs"
                defaultValue="test"
                {...register("email")}
              />
              {errors.email && (
                <span className="pt-[6px] text-[#F04438] text-[14px] font-normal">
                  This field is required
                </span>
              )}
            </div>
            <div className="mt-[20px]">
              <label className="text-[#344054] font-medium text-[14px] pb-[6px]">
                Password
              </label>
              <input
                type="password"
                placeholder="******"
                className="input input-bordered !rounded-[8px] w-full max-w-xs"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <p className="pt-[19px] pb[17px]">This field is required</p>
              )}
            </div>

            <button
              type="submit"
              className={
                errors.password
                  ? "mt-0 text-[16px] font-semibold bg-[#6941C6] rounded-[8px] text-white py-[10px] px-[129px]"
                  : "mt-[40px] text-[16px] font-semibold bg-[#6941C6] rounded-[8px] text-white py-[10px] px-[129px]"
              }
            >
              Sign Up
            </button>
          </form>
          <p className="mt-[27px] mr-[67px] text-[#B0B7C3] pb-[64px]">
            Already have an account?{" "}
            <span className="text-[#377DFF]">Sign In</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
