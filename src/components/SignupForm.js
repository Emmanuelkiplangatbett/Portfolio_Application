const SignupForm = () => {
    const {
      register,
      reset,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const onSubmit = (data) => {
      // console.log(data);
      // console.log({ ...register("email") });
      reset();
    };
  
    return (
      <div className="center">
        <h1>Signup</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="txt_field">
            <input type="text" name="full_name" placeholder="Enter your full name"
            {...register("full_name", {
                required: "Name is required.",
                minLength: {
                  value: 2,
                  message: "Name must be at-least 2 characters.",
                },
              })}
             />
             {errors.first_name && (
              <p className="errorMsg">{errors.full_name.message}</p>
            )}
          </div>
          
          <div className="txt_field">
            <input
              type="text"
              placeholder="Email address"
              name="email"
              {...register("email", {
                required: "Email is required.",
                pattern: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                message: "Email is not valid",
              })}
            />
            {errors.email && <p className="errorMsg">{errors.email.message}</p>}
            {errors.email?.type === "pattern" && (
              <p className="errorMsg">Email is not valid.</p>
            )}
          </div>
          <div className="txt_field">
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "Password is required.",
                minLength: {
                  value: 6,
                  message: "Password must be atleast 6 characters.",
                },
              })}
            />
            {errors.password && (
              <p className="errorMsg">{errors.password.message}</p>
            )}
          </div>
          <div className="txt_field">
            <input type="password" name="password" placeholder="Confirm password" />
          </div>
          <button type="submit">Register</button>
          <div className="signup_link">
            Already registered? <a href="#">Login</a>
          </div>
        </form>
      </div>
    );
  };
  
  export default SignupForm;