import { RegistrationForm } from "@/components/auth/forms/registration-form";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up - Favobliss",
};

const RegistrationPage = () => {
    return (
        <div>
            <RegistrationForm/>
        </div>
    )
}

export default RegistrationPage;