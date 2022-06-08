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

const homeTabs = ['Product', 'My Cart', 'Service']

const FormInput={
    NAME:"Name",
    EMAIL:"Email",
    PASSWORD:"Password",
    FORGET_PASSWORD:"Forget Password"

}

const ScreensData={
    Signin:{
        SIGN_IN_TEXT:"Sign in to continue.",
        DONT_HAVE_AN_ACCOUNT:"Don't have an account"
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
    ScreensData,
    button
}