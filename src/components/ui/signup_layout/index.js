"use client";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";

export default function SignUpLayout() {
  return (
    <>
      <LoginLink>Sign in</LoginLink>
      <RegisterLink>Sign up</RegisterLink>
    </>
  );
}
