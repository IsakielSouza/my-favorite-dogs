import { useState } from "react";

export function useShowPassword() {
  const [showPassword, setShowPassword] = useState(true);

  function handleShowPassword() {
    setShowPassword(!showPassword)
  }
  
  return { showPassword, handleShowPassword }
}