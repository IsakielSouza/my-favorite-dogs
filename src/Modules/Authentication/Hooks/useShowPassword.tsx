import { useState } from "react";

export function useShowPassword() {
  const [showPassword, setShowPassword] = useState(false);

  function handleShowPassword() {
    setShowPassword(!showPassword)
  }
  
  return { showPassword, handleShowPassword }
}