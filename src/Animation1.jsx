import React, { useEffect, useState } from 'react';
import styles from "./Animation.module.css";
import { SiNike } from "react-icons/si";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { MdIncompleteCircle } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { CiAlarmOn } from "react-icons/ci";
import { CiFlag1 } from "react-icons/ci";
import { IoExtensionPuzzleOutline } from "react-icons/io5";
import { FaTasks } from "react-icons/fa";
const Animation1 = () => {
 const [div1,setDiv1]= useState(1);

 const [ww,setWw]=useState(0);

  // console.log("This is top");s
  window.addEventListener("scroll",()=>{
    console.log(document.documentElement.scrollTop)
    // console.log("Event is fired");
  

    if(document.documentElement.scrollTop<=2000)
    {
     setWw(0);
     setDiv1(1);
    }
  else if(document.documentElement.scrollTop>=2000&&document.documentElement.scrollTop<2260 )
      {
       setWw(39);
       setDiv1(2);
      }
     else if(document.documentElement.scrollTop>=2260&&document.documentElement.scrollTop<2360 )
        {
         setWw(73);
         setDiv1(3);
        }
       else if(document.documentElement.scrollTop>=2360)
          {
           setWw(100);
           setDiv1(4);
          }
    
  })
  console.log(document.documentElement.scrollTop)
  const [scrollData, setScrollData] = useState(0);
  const data=document.documentElement.scrollTop;
  // const ww=67;

  // const handleScroll = () => {
  //   const data = document.getElementById("animation");
  //   if (data) {
  //     const mainswing = data.scrollTop;
  //     setScrollData(mainswing);
  //     console.log("Scroll event fired: ", mainswing);
  //   }
  //   console.log('khjkhgb')
  // };

  // useEffect(() => {
  //   const data = document.getElementById("animation");
    
  //   if (data) {
  //     data.addEventListener('scroll', handleScroll);
      
  //     // Cleanup function to remove event listener
  //     return () => {
  //       data.removeEventListener('scroll', handleScroll);
  //     };
  //   }
  // }, []);


  return (
    <div className={styles.container}  >
      <div className={styles.inner} >
        <div className={styles.innerh1} >
          “TaskEasy makes it easy to go as simple or as complex as you want”
        </div>
      </div>
      <div className={styles.verge}>
        <div className={styles.vergeInner}>- The Verge</div>
      </div>
      <div className={styles.main}>
        <div className={styles.div1}>
          <div className={styles.mainDiv1}>Simple</div>
        </div>
        <div className={styles.mainInner} id="animation">
          <div className={styles.mainInner1} style={{ height: '1000px',  }}>
            <div className={styles.complex}>
              {div1==1&&<img src="../P1.png" height={350} width={350}/>}
              {div1==2&&<img src="../P2.png" height={350} width={350}/>}
              {div1==3&&<img src="../P3.png" height={350} width={350}/>}
              {div1==4&&<img src="../P4.png" height={350} width={350}/>}
            </div>
            <div className={styles.complex}>
              <div className={styles.complexInner}> 
                <div className={styles.complexChild} style={{height:`${ww}%`}} >
                <div> <IoIosCheckmarkCircleOutline style={{ textAlign:"center",fontWeight:"bold"}} /> </div>
                <div><IoIosCheckmarkCircleOutline /></div>
                <div><IoIosCheckmarkCircleOutline /></div>
                <div><IoIosCheckmarkCircleOutline /></div>
                </div><IoIosCheckmarkCircleOutline /></div>
                
                
            </div>
            <div className={styles.complex}>
              <div>
               {div1==1&& <div>
                <div className={styles.icon}>
                  <div><IoMdAdd /></div>
                  <div>Add Task</div>
              </div>
              <div className={styles.icon}>
                  <div><MdIncompleteCircle /></div>
                  <div>Complete</div>
              </div>
              </div>}
              {div1==2&&<div>
                <div className={styles.icon}>
                  <div><IoMdAdd /></div>
                  <div>Add Task</div>
              </div>
              <div className={styles.icon}>
                  <div><MdIncompleteCircle /></div>
                  <div>Complete</div>
              </div>
              <div className={styles.icon}>
                  <div><CiAlarmOn /></div>
                  <div> Reminder</div>
              </div>
              <div className={styles.icon}>
                      <div><CiFlag1 /></div>
                      <div>Priority</div>
                  </div>
              </div>}
              {div1==3&&<div>
                <div className={styles.icon}>
                  <div><IoMdAdd /></div>
                  <div>Add Task</div>
              </div>
              <div className={styles.icon}>
                  <div><MdIncompleteCircle /></div>
                  <div>Complete</div>
              </div>
              <div className={styles.icon}>
                  <div><CiAlarmOn /></div>
                  <div> Reminder</div>
              </div>
              <div className={styles.icon}>
                      <div><CiFlag1 /></div>
                      <div>Priority</div>
                  </div>
              <div className={styles.icon}>
                  <div><IoExtensionPuzzleOutline /></div>
                  <div>Extension</div>
              </div>
              
                
                </div>}

                
                  {div1==4&&<div>
                    <div className={styles.icon}>
                  <div><IoMdAdd /></div>
                  <div>Add Task</div>
              </div>
              <div className={styles.icon}>
                  <div><MdIncompleteCircle /></div>
                  <div>Complete</div>
              </div>
              <div className={styles.icon}>
                  <div><CiAlarmOn /></div>
                  <div> Reminder</div>
              </div>
                  <div className={styles.icon}>
                      <div><CiFlag1 /></div>
                      <div>Priority</div>
                  </div>
                  <div className={styles.icon}>
                  <div><IoExtensionPuzzleOutline /></div>
                  <div>Extension</div>
              </div>
                  <div className={styles.icon}>
                      <div><FaTasks /></div>
                      <div>Task</div>
                      
                  </div>
                    
                    </div>}
                
              </div>
            </div>
          </div>
        </div>
        <div className={styles.mainDiv1}>Advance</div>
       
      </div>
   
    </div>
  );
};

export default Animation1;
