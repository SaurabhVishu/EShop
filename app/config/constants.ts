import icons from "./icons"

const walkthrough_01_01_images = [
    require("../assets/images/walkthrough/walkthrough_01_01.png"),
    require("../assets/images/walkthrough/walkthrough_01_02.png"),
    require("../assets/images/walkthrough/walkthrough_01_03.png"),
    require("../assets/images/walkthrough/walkthrough_01_04.png"),
]

const walkthrough_01_02_images = [
    require("../assets/images/walkthrough/walkthrough_01_05.png"),
    require("../assets/images/walkthrough/walkthrough_01_06.png"),
    require("../assets/images/walkthrough/walkthrough_01_07.png"),
    require("../assets/images/walkthrough/walkthrough_01_01.png"),
]

const walkthrough = [
    {
        id: 0,
        title: "Genuine product",
        sub_title: "Diversified items of products in life, genuine product, safe",
    },
    {
        id: 1,
        title: "Convenient ordering",
        sub_title: "Order multiple items from multiple brands at the same time",
    },
    {
        id: 2,
        title: "Easy search",
        sub_title: "Find products easy with Scanning camera, pay with just one camera scan",
    },
    {
        id: 3,
        title: "Super fast delivery",
        sub_title: "Delivery within the next day including Saturday and Sunday",
    },
]


const signupdata=[
    {
        id:1,
        placeholder:"name",
        icon:icons.person,
        rightIcon:undefined
    },
    {
        id:2,
        placeholder:"Email",
        icon:icons.email,
        rightIcon:undefined
    },
    {
        id:3,
        placeholder:"Phone",
        icon:icons.phone,
        rightIcon:undefined
    },
    {
        id:4,
        placeholder:"Country",
        icon:undefined,
        rightIcon:icons.arrow_down_fill,

    },
    {
        id:5,
        placeholder:"Password",
        icon:icons.lock,
        rightIcon:icons.eye
    },

]

const homeTabs = ['Product', 'My Cart', 'Service']


const FormInput={
    NAME:"Name",
    EMAIL:"Email",
    PASSWORD:"Password",
    FORGET_PASSWORD:"Forget Password",
    validation: {
        USERNAME: 'Invalid Username',
        EMAILVALIDATION: 'Invalid Email',
        PASSWORDVALIDATION:
          'Min 8 letter password, with at least a symbol, upper and lower case letters and a number',
      },


}

const screensData={
    Signin:{
        SIGN_IN_TEXT:"Sign in to continue.",
        DONT_HAVE_AN_ACCOUNT:"Don't have an account"
    },
    signUpScreen:{
        createNew:"Create new",
        account:"account",
        description:"By registering you agree to out Terms and that you have read out Data Use Policy"
    },
    forgetPassword:{
        forgetPassword:'Forget Password',
        continueUsingPhoneNumber:'continue using phone number.',
        sendVerificationCode:'Send Verification Code',
    },
    welcomeScreen:{
        welcomeText:'Welcome to E-Shop',
        getStarted:'Get Started',
        alreadyHaveAccount:'Already Have Account'
    }
}

const button={
    LOG_IN:"Log In",
    CREATE_NEW_ACCOUNT:"Create New Account"
}

export default {
    walkthrough_01_01_images,
    walkthrough_01_02_images,
    walkthrough,
    homeTabs,
    FormInput,
    screensData,
    button,
    signupdata,
}