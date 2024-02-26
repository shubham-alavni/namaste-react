import { useEffect } from "react";
const Contact = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Contact Page Timer Running");
    }, 1000);
    // you can clear the memory leak by using the return statement in the useEffect hook. The return statement is used to clear the timer when the component is unmounted. The return statement is used to perform cleanup operations in the useEffect hook
    return () => {
      console.log("UseEffect Cleanup");
      console.log("Contact Page Timer Cleared");
      clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <h1>Contact Us!!</h1>
    </div>
  );
};

export default Contact;
