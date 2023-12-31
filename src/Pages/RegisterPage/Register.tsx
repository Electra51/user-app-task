import { useEffect } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import HeadHook from "../../components/common/HeadHook";
import logo from "../../assets/logo/logo.png";
import { setUser } from "../../redux/authSlice";
import { useAppDispatch } from "../../redux/hooks";
import { useRegisterUserMutation } from "../../redux/authApi";
import PasswordStrength from "../../components/common/PasswordStrength";

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

  const passwordValue = watch("password");
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [registerUser, { data, isSuccess }] = useRegisterUserMutation();

  //register submit function
  const onSubmit: SubmitHandler<Inputs> = async ({ email, password }) => {
    if (email && password) {
      try {
        await registerUser({ email, password });
      } catch (error) {
        console.error("Login failed", error);
        toast.error("Login failed. Please try again.");
      }
    } else {
      toast.error("Please fill in all input fields");
    }
  };

  useEffect(() => {
    if (isSuccess) {
      toast.success("user login successfully");
      dispatch(setUser({ token: data.token, name: data.email }));
      navigate("/");
    }
  });

  return (
    <div>
      <HeadHook
        description="User application using typscript"
        keywords="Reactjs, Typescript, Tailwindcss"
        author="Safayet Nur"
        title="Stack-Signup"
      />
      <div
        className="w-[444px] h-[576px] border-[1px] border-[#EEEEEE] rounded-[16px] mx-auto my-[1%]"
        style={{ boxShadow: "0 20px 24px -4px rgba(16, 24, 40, 0.08)" }}
      >
        <div className="ps-[62px] pt-[52px]">
          <div className="flex justify-start items-start gap-[10px]">
            <img src={logo} alt="logo" height={40} />
            <h2 className="font-bold text-[28px] text-[#4E5D78]">Stack</h2>
          </div>
          <p className="pt-[20px] text-[#404040] font-semibold text-xl">
            Sign Up to join with Stack
          </p>
          <form onSubmit={handleSubmit(onSubmit)} className="pt-[52px]">
            <div className="form-control">
              <label className="text-[#344054] font-medium text-[14px] pb-[6px]">
                Email
              </label>
              {errors.email ? (
                <input
                  type="text"
                  placeholder="Enter Email"
                  className="input input-bordered input-error !rounded-[8px] w-full max-w-[320px]"
                  {...register("email", {
                    required: "This field is required",
                  })}
                />
              ) : (
                <input
                  type="text"
                  placeholder="Enter Email"
                  className="input input-bordered !rounded-[8px] w-full max-w-[320px]"
                  {...register("email", {
                    required: "This field is required",
                  })}
                />
              )}
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
              {errors.password ? (
                <input
                  type="password"
                  placeholder="******"
                  className="input input-bordered input-error !rounded-[8px] !w-[320px] mt-0.5"
                  {...register("password", {
                    required: "This field is required",
                  })}
                />
              ) : (
                <input
                  type="password"
                  placeholder="******"
                  className="input input-bordered !rounded-[8px] !w-[320px] mt-0.5"
                  {...register("password", {
                    required: "This field is required",
                  })}
                />
              )}

              {errors.password && (
                <p className="pt-[6px] text-[#F04438] text-[14px] font-normal pb-[17px]">
                  This field is required
                </p>
              )}
              {passwordValue ? (
                <PasswordStrength valueOfPassword={passwordValue} />
              ) : (
                ""
              )}
            </div>

            <button
              type="submit"
              className={
                errors.password || passwordValue
                  ? "mt-0 text-[16px] font-semibold bg-[#6941C6] rounded-[8px] text-white py-[10px] px-[129px] !w-[320px]"
                  : "mt-[40px] text-[16px] font-semibold bg-[#6941C6] rounded-[8px] text-white py-[10px] px-[129px] !w-[320px]"
              }
            >
              Sign Up
            </button>
          </form>
          <p className="mt-[27px] mr-[67px] text-[#B0B7C3] pb-[64px]">
            Already have an account?{" "}
            <Link to="/login">
              {" "}
              <span className="text-[#377DFF] cursor-pointer">Sign In</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
