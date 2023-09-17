"use client";
import { useRouter } from "next/navigation";
import { useFormik } from "formik";
import * as Yup from "yup";

const Email = () => {
  //Router
  const router = useRouter();

  //Formik

  const formik = useFormik({
    initialValues: {
      email: "",
    },

    validationSchema: Yup.object({
      email: Yup.string()
        .email("Vaild email required")
        .required("Email is required"),
    }),

    //Submit
    onSubmit: (values) => {
      console.log(values);
      router.push(`/two?email=${values.email}`);
    },
  });

  return (
    <div>
      <form
        className="mt-4 flex flex-col gap-6"
        action="#"
        method="POST"
        onSubmit={formik.handleSubmit}
      >
        <div>
          <div className="flex justify-between items-center">
            <label
              htmlFor="email"
              className="block text-[10px] font-bold text-DarkSlateGray
                  mobile:text-[12px]
                  mobileBig:text-[14px]
                  "
            >
              Email Address
            </label>
            <label
              htmlFor="email"
              className="block text-[8px] font-bold  text-Tomato"
            >
              {formik.touched.email && formik.errors.email
                ? formik.errors.email
                : ""}
            </label>
          </div>
          <div className="mt-1">
            <input
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              name="email"
              type="email"
              autoComplete="email"
              pattern="^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
              className={`border ${
                formik.touched.email && formik.errors.email
                  ? "border-Tomato text-Tomato"
                  : "border-Gray"
              } w-full p-[6px] bg-none text-coolGray text-[12px] rounded-md px-[10px] 
              mobile:text-[14px]
              mobileBig:text-[16px]
                             focus:outline-none ${
                               formik.touched.email && formik.errors.email
                                 ? "focus:border-Tomato text-Tomato bg-Tomato bg-opacity-10"
                                 : "focus:border- focus:ring-DarkSlateGray"
                             } focus:ring-1 focus:text-CharcoalGray focus:font-medium focus:bg-transparent bg-transparent`}
              placeholder="email@company.com"
            />
          </div>
        </div>

        <div className="relative group">
          <button
            className="w-full text-White font-medium py-3 bg-DarkSlateGray absolute  group-hover:opacity-50 
             text-[10px] rounded-md mt-4 bg-gradient-to-tr from-Peach to-Orange blur-sm opacity-0
             mobile:-mt-1
             mobileBig:mt-2
             "
          >
            Subscribe to monthly newsletter
          </button>
          <button
            className="w-full text-White font-medium py-3 bg-DarkSlateGray relative  z-10
             text-[10px] rounded-md mt-3  group-hover:bg-gradient-to-tr from-Peach to-Orange  
             mobile:-mt-2 mobile:text-[14px] mobile:font-medium
             mobileBig:mt-1 mobileBig:text-[14px] mobileBig:font-medium
             "
          >
            Subscribe to monthly newsletter
          </button>
        </div>
      </form>
    </div>
  );
};

export default Email;
