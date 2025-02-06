"use client";
import { ChangeEvent, useState } from "react";
import { validateForm } from "@/utils/validate";
import { Button } from "@/components/ui/button";
type SignupProps = object;
const initSignupForm = {
  email: "",
  password: "",
  cfpassword: "",
};
const SignUp: React.FC<SignupProps> = ({}) => {
  const [user, setUser] = useState(initSignupForm);
  const [errors, setError] = useState<Record<string, string>>({});
  const [isloading, setIsloading] = useState<boolean>(false);
  const handleChanged = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((pre) => {
      return { ...pre, [name]: value };
    });
    setError((pre) => {
      return { ...pre, [name]: " " };
    });
    // console.log(user);
  };
  const handleSubmit = (d: ChangeEvent<HTMLFormElement>) => {
    if (isloading) return;
    d.preventDefault();
    // console.log(user);
    const errors = validateForm(user);
    setError(errors);
    const noErrors = Object.values(errors).every((error) => error === " ");
    if (noErrors) {
      console.log("Form submit successfully: ", user);
      setUser(initSignupForm);
    }
    setIsloading(false);
  };
  return (
    <>
      <form
        onSubmit={handleSubmit}
        noValidate
        action=""
        className="flex justify-center items-center h-screen"
      >
        <div className="flex flex-col w-[600px] space-y-3 bg-slate-200 p-8 font-sans font-semibold text-lg rounded">
          <h1 className="text-center font-bold text-4xl text-blue-500">
            Sign up
          </h1>
          <label htmlFor="Email">Email Address</label>
          <input
            className="border p-3 rounded "
            type="email"
            name="email"
            value={user.email}
            onChange={handleChanged}
            placeholder="Email Address"
          />
          {errors.email && <p className="text-red-500">{errors.email}</p>}
          <label htmlFor="password">Password</label>
          <input
            className="border p-3 rounded "
            type="password"
            name="password"
            value={user.password}
            onChange={handleChanged}
            placeholder="Password"
          />
          {errors.password && <p className="text-red-500">{errors.password}</p>}
          <label htmlFor="cfpassword">Comfirm password</label>
          <input
            className="border p-3 rounded"
            type="password"
            name="cfpassword"
            value={user.cfpassword}
            onChange={handleChanged}
            placeholder="Comfirm Password"
          />
          {errors.cfpassword && (
            <p className="text-red-500">{errors.cfpassword}</p>
          )}
          {/* <div className="text-right">
            <button
              className="font-semibold text-lg bg-blue-500 px-4 py-2 rounded text-white mt-3 hover:bg-blue-800 duration-300"
              type="submit"
              disabled={isloading}
            >
              Sign up
            </button>
          </div> */}

          <Button type="submit" disabled={isloading} variant={"secondary"}>
            Sign up
          </Button>
        </div>
      </form>
    </>
  );
};

export default SignUp;
