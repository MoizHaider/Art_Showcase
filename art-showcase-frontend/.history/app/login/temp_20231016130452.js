import React from "react";
import Link from "next/link";
import Calender from "/public/images/CalenderIcon.png";
import BannerImage from "/public/images/Banner_orderPage.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import Radio from "@mui/material/Radio";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import textBg from "/public/images/textBg.jpg";
import cross from "/public/images/SVG/cross.svg";
import visa from "/public/images/SVG/visa.svg";
import mastercard from "/public/images/SVG/mastercard.svg";
import paypal from "/public/images/SVG/paypal.svg";
import amex from "/public/images/SVG/american.svg";
import { set } from "react-ga";
import { menuClasses } from "@mui/material";
import { Formik, Field, ErrorMessage } from "formik";
import axios from "axios";
import * as Yup from "yup";
import * as customersAPI from "../call/customers/customersfront";
import * as couponsAPI from "../call/coupons";
import router from "next/router";
import { getplan, getplanbytitle, getplansfront } from "../store/plans";
import * as orderAPI from "../call/orders";

let fb;
const facebookPixelId = "945164849934832";

const baseURL =
  process.env.NEXT_PUBLIC_REACT_APP_SERVER_URL ||
  "https://back.Beyondfit.co.in";

function OrderMenu(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getplansfront());
  }, []);
  const programs = useSelector((state) => state.plans.data);
  const plan = useSelector((state) => state.plans.plan);
  const handleCheckout = () => {
    if (menuValid) {
      props.setFormOpen(!props.formOpen);
    }
    validateMenu();
  };
  // personal details form variables
  const [formData, setFormData] = useState({
    name: "",
    gender: "",
    email: "",
    phone: "",
    address: "",
    address2: "",
    pincode: "",
    promocode: "",
    totalcost: "",
  });

  // object to store state of menu selectables
  const [planId, setPlanId] = useState(3);
  const [menu, setMenu] = useState({
    program: { id: 37, title: "Weight Loss" },
    meals: [],
    veg: "",
    plan: planId,
    dislikes: "",
    startDate: new Date(),
  });
  //    console.log(menu);
  // function to validate menu

  const [totalCost, setTotalCost] = useState(0);
  const [selectedprogram, setSelectedProgram] = useState({
    id: 37,
    title: "Weight Loss",
  });
  const [couponApplied, setCouponApplied] = useState(false);
  const handleApplyCoupon = () => {
    const code = document.querySelector('input[name="promocode"]').value;
    couponsAPI.getcouponbytitle(code).then((response) => {
      if (response?.data?.data?.id === undefined) {
        setCouponError("Invalid Coupon");
      }
      if (couponApplied == false) {
        if (response?.data?.data?.minimumdays > menu.plan) {
          setCouponError("Minimum days not satisfied");
          return;
        }
        if (new Date(response?.data?.data?.validity) < new Date()) {
          setCouponError("Coupon Expired");
          return;
        }
        if (response?.data?.data?.category === "percentage") {
          setTotalCost(
            (prevTotalCost) =>
              prevTotalCost -
              (prevTotalCost * response?.data?.data?.discount) / 100
          );
          setCouponApplied(true);
        } else if (response?.data?.data?.category === "price") {
          setTotalCost(
            (prevTotalCost) => prevTotalCost - response?.data?.data?.discount
          );
          setCouponApplied(true);
        }
      } else {
        setCouponError("Coupon already applied");
      }
    });
  };
  const plans = [
    {
      id: 3,
      title: "3 Days",
      desc: "Trial for Free",
    },
    {
      id: 7,
      title: "1 Week",
      desc: "Seven Days",
    },
    {
      id: 14,
      title: "2 Weeks",
      desc: "Fourteen Days",
    },
    {
      id: 21,
      title: "3 Weeks",
      desc: "Twenty One Days",
    },
    {
      id: 31,
      title: "4 Weeks",
      desc: "Thirty One Days",
    },
  ];
  useEffect(() => {
    // Reset the values when the form is closed
    setTotalCost(0);
    setpincode("");
  }, [menu]);
  const [veg, setVeg] = useState("non-veg");

  // to intialize with default value
  useEffect(() => {
    setMenu((prevMenu) => ({ ...prevMenu, veg: veg }));
  }, []);
  const handleRadioChange = (e) => {
    const veg = e.target.value;
    setVeg(veg);
    setMenu((prevMenu) => ({ ...prevMenu, veg: veg }));
  };
  const [ingeredientsDislikes, setIngredientsDislikes] = useState("");
  const [mealsSelected, setMealsSelected] = useState([]);
  const handleMealsSelection = (id) => {
    if (mealsSelected.includes(id)) {
      // If the ID is already in the array, remove it
      setMealsSelected((prevMealsSelected) =>
        prevMealsSelected.filter((mealId) => mealId !== id)
      );
    } else {
      // If the ID is not in the array, add it
      setMealsSelected((prevMealsSelected) => [...prevMealsSelected, id]);
    }
  };
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    gender: Yup.string().required("Gender is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string()
      .matches(/^\d{10}$/, "Invalid mobile number")
      .required("Mobile number is required"),
    address: Yup.string().required("Address is required"),
    pincode: Yup.string()
      .matches(/^[0-9]{6}$/, "Invalid pincode")
      .required("Pincode is required"),
    totalcost: Yup.string(),
    address2: Yup.string(),
  });
  const [pincodeerror, setpincodeerror] = useState("");
  const []
  const [pincode, setpincode] = useState("");
  const onSubmit = async (values) => {
    try {
      setError("");
      setLoading(true);
    } catch (error) {
      setError(error.response ? error.response.data.message : error.message);
    } finally {
      setLoading(false);
    }
    //console.log(error.response);
  };
  const frequency = {
    0: "breakfast",
    1: "lunch",
    2: "dinner",
  };
  function openCheckout(values) {
    dispatch(getplan(menu.program.id));
    console.log("Menu", menu);
    values.frequency = menu.meals.map((meal) => frequency[meal]);
    values.number_of_days = menu.plan;
    values.plan_id = menu.program.id;
    values.plan_title = menu.program.title;
    values.veg = menu.veg;
    values.totalcost = totalCost;
    if (menu.veg == "veg") {
      values.personal_custom_menu = plan.current_menu;
    } else {
      values.personal_custom_menu = plan.current_menu_nv;
    }
    console.log("values", values);
    let costforrazorpay = values.totalcost * 100;
    console.log(couponApplied);
    if (couponApplied == true && values.totalcost == 0) {
      orderAPI.createfreeorder(values).then((response) => {
        console.log("order created");
        if (response.data.success == "1") {
          router.push({
            pathname: "/login",
            params: {
              transaction_id: "transaction_id_222",
              message: "Thanks for the order. You can login now",
              cost: totalCost,
            },
          });
          return "";
        }
      });
    }

    if (values.email && values.phone && values.fullname) {
      console.log("baseurl", baseURL);

      axios
        .post(`${baseURL}/api/orders/order-id-generate`, {
          amount: String(costforrazorpay + "00"),
          receiptName: "demo",
          orderNote: "Health and Beyond",
        })
        .then((result) => {
          console.log("this is result", result);

          var options = {
            key: "rzp_live_OiKkqzF38OtFbL", // razorpay key id generated from dashbord
            order_id: result.data.data.id, //order id is generated from server order
            // amount: String(cost) + "00", // Amount is in currency sub units. Default currency is INR. Hence, 50000 refers to 50000 paise
            amount: String(costforrazorpay) + "00", // Amount is in currency sub units. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "Beyondfit.co.in",
            description: "Purchase Description",
            image: "https://Beyondfit.co.in/logo.png",
            handler: function (response) {
              console.log("I am in handler function");
              let postvalues = values;
              console.log("openCheckout", values);
              postvalues.plan_id = plan.id;
              postvalues.razorpay_payment_id = response.razorpay_payment_id;
              postvalues.razorpay_order_id = response.razorpay_order_id;
              postvalues.razorpay_signature = response.razorpay_signature;
              values.startDate = startDate;
              values.price = costforrazorpay;
              values.plan_title = plan.title;

              // if (values.vegnonveg !== "Non Veg") {
              //   postvalues.personal_custom_menu = props.plan.current_menu;
              // } else {
              //   postvalues.personal_custom_menu = props.plan.current_menu_nv;
              // }
              orderAPI.createorder(values).then((response) => {
                console.log("order created 2");
                if (response.data.success == "1") {
                  // let costoforder = costforrazorpay / 1000;
                  router.push(
                    "/login?message=Thanks for the order. You can login now&cost=" +
                      totalCost
                  );
                }
              });
              //console.log(res.data)
              //console.log(response);
            },
            prefill: {
              name: values.fullname,
              email: values.email,
              contact: values.phone,
            },
            notes: {
              address: "Razorpay Corporate Office",
            },
            theme: {
              color: "#F37254",
            },
          };
          let rzp = new Razorpay(options);

          rzp.open();
          rzp.on("payment.failed", function (response) {
            // alert(response.error.code)
            alert(response.error.description);
            //alert(response.error.source)
            // alert(response.error.step)
            // alert(response.error.reason)
            //alert(response.error.metadata.order_id)
            //alert(response.error.metadata.payment_id)
          });
        })
        .catch((err) => {
          console.log(
            "something went wrong to create order"
            //   err.response.data
          );
        });
    } else {
      console.log("please fill all the fields");
    }
  }
  // state variables for personal details form
  const [couponerror, setCouponError] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [menuValid, setMenuValid] = useState(false);
  const validateMenu = () => {
    if (mealsSelected.length > 0) {
      setMenuValid(true);
    } else if (mealsSelected.length === 0) setMenuValid(false);
  };
  //update menu object when mealsSelected changes
  useEffect(() => {
    setMenu((prevMenu) => ({ ...prevMenu, meals: mealsSelected }));
    validateMenu(); // Call validateMenu after state update
  }, [mealsSelected]); // Run this effect whenever mealsSelected changes
  return (
    <>
      <section className="bg-white gap-8 flex flex-col md:flex-row justify-between w-full text-[#243064] pb-[100px]">
        <div className="w-full md:w-[50%] relative order-2 md:order-1">
          <img
            src={textBg}
            className="absolute block xs:hidden md:block lg:hidden w-full h-[35%] object-cover z-0"
          />
          <div
            className={`uppercase relative xs:absolute md:relative lg:absolute text-[1.3rem] xs:text-[1.5rem] sm:text-[35px] h-[30%] w-[80%] xs:w-[40%] md:w-[70%] lg:w-[100%] xl:w-[40%] pl-[3%] xl:pl-[5%] mt-[5%] md:mt-[2%] xl:mt-[5%] tracking-[2px] z-10 ${
              props.formOpen ? "hidden" : "block"
            }`}
          >
            <p className="font-lato-light pr-4 lg:pr-0">
              Eating is a necessity
            </p>
            <p className="font-lato-bold-italic pr-4 lg:pr-[50%] xl:pr-10">
              but cooking is an art
            </p>
          </div>
          <img
            src={BannerImage}
            className={`relative w-full h-[70%] lg:h-full object-cover z-20 xs:z-0 ${
              props.formOpen ? "z-0" : "z-20"
            }`}
          />
        </div>
        <div className="w-full md:w-[48%] flex flex-col pr-0 px-4 sm:px-10 md:px-0 order-1 md:order-2">
          <h1 className="font-lato-heavy text-[24px]">Get Strated</h1>
          <div>
            <h2 className="font-lato-bold text-[16px] py-2">
              Choose Your Plan
            </h2>
            <div className="flex gap-2 flex-wrap text-[#7d828b] ">
              {programs.map((program) => {
                return (
                  <div
                    className={`cursor-pointer border-[1px] border- hover:border-[#ec8259] ${
                      program.id === selectedprogram.id
                        ? "bg-[#ec8259] text-white"
                        : "bg-[#efe9e1] text-[#7d828b]"
                    } w-[45%] sm:w-[30%] md:w-[45%] lg:w-[40%] xl:w-[25%] h-auto  rounded-md px-4 py-3`}
                    onClick={() => {
                      setSelectedProgram(program);
                      setMenu({ ...menu, program: program });
                    }}
                  >
                    <h3 className="font-lato-medium text-[10px] xs:text-[12px]">
                      {program.title}
                    </h3>
                  </div>
                );
              })}
            </div>
          </div>
          <div>
            <h2 className="font-lato-bold text-[16px] py-2">
              Choose Your Meals
            </h2>
            <div className="flex gap-2 flex-wrap text-[#7d828b]">
              <div
                className={`border-[1px] border- hover:border-[#ec8259] cursor-pointer flex flex-col w-[30%] md:w-[30%] lg:w-[25%] h-auto rounded-md px-4 py-1 ${
                  mealsSelected.includes(0)
                    ? "bg-[#ec8259] text-white"
                    : "bg-[#efe9e1] text-[#7d828b]"
                }`}
                onClick={() => handleMealsSelection(0)}
              >
                <h3 className="font-lato-bold text-[10px] xs:text-[12px]">
                  Breakfast
                </h3>
                <p className="text-[8px] xs:text-[10px] font-lato-medium">
                  250-450 Kcal
                </p>
              </div>
              <div
                className={`border-[1px] border- hover:border-[#ec8259] cursor-pointer flex flex-col w-[30%] md:w-[30%] lg:w-[25%] h-auto rounded-md px-4 py-1 ${
                  mealsSelected.includes(1)
                    ? "bg-[#ec8259] text-white"
                    : "bg-[#efe9e1] text-[#7d828b]"
                }`}
                onClick={() => handleMealsSelection(1)}
              >
                <h3 className="font-lato-bold text-[10px] xs:text-[12px]">
                  Lunch
                </h3>
                <p className="text-[8px] xs:text-[10px] font-lato-medium">
                  550-600 Kcal
                </p>
              </div>
              <div
                className={`border-[1px] border- hover:border-[#ec8259] cursor-pointer flex flex-col w-[30%] md:w-[30%] lg:w-[25%] h-auto rounded-md px-4 py-1 ${
                  mealsSelected.includes(2)
                    ? "bg-[#ec8259] text-white"
                    : "bg-[#efe9e1] text-[#7d828b]"
                }`}
                onClick={() => handleMealsSelection(2)}
              >
                <h3 className="font-lato-bold text-[10px] xs:text-[12px]">
                  Dinner
                </h3>
                <p className="text-[8px] xs:text-[10px] font-lato-medium">
                  550-600 Kcal
                </p>
              </div>
            </div>
          </div>
          <div className="flex gap-2 flex-col xs:flex-row  md:flex-col lg:flex-row">
            <div className="flex flex-col w-[80%] xs:w-[40%] md:w-[80%] lg:w-[40%]">
              <h2 className="font-lato-bold text-[16px] py-2">
                Ingredients Dislikes
              </h2>
              <input
                type="text"
                name="dislikes"
                placeholder="Enter Disliked Ingredients or any Allergies"
                className="w-full font-lato-medium text-[11px] bg-[#efe9e1] rounded-md px-4 py-3"
                onChange={(e) => {
                  setIngredientsDislikes(e.target.value);
                  setMenu({ ...menu, dislikes: e.target.value });
                }}
              />
            </div>
            <div className="flex flex-col">
              <h2 className="font-lato-bold text-[16px] py-2">
                Meal Preference
              </h2>
              <div className="flex items-center font-lato-medium text-[13px] text-[#7d828b]">
                <Radio
                  value="veg"
                  checked={veg === "veg"}
                  onChange={handleRadioChange}
                  color="secondary"
                  sx={{
                    "&": {
                      color: "default",
                    },
                    "&.Mui-checked": {
                      color: "#ec8259",
                    },
                  }}
                />
                Vegetarian
                <Radio
                  value="non-veg"
                  checked={veg === "non-veg"}
                  onChange={handleRadioChange}
                  color="secondary"
                  sx={{
                    "&": {
                      color: "default",
                    },
                    "&.Mui-checked": {
                      color: "#ec8259",
                    },
                  }}
                />
                Non-Vegetarian
              </div>
            </div>
          </div>
          <div>
            <div>
              <h2 className="font-lato-bold text-[16px] py-2">Select Days</h2>
              <div className="flex gap-2 flex-wrap text-[#7d828b]">
                {plans.map((plan) => {
                  return (
                    <div
                      className={`w-[45%] xs:w-[30%] md:w-[40%] lg:w-[25%] h-auto rounded-md px-4 py-1 flex flex-col cursor-pointer border-[1px] hover:border-[#ec8259] ${
                        plan.id === planId
                          ? "bg-[#ec8259] text-white"
                          : "bg-[#efe9e1] text-[#7d828b]"
                      }`}
                      onClick={() => {
                        setPlanId(plan.id);
                        setMenu({ ...menu, plan: plan.id });
                      }}
                    >
                      <h3 className="font-lato-bold text-[10px] xs:text-[12px]">
                        {plan.title}
                      </h3>
                      <p className="text-[8px] xs:text-[10px] font-lato-medium">
                        {plan.desc}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="flex flex-col xs:flex-row  xs:items-center xs:justify-between gap-2 w-full pr-20">
            <div
              className={`flex flex-col w-[100%] xs:w-[50%] relative z-50 ${
                props.formOpen ? "hidden" : "block"
              }`}
            >
              <h2 className="font-lato-bold text-[16px] py-2">Start Date</h2>
              <div className="flex justify-start items-center w-[80%] sm:w-[70%] md:w-[100%] lg:w-[70%] xl:w-[60%] h-auto bg-[#efe9e1] font-lato-bold text-[12px] text-[#7d828b] rounded-md px-4 py-3">
                <DatePicker
                  selected={startDate}
                  onChange={(date) => {
                    setStartDate(date);
                    setMenu({ ...menu, startDate: date });
                  }}
                  dateFormat={"dd/MM/yyyy"}
                  minDate={new Date()}
                  className="bg-[#efe9e1] w-[75%]"
                />
                <div className="w-[25%]">
                  <img src={Calender} className="w-8 h-6" />
                </div>
              </div>
            </div>
            <Link href="" className="w-[50%]">
              <button
                className="bg-[#787eb0] w-[40%] xs:w-auto text-[10px] sm:text-[12px] font-lato-regular mt-[5%] xs:mt-[10%] lg:mt-[5%] py-1.5 px-2 xs:px-4 lg:px-6 rounded-full text-white tracking-wide"
                onClick={handleCheckout}
              >
                Check Out
              </button>
            </Link>
          </div>
        </div>
      </section>
      <div
        className={`text-[#243064] absolute overflow-scroll top-0 w-[100vw] h-[100vh] backdrop-blur-md ${
          props.formOpen ? "block" : "hidden"
        }`}
      >
        <div className="absolute top-[2%] left-[2.5%] md:left-[15%] lg:left-[27%] xl:left-[30%] w-[95%] md:w-[70%] lg:w-[50%] xl:w-[40%] h-auto bg-white shadow-md shadow-zinc-700 px-4 md:px-16 py-10 z-90">
          <h1 className="text-center  font-lato-black uppercase tracking-[2px]">
            {selectedprogram.name}
          </h1>
          <img
            src={cross}
            onClick={() => props.setFormOpen(!props.formOpen)}
            className="cursor-pointer w-10 h-10 absolute right-3 top-2"
          />
          <Formik
            initialValues={{
              name: "",
              gender: "",
              email: "",
              phone: "",
              address: "",
              address2: "",
              pincode: "",
              promocode: "",
              totalcost: "",
            }}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
          >
            {({ handleSubmit, handleChange, values, errors, touched }) => {
              if (emailRegex.test(values.email) && touched.email === true) {
                customersAPI
                  .checkemail({ email: values.email })
                  .then((response) => {
                    //console.log("response", response)
                    if (response?.data?.data == "Email exist") {
                      errors.email = "The email has already been taken.";
                    } else {
                      errors.email = "";
                    }
                  });
              }
              // if(touched.promocode === true && coupons.includes(values.promocode)){
              //     console.log("FUNCTION CALLED");
              //     couponsAPI.getcouponbytitle(values.promocode).then((response) => {
              //         console.log("RESPONSE",response);
              //     });
              //     // dispatch(getcouponbytitle(values.promocode)).then((action) => {
              //     //     console.log("DISPATCHED CALLED");
              //     //     if(getcouponbytitle.fulfilled.match(action)){
              //     //         console.log("FULFILLED CALLED");
              //     //         if(action.payload.data.category === 'percentage'){
              //     //             console.log("PERCENTAGE CALLED");
              //     //             let discount = (totalCost * action.payload.data.discount)/100;
              //     //             setTotalCost(totalCost - discount);
              //     //         }
              //     //         else if(action.payload.data.category === 'price'){
              //     //             console.log("PRICE CALLED");
              //     //             let discount = action.payload.data.discount;
              //     //             setTotalCost(totalCost - discount);
              //     //         }
              //     //     }
              //     // });
              // }
              if (
                String(values.pincode).length < 6 &&
                touched.pincode === true
              ) {
                setpincodeerror("Enter proper pin code");
              }
              if (
                String(values.pincode).length == 6 &&
                touched.pincode === true &&
                pincode != values.pincode
              ) {
                setpincode(values.pincode);
                //console.log("pin code submit", values.pin_code)

                customersAPI
                  .checkpincode({ pincode: values.pincode })
                  .then((response) => {
                    console.log("pincode rate", response?.data?.data);
                    if (menu.veg === "veg") {
                      setTotalCost(
                        response?.data?.data.rate_veg *
                          menu.plan *
                          menu.meals.length
                      );
                    } else if (menu.veg === "non-veg") {
                      setTotalCost(
                        response?.data?.data.rate_nonveg *
                          menu.plan *
                          menu.meals.length
                      );
                    }
                    if (response?.data?.data == "Pincode not available") {
                      errors.pincode = "Non serviceable area";
                      setpincodeerror(errors.pincode);
                      // setDisabled(true);
                    } else {
                      errors.pincode = "";
                      setpincodeerror("");
                      //setDisabled(false);
                    }
                  });
              }

              return (
                <form
                  className="flex flex-col gap-2 mt-4"
                  onSubmit={handleSubmit}
                >
                  <div className="relative flex gap-0 md:gap-4 items-center mt-[2%] w-full ">
                    <label className="font-lato-bold text-[16px] w-[35%]">
                      Full Name
                    </label>
                    <Field
                      type="text"
                      name="fullname"
                      placeholder="Your Name"
                      className="bg-gray-100 placeholder-gray-600 w-[65%] md:w-[70%] h-[30px] rounded-md px-4 py-2"
                    />
                    <ErrorMessage
                      name="name"
                      component="div"
                      className="text-red-600 text-[10px] left-[40%] top-[100%] absolute"
                    />
                  </div>
                  <div className="relative flex gap-4 items-center mt-[2%] w-full ">
                    <label className="font-lato-bold text-[16px] xs:w-[32%] md:w-[35%] w-[30%]">
                      Email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      placeholder="Email Id"
                      className="bg-gray-100 placeholder-gray-600 w-[65%] md:w-[70%] h-[30px] rounded-md px-4 py-2"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-600 text-[10px] left-[40%] top-[100%] absolute"
                    />
                  </div>
                  <div className="relative flex gap-4 items-center mt-[2%] w-full ">
                    <label className="font-lato-bold text-[16px] xs:w-[32%] md:w-[35%] w-[30%]">
                      Mobile
                    </label>
                    <Field
                      type="text"
                      name="phone"
                      placeholder="Mobile No."
                      className="bg-gray-100 placeholder-gray-600 w-[65%] md:w-[70%] h-[30px] rounded-md px-4 py-2"
                    />
                    <ErrorMessage
                      name="mobile"
                      component="div"
                      className="text-red-600 text-[10px] left-[40%] top-[100%] absolute"
                    />
                  </div>
                  <div className="relative flex gap-4 items-center mt-[2%] w-full ">
                    <label className="font-lato-bold text-[16px] xs:w-[32%] md:w-[35%] w-[30%]">
                      Address
                    </label>
                    <Field
                      type="text"
                      name="address"
                      placeholder="Address Line 1"
                      className="bg-gray-100 placeholder-gray-600 w-[65%] md:w-[70%] h-[30px] rounded-md px-4 py-2"
                    />
                    <ErrorMessage
                      name="address"
                      component="div"
                      className="text-red-600 text-[10px] left-[40%] top-[100%] absolute"
                    />
                  </div>
                  <div className="relative flex gap-4 items-center mt-[2%] w-full ">
                    <label className="font-lato-bold text-[16px] xs:w-[32%] md:w-[35%] w-[30%]">
                      Address 2
                    </label>
                    <Field
                      type="text"
                      name="address2"
                      placeholder="Address Line 2"
                      className="bg-gray-100 placeholder-gray-600 w-[65%] md:w-[70%] h-[30px] rounded-md px-4 py-2"
                    />
                  </div>
                  <div className="relative flex gap-4 items-center mt-[2%] w-full ">
                    <label className="font-lato-bold text-[16px] xs:w-[32%] md:w-[35%] w-[30%]">
                      Pincode
                    </label>
                    <Field
                      type="text"
                      name="pincode"
                      placeholder="Pin Code"
                      className="bg-gray-100 placeholder-gray-600 w-[65%] md:w-[70%] h-[30px] rounded-md px-4 py-2"
                    />
                    {touched.pincode && !pincodeerror ? (
                      <ErrorMessage
                        name="pincode"
                        component="div"
                        className="text-red-600 text-[10px] left-[40%] top-[100%] absolute"
                      />
                    ) : null}

                    {touched.pincode && pincodeerror ? (
                      <div className="text-red-600 text-[10px] left-[40%] top-[100%] absolute">
                        {pincodeerror}
                      </div>
                    ) : null}
                  </div>
                  <div className="relative flex gap-2 items-center mt-[2%] w-full ">
                    <label className="font-lato-bold text-[16px] xs:w-[50%] sm:w-[34%] md:w-[35%] w-[35%]">
                      Promo Code
                    </label>
                    <Field
                      type="text"
                      name="promocode"
                      placeholder="Add a Promo Code"
                      className="bg-gray-100 placeholder-gray-600 w-[50%] xs:w-[70%] sm:w-[50%] md:w-[55%] lg:w-[50%] h-[30px] rounded-md px-4 py-2"
                    />
                    {touched.pincode && couponerror ? (
                      <div className="text-red-600 text-[10px] left-[40%] top-[100%] absolute">
                        {couponerror}
                      </div>
                    ) : null}
                    {/* <ErrorMessage name="promocode" component="div" className="text-red-600 text-[10px] left-[40%] top-[100%] absolute" /> */}
                    <button
                      className="bg-[#787eb0] w-[15%] md:w-[10%] lg:w-[15%] text-[10px] sm:text-[12px] md:text-[10px] lg:text-[12px] font-lato-regular py-1.5 px-2 xs:px-2 md:px-1 lg:px-3 rounded-md text-white tracking-wide"
                      type="button"
                      onClick={handleApplyCoupon}
                    >
                      Apply
                    </button>
                  </div>
                  <div className="flex gap-4 items-center mt-[2%] w-full ">
                    <label className="font-lato-bold text-[16px] xs:w-[32%] md:w-[31%] w-[30%]">
                      Total Cost
                    </label>
                    <input
                      type="text"
                      name="totalcost"
                      readOnly
                      placeholder={`₹ ${totalCost}`}
                      className="pointer-events-none bg-gray-100 placeholder-gray-600 w-[65%] md:[69%] h-[30px] rounded-md px-4 py-2"
                    />
                  </div>
                  <button
                    type="button"
                    className="ml-[25%] xs:ml-[30%] mt-[5%] bg-[#787eb0] px-2 py-2 text-[12px] xs:text-[14px] sm:text-[16px] rounded-full w-[60%] xs:w-[50%] text-white"
                    onClick={() => openCheckout(values)}
                  >
                    Pay Now
                  </button>
                </form>
              );
            }}
          </Formik>
        </div>
      </div>
    </>
  );
}

export default OrderMenu;