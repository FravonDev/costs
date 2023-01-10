import styles from "./Message.module.css";
import { useState, useEffect } from "react";

function Message({ type, msg }) {
  //rendercação condicional da message
  const [visible, setVisible] = useState(false);
  // renderizar apenas por um periodo de tempo
  useEffect(()=>{
    if (!msg){
        setVisible(false)
        return
    }
    // se tiver mensagem 
    setVisible(true)
    //começa o timer
    const timer = setTimeout(()=>{
        setVisible(false)
    },3000)
    //finaliza o timer
    return() => clearTimeout(timer)
  }, [msg])

  return (
    <>
      {visible && (
        <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
      )}
    </>
  );
}
export default Message;
