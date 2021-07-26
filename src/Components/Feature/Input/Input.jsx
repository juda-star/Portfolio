import styled from "styled-components";
import { useRef, useEffect } from "react";
function Input() {
  function submitHandler(event) {
    console.log(event.target);
    const firstName = event.target[0].value;
    const lastName = event.target[1].value;
    const phone = event.target[2].value;
    const amount = event.target[3].value;
    const subject = "Hello from yehooda ishta";
    const body = `${firstName} ${lastName} - ${phone} <br> ${amount}`;
    window.open(`mailto:yehooda@gmail.com?subject=${subject}&body=${body}`);
  }

  const styleForm = styled.div`
    input {
      width: 100%;
      padding: 12px 20px;
      margin: 8px 0;
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }
  `;
  const FocusRef = useRef();
  useEffect(() => {
    FocusRef.current.focus();
  }, []);

  return (
    <styleForm>
      <fieldset>
        <legend style={{ color: "white" }}>Contact Me</legend>
        <form onSubmit={submitHandler}>
          <div>
            <input
              ref={FocusRef}
              type="text"
              name="first"
              placeholder="Enter first name"
            />
          </div>
          <div>
            <input type="text" name="last" placeholder="Enter last name" />
          </div>
          <div>
            <input type="text" name="phone" placeholder="Enter Phone Number" />
          </div>
          <div>
            <input type="text" name="amount" placeholder="Enter Email" />
          </div>
          <button type="submit">send</button>
        </form>
      </fieldset>
    </styleForm>
  );
}
export default Input;
